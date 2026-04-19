import { NextRequest, NextResponse } from 'next/server';

const MODEL = 'meta-llama/llama-3.3-70b-instruct:free';

// Rate limiting simple en mémoire (reset toutes les minutes)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_PER_MINUTE = 5; // 5 requêtes par minute par IP

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    // Nouvelle fenêtre de rate limiting
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return { allowed: true, remaining: RATE_LIMIT_PER_MINUTE - 1, resetTime: now + 60000 };
  }
  
  if (record.count >= RATE_LIMIT_PER_MINUTE) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_PER_MINUTE - record.count, resetTime: record.resetTime };
}

export async function POST(req: NextRequest) {
  // Rate limiting check
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  const rateLimitInfo = getRateLimitInfo(ip);
  
  if (!rateLimitInfo.allowed) {
    const retryAfter = Math.ceil((rateLimitInfo.resetTime - Date.now()) / 1000);
    return NextResponse.json(
      { 
        error: `Trop de messages. Attends ${retryAfter}s avant de réessayer.`,
        retryAfter,
        remaining: 0
      },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': rateLimitInfo.resetTime.toString(),
          'Retry-After': retryAfter.toString()
        }
      }
    );
  }
  
  const { messages, chapitreContext } = await req.json();
  
  const systemPrompt = `Tu es Professeur Math, un tuteur de mathématiques pour le Bac malien (TSE/TSExp).

RÈGLES STRICTES:
1. Ne JAMAIS donner la réponse directement à un exercice
2. Utiliser la méthode socratique : guider l'élève par des questions
3. Adapter au programme malien officiel
4. Relier aux compétences du chapitre actuel
5. Encourager et valoriser les efforts de l'élève
6. Si l'élève bloque vraiment après 3-4 échanges, donner UN seul indice puis re-questionner
7. Utiliser un ton bienveillant et pédagogique
8. Ne pas référencer que tu es une IA, rester dans le personnage du professeur

CONTEXTE DU CHAPITRE:
- Titre: ${chapitreContext.titre || 'Non spécifié'}
- Objectifs: ${chapitreContext.objectifs?.join(', ') || 'Non spécifiés'}

Tu dois aider l'élève à comprendre et progresser, pas à tricher.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://bacmali.vercel.app',
        'X-Title': 'MaliMath AI'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('OpenRouter error:', errorData);
      
      // Gestion des erreurs spécifiques
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'Limite de requêtes atteinte (20/min). Réessaie dans quelques instants.' },
          { status: 429 }
        );
      }
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Problème d\'authentification. Contacte l\'administrateur.' },
          { status: 401 }
        );
      }

      return NextResponse.json(
        { error: 'Service IA temporairement indisponible' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Impossible de contacter le service IA. Réessaie plus tard.' },
      { status: 503 }
    );
  }
}
