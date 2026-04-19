'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Sujets BAC', href: '/sujets' },
    { name: 'TSE', href: '/tse' },
    { name: 'TSExp', href: '/tsexp' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#EAEBED] border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇲🇱</span>
            <span className="text-xl font-bold" style={{ color: '#352315' }}>
              MaliMath
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:opacity-80 ${
                  pathname === item.href
                    ? 'font-bold'
                    : ''
                }`}
                style={{ color: pathname === item.href ? '#352315' : '#5a4a3a' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu - compact horizontal scroll */}
        <div className="md:hidden pb-2 overflow-hidden">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-medium whitespace-nowrap px-3 py-1.5 rounded-full border ${
                  pathname === item.href
                    ? 'font-bold bg-[#352315] text-white border-[#352315]'
                    : 'hover:opacity-80 border-gray-300'
                }`}
                style={{ color: pathname === item.href ? '#fff' : '#5a4a3a' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
