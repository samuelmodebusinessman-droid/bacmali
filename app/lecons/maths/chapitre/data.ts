export type Serie = 'tse' | 'tsexp';

export interface Chapitre {
  id: string;
  slug: string;
  titre: string;
  serie: Serie[];
  description: string;
  objectifs: string[];
  videoUrl?: string;
  sections: Section[];
  exercices: Exercice[];
  quiz: QuizQuestion[];
}

export interface Section {
  id: string;
  titre: string;
  contenu: string;
  formules?: string[];
}

export interface Exercice {
  id: string;
  enonce: string;
  indices: string[];
  solution: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explication: string;
}

export const chapitres: Chapitre[] = [
  {
    id: '1',
    slug: 'nombres-complexes',
    titre: 'Nombres Complexes',
    serie: ['tse', 'tsexp'],
    description: 'Forme algébrique, trigonométrique, exponentielle, équations dans ℂ',
    objectifs: [
      'Maîtriser les différentes formes des nombres complexes',
      'Résoudre des équations dans ℂ',
      'Interpréter géométriquement les opérations',
    ],
    videoUrl: 'https://www.youtube.com/embed/1QIA-ecRzfk',
    sections: [
      {
        id: '1-1',
        titre: 'Introduction',
        contenu: 'Les nombres complexes constituent un ensemble fondamental en mathématiques, noté ℂ. Ils permettent de résoudre des équations qui n\'ont pas de solution dans ℝ, comme x² + 1 = 0.',
      },
      {
        id: '1-2',
        titre: 'Forme algébrique',
        contenu: 'Un nombre complexe z s\'écrit sous la forme z = a + ib, où a et b sont des réels, et i est l\'unité imaginaire telle que i² = -1.',
        formules: [
          'z = a + ib',
          'Re(z) = a (partie réelle)',
          'Im(z) = b (partie imaginaire)',
          'z̄ = a - ib (conjugué)',
        ],
      },
      {
        id: '1-3',
        titre: 'Module et argument',
        contenu: 'Le module représente la distance à l\'origine, l\'argument est l\'angle avec l\'axe réel.',
        formules: [
          '|z| = √(a² + b²)',
          'arg(z) = θ où tan(θ) = b/a',
          'z = |z|(cos θ + i sin θ) (forme trigonométrique)',
        ],
      },
    ],
    exercices: [
      {
        id: '1-ex-1',
        enonce: 'Mettre sous forme algébrique : z = (2 + 3i)(1 - i)',
        indices: ['Développer comme un produit de binômes', 'Remplacer i² par -1', 'Regrouper parties réelle et imaginaire'],
        solution: 'z = 2×1 + 2×(-i) + 3i×1 + 3i×(-i) = 2 - 2i + 3i - 3i² = 2 + i + 3 = 5 + i',
      },
    ],
    quiz: [
      {
        id: '1-q-1',
        question: 'Quelle est la valeur de i² ?',
        options: ['1', '-1', 'i', '-i'],
        correctAnswer: 1,
        explication: 'Par définition, i² = -1. C\'est la propriété fondamentale des nombres complexes.',
      },
      {
        id: '1-q-2',
        question: 'Le conjugué de z = 3 + 4i est :',
        options: ['3 + 4i', '-3 - 4i', '3 - 4i', '-3 + 4i'],
        correctAnswer: 2,
        explication: 'Le conjugué change le signe de la partie imaginaire : z̄ = 3 - 4i',
      },
    ],
  },
  {
    id: '2',
    slug: 'arithmetique',
    titre: 'Arithmétique',
    serie: ['tse'],
    description: 'Division euclidienne, congruences, nombres premiers, PGCD/PPCM (spécifique TSE)',
    objectifs: [
      'Maîtriser la division euclidienne',
      'Utiliser les congruences',
      'Appliquer le théorème de Bézout et Gauss',
    ],
    videoUrl: 'https://www.youtube.com/embed/ispwJx0jfrM',
    sections: [
      {
        id: '2-1',
        titre: 'Division euclidienne',
        contenu: 'Pour tout entier a et entier naturel b non nul, il existe un unique couple (q, r) tel que : a = bq + r avec 0 ≤ r < b',
        formules: [
          'a = bq + r',
          '0 ≤ r < b',
        ],
      },
      {
        id: '2-2',
        titre: 'Congruences',
        contenu: 'a ≡ b [n] signifie que n divise (a - b), ou encore que a et b ont le même reste dans la division par n.',
        formules: [
          'a ≡ b [n] ⇔ n | (a - b)',
          'Si a ≡ b [n] et c ≡ d [n], alors a + c ≡ b + d [n]',
          'Si a ≡ b [n], alors a^k ≡ b^k [n]',
        ],
      },
      {
        id: '2-3',
        titre: 'PGCD et PPCM',
        contenu: 'Le PGCD est le plus grand diviseur commun. Le PPCM est le plus petit multiple commun.',
        formules: [
          'PGCD(a, b) × PPCM(a, b) = a × b',
          'Algorithme d\'Euclide : PGCD(a, b) = PGCD(b, r) où a = bq + r',
        ],
      },
    ],
    exercices: [
      {
        id: '2-ex-1',
        enonce: 'Déterminer le reste de 2024 dans la division par 7',
        indices: ['Effectuer la division euclidienne', '2024 = 7 × q + r', 'Trouver q et r'],
        solution: '2024 = 7 × 289 + 1, donc le reste est 1. On vérifie : 7 × 289 = 2023, et 2024 - 2023 = 1',
      },
    ],
    quiz: [
      {
        id: '2-q-1',
        question: '15 ≡ ? [7]',
        options: ['0', '1', '2', '8'],
        correctAnswer: 1,
        explication: '15 = 2 × 7 + 1, donc 15 ≡ 1 [7]',
      },
    ],
  },
  {
    id: '3',
    slug: 'fonctions-numeriques',
    titre: 'Fonctions Numériques',
    serie: ['tse', 'tsexp'],
    description: 'Limites, continuité, dérivation, asymptotes, convexité',
    objectifs: [
      'Étudier les limites de fonctions',
      'Maîtriser la continuité et dérivabilité',
      'Tracer des asymptotes',
    ],
    videoUrl: 'https://www.youtube.com/embed/H2RLZ0Z_WoU',
    sections: [
      {
        id: '3-1',
        titre: 'Limites',
        contenu: 'La limite décrit le comportement d\'une fonction au voisinage d\'un point ou à l\'infini.',
        formules: [
          'lim(x→a) f(x) = L',
          'Formes indéterminées : 0/0, ∞/∞, ∞ - ∞',
        ],
      },
      {
        id: '3-2',
        titre: 'Continuité et dérivation',
        contenu: 'Une fonction est continue si sa courbe peut être tracée sans lever le crayon. Dérivable implique continue.',
        formules: [
          'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
          'Tangente : y = f\'(a)(x-a) + f(a)',
        ],
      },
    ],
    exercices: [
      {
        id: '3-ex-1',
        enonce: 'Calculer la dérivée de f(x) = x³ + 2x² - 5x + 3',
        indices: ['Utiliser la règle de dérivation des polynômes', '(x^n)\' = nx^(n-1)'],
        solution: 'f\'(x) = 3x² + 4x - 5',
      },
    ],
    quiz: [
      {
        id: '3-q-1',
        question: 'La dérivée de x³ est :',
        options: ['x²', '3x²', '3x', 'x³'],
        correctAnswer: 1,
        explication: '(x³)\' = 3x² en appliquant la formule (x^n)\' = nx^(n-1)',
      },
    ],
  },
  {
    id: '4',
    slug: 'fonctions-speciales',
    titre: 'Fonctions Spéciales',
    serie: ['tse', 'tsexp'],
    description: 'Logarithme népérien, exponentielle, fonctions puissances',
    objectifs: [
      'Maîtriser ln et exp',
      'Résoudre des équations avec ces fonctions',
      'Connaître les limites remarquables',
    ],
    videoUrl: 'https://www.youtube.com/embed/_uL67aTNlGs',
    sections: [
      {
        id: '4-1',
        titre: 'Logarithme népérien',
        contenu: 'ln(x) est défini pour x > 0. C\'est la fonction réciproque de l\'exponentielle.',
        formules: [
          'ln(ab) = ln(a) + ln(b)',
          'ln(a/b) = ln(a) - ln(b)',
          'ln(a^n) = n ln(a)',
          '(ln x)\' = 1/x',
        ],
      },
      {
        id: '4-2',
        titre: 'Exponentielle',
        contenu: 'e^x est définie pour tout x réel, toujours strictement positive.',
        formules: [
          'e^(a+b) = e^a × e^b',
          'e^(a-b) = e^a / e^b',
          '(e^x)\' = e^x',
        ],
      },
    ],
    exercices: [
      {
        id: '4-ex-1',
        enonce: 'Résoudre ln(x) = 2',
        indices: ['Appliquer la fonction exponentielle', 'e^(ln(x)) = x'],
        solution: 'e^(ln(x)) = e² donc x = e² ≈ 7.389',
      },
    ],
    quiz: [
      {
        id: '4-q-1',
        question: 'ln(1) = ?',
        options: ['0', '1', 'e', 'Non défini'],
        correctAnswer: 0,
        explication: 'ln(1) = 0 car e^0 = 1',
      },
    ],
  },
  {
    id: '5',
    slug: 'suites-numeriques',
    titre: 'Suites Numériques',
    serie: ['tse', 'tsexp'],
    description: 'Monotonie, convergence, suites arithmétiques et géométriques',
    objectifs: [
      'Étudier la monotonie des suites',
      'Calculer les termes généraux',
      'Démontrer par récurrence',
    ],
    videoUrl: 'https://www.youtube.com/embed/tHLNzFwW-7M',
    sections: [
      {
        id: '5-1',
        titre: 'Généralités',
        contenu: 'Une suite est une fonction de ℕ dans ℝ. On note (u_n) la suite de terme général u_n.',
      },
      {
        id: '5-2',
        titre: 'Suites arithmétiques',
        contenu: 'Une suite est arithmétique si la différence entre deux termes consécutifs est constante.',
        formules: [
          'u_(n+1) = u_n + r',
          'u_n = u_0 + nr',
          'S_n = (n+1)(u_0 + u_n)/2 (somme)',
        ],
      },
      {
        id: '5-3',
        titre: 'Suites géométriques',
        contenu: 'Une suite est géométrique si le quotient de deux termes consécutifs est constant.',
        formules: [
          'u_(n+1) = u_n × q',
          'u_n = u_0 × q^n',
          'S_n = u_0(1-q^(n+1))/(1-q) si q ≠ 1',
        ],
      },
    ],
    exercices: [
      {
        id: '5-ex-1',
        enonce: 'Calculer le 10ème terme d\'une suite arithmétique avec u_0 = 3 et r = 2',
        indices: ['Utiliser la formule u_n = u_0 + nr', 'Remplacer n par 9 (car on commence à 0)'],
        solution: 'u_9 = 3 + 9×2 = 3 + 18 = 21',
      },
    ],
    quiz: [
      {
        id: '5-q-1',
        question: 'Une suite arithmétique a pour premier terme 2 et raison 3. Le 5ème terme est :',
        options: ['14', '15', '17', '20'],
        correctAnswer: 0,
        explication: 'u_4 = 2 + 4×3 = 2 + 12 = 14 (attention, on compte à partir de u_0)',
      },
    ],
  },
  {
    id: '6',
    slug: 'calcul-integral',
    titre: 'Calcul Intégral',
    serie: ['tse', 'tsexp'],
    description: 'Primitives, intégrales, aires, volumes, intégration par parties',
    objectifs: [
      'Trouver des primitives',
      'Calculer des intégrales définies',
      'Calculer des aires et volumes',
    ],
    videoUrl: 'https://www.youtube.com/embed/XgjJ1325Exo',
    sections: [
      {
        id: '6-1',
        titre: 'Primitives',
        contenu: 'F est une primitive de f si F\' = f. La primitive générale est F(x) + C.',
        formules: [
          '∫x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)',
          '∫1/x dx = ln|x| + C',
          '∫e^x dx = e^x + C',
        ],
      },
      {
        id: '6-2',
        titre: 'Intégrales définies',
        contenu: 'L\'intégrale de a à b représente l\'aire algébrique entre la courbe et l\'axe Ox.',
        formules: [
          '∫[a,b] f(x)dx = F(b) - F(a)',
          'Aire = ∫[a,b] |f(x)|dx',
        ],
      },
    ],
    exercices: [
      {
        id: '6-ex-1',
        enonce: 'Calculer ∫[0,1] (2x + 1)dx',
        indices: ['Trouver une primitive : F(x) = x² + x', 'Appliquer F(1) - F(0)'],
        solution: 'F(x) = x² + x. F(1) = 2, F(0) = 0. Résultat = 2',
      },
    ],
    quiz: [
      {
        id: '6-q-1',
        question: 'Une primitive de 2x est :',
        options: ['2', 'x²', '2x²', 'x² + 5'],
        correctAnswer: 1,
        explication: '(x²)\' = 2x, donc x² est une primitive de 2x. x² + 5 aussi, mais ce n\'est pas proposé.',
      },
    ],
  },
  {
    id: '7',
    slug: 'equations-differentielles',
    titre: 'Équations Différentielles',
    serie: ['tse', 'tsexp'],
    description: 'Équations du 1er ordre, équations linéaires du 2nd ordre',
    objectifs: [
      'Résoudre y\' = ay',
      'Résoudre les équations du second ordre',
      'Trouver des solutions particulières',
    ],
    videoUrl: 'https://www.youtube.com/embed/gOs_HMy68b0',
    sections: [
      {
        id: '7-1',
        titre: 'Équations du premier ordre',
        contenu: 'Les équations de la forme y\' = ay ont pour solution générale y = Ce^(ax).',
        formules: [
          'y\' = ay ⇒ y = Ce^(at)',
          'y\' + ay = b ⇒ y = (b/a) + Ce^(-at)',
        ],
      },
      {
        id: '7-2',
        titre: 'Équations du second ordre',
        contenu: 'Pour ay\'\' + by\' + cy = 0, on résout l\'équation caractéristique ar² + br + c = 0.',
        formules: [
          'Équation caractéristique : ar² + br + c = 0',
          'Si Δ > 0 : y = C₁e^(r₁x) + C₂e^(r₂x)',
          'Si Δ = 0 : y = (C₁ + C₂x)e^(rx)',
          'Si Δ < 0 : y = e^(αx)[C₁cos(βx) + C₂sin(βx)]',
        ],
      },
    ],
    exercices: [
      {
        id: '7-ex-1',
        enonce: 'Résoudre y\' = 3y avec y(0) = 2',
        indices: ['Solution générale : y = Ce^(3x)', 'Utiliser y(0) = 2 pour trouver C'],
        solution: 'y = 2e^(3x) car C = 2',
      },
    ],
    quiz: [
      {
        id: '7-q-1',
        question: 'La solution de y\' = 2y est :',
        options: ['y = Ce^2', 'y = Ce^(2x)', 'y = 2Ce^x', 'y = 2x + C'],
        correctAnswer: 1,
        explication: 'Pour y\' = ay, la solution est y = Ce^(ax). Ici a = 2, donc y = Ce^(2x)',
      },
    ],
  },
  {
    id: '8',
    slug: 'probabilites',
    titre: 'Probabilités',
    serie: ['tse', 'tsexp'],
    description: 'Dénombrement, probabilités conditionnelles, loi binomiale, espérance',
    objectifs: [
      'Maîtriser les techniques de dénombrement',
      'Calculer des probabilités conditionnelles',
      'Utiliser la loi binomiale',
    ],
    videoUrl: 'https://www.youtube.com/embed/Zl9O_qDrmhA',
    sections: [
      {
        id: '8-1',
        titre: 'Dénombrement',
        contenu: 'Permutations, arrangements et combinaisons permettent de compter.',
        formules: [
          'n! = n×(n-1)×...×1',
          'A(n,p) = n!/(n-p)! (arrangements)',
          'C(n,p) = n!/[p!(n-p)!] (combinaisons)',
        ],
      },
      {
        id: '8-2',
        titre: 'Probabilités conditionnelles',
        contenu: 'La probabilité de B sachant A est notée P_A(B) ou P(B|A).',
        formules: [
          'P(B|A) = P(A∩B)/P(A)',
          'P(A∩B) = P(A) × P(B|A)',
          'Formule des probabilités totales',
        ],
      },
      {
        id: '8-3',
        titre: 'Loi binomiale',
        contenu: 'La loi binomiale modélise le nombre de succès dans n épreuves de Bernoulli.',
        formules: [
          'X ~ B(n, p)',
          'P(X = k) = C(n,k) × p^k × (1-p)^(n-k)',
          'E(X) = np',
          'V(X) = np(1-p)',
        ],
      },
    ],
    exercices: [
      {
        id: '8-ex-1',
        enonce: 'Combien de façons de choisir 3 personnes parmi 10 ?',
        indices: ['C\'est une combinaison C(10,3)', 'C(n,p) = n!/[p!(n-p)!]'],
        solution: 'C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 120',
      },
    ],
    quiz: [
      {
        id: '8-q-1',
        question: 'C(5,2) = ?',
        options: ['10', '20', '25', '5'],
        correctAnswer: 0,
        explication: 'C(5,2) = 5!/(2!×3!) = (5×4)/(2×1) = 10',
      },
    ],
  },
  {
    id: '9',
    slug: 'geometrie-affine',
    titre: 'Géométrie Affine',
    serie: ['tse'],
    description: 'Barycentres, applications affines, lignes de niveau (spécifique TSE)',
    objectifs: [
      'Calculer des barycentres',
      'Utiliser les coordonnées barycentriques',
      'Étudier les applications affines',
    ],
    videoUrl: 'https://www.youtube.com/embed/1QIA-ecRzfk',
    sections: [
      {
        id: '9-1',
        titre: 'Barycentres',
        contenu: 'Le barycentre de points pondérés est le point d\'équilibre du système.',
        formules: [
          'G = Bar{(A,α); (B,β)} ⇒ αGA⃗ + βGB⃗ = 0⃗',
          'αGA⃗ + βGB⃗ = (α+β)GG⃗ = 0⃗ si G est le barycentre',
        ],
      },
      {
        id: '9-2',
        titre: 'Lignes de niveau',
        contenu: 'Une ligne de niveau est l\'ensemble des points M tels que f(M) = k (constante).',
      },
    ],
    exercices: [
      {
        id: '9-ex-1',
        enonce: 'Trouver le barycentre de {(A,2); (B,3)} avec A(0,0) et B(5,5)',
        indices: ['Utiliser les coordonnées barycentriques', 'x_G = (2×0 + 3×5)/(2+3)'],
        solution: 'G((2×0+3×5)/5, (2×0+3×5)/5) = G(3, 3)',
      },
    ],
    quiz: [
      {
        id: '9-q-1',
        question: 'Le barycentre de deux points avec coefficients égaux est :',
        options: ['Le premier point', 'Le milieu du segment', 'Le second point', 'Non défini'],
        correctAnswer: 1,
        explication: 'Avec des coefficients égaux, le barycentre est le milieu du segment.',
      },
    ],
  },
  {
    id: '10',
    slug: 'coniques',
    titre: 'Coniques',
    serie: ['tse'],
    description: 'Parabole, ellipse, hyperbole : équations, foyers, directrices (spécifique TSE)',
    objectifs: [
      'Reconnaître les différentes coniques',
      'Déterminer foyers et directrices',
      'Tracer les courbes',
    ],
    videoUrl: 'https://www.youtube.com/embed/1QIA-ecRzfk',
    sections: [
      {
        id: '10-1',
        titre: 'Définition générale',
        contenu: 'Une conique est le lieu des points dont le rapport des distances à un foyer et à une directrice est constant (excentricité e).',
        formules: [
          'PF = e × Pd (d = distance à la directrice)',
          'e < 1 : ellipse',
          'e = 1 : parabole',
          'e > 1 : hyperbole',
        ],
      },
      {
        id: '10-2',
        titre: 'Parabole',
        contenu: 'e = 1. Une seule branche, un seul foyer.',
        formules: [
          'y² = 2px (équation réduite)',
          'Foyer F(p/2, 0)',
          'Directrice x = -p/2',
        ],
      },
      {
        id: '10-3',
        titre: 'Ellipse',
        contenu: 'e < 1. Forme ovale avec deux foyers.',
        formules: [
          'x²/a² + y²/b² = 1',
          'Foyers F(c,0) et F\'(-c,0) avec c² = a² - b²',
          'e = c/a',
        ],
      },
    ],
    exercices: [
      {
        id: '10-ex-1',
        enonce: 'Donner l\'équation réduite d\'une parabole de foyer F(2,0)',
        indices: ['Pour une parabole : p/2 = 2', 'Donc p = 4', 'y² = 2px'],
        solution: 'p/2 = 2 ⇒ p = 4. Équation : y² = 8x',
      },
    ],
    quiz: [
      {
        id: '10-q-1',
        question: 'Une parabole a pour excentricité :',
        options: ['0', '0.5', '1', '2'],
        correctAnswer: 2,
        explication: 'La parabole est définie par e = 1.',
      },
    ],
  },
];

export function getChapitreBySlug(slug: string): Chapitre | undefined {
  return chapitres.find(c => c.slug === slug);
}

export function getChapitresBySerie(serie: Serie): Chapitre[] {
  return chapitres.filter(c => c.serie.includes(serie));
}

export function getChapitreNext(slug: string): Chapitre | null {
  const index = chapitres.findIndex(c => c.slug === slug);
  if (index === -1 || index === chapitres.length - 1) return null;
  return chapitres[index + 1];
}

export function getChapitrePrev(slug: string): Chapitre | null {
  const index = chapitres.findIndex(c => c.slug === slug);
  if (index <= 0) return null;
  return chapitres[index - 1];
}
