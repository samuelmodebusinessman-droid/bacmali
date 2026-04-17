'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'TSE', href: '/tse' },
    { name: 'TSExp', href: '/tsexp' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#EAEBED] border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇲🇱</span>
            <span className="text-xl font-bold text-gray-900">
              MathToBac.ml
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-gray-900 ${
                  pathname === item.href
                    ? 'text-gray-900 font-bold'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-gray-900 py-2 ${
                  pathname === item.href
                    ? 'text-gray-900 font-bold'
                    : 'text-gray-600'
                }`}
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
