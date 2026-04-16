'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'TSE', href: '/tse' },
    { name: 'TSExp', href: '/tsexp' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2" style={{ borderColor: '#d1d5db' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇲🇱</span>
            <span className="text-xl font-bold" style={{ color: '#1d83e2' }}>
              BacMali
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-[#1d83e2] ${
                  pathname === item.href
                    ? 'text-[#1d83e2]'
                    : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 btn-static"
            style={{ backgroundColor: '#1d83e2', color: '#ffffff' }}
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline text-sm font-medium">Discord</span>
          </a>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-[#1d83e2] py-2 ${
                  pathname === item.href
                    ? 'text-[#1d83e2]'
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
