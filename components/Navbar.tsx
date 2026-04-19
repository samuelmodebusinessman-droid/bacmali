'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, BookOpen, FileText, Home } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Leçons', href: '/lecons/maths', icon: BookOpen },
    { name: 'Sujets BAC', href: '/sujets', icon: FileText },
    { name: 'TSE', href: '/tse', icon: GraduationCap },
    { name: 'TSExp', href: '/tsexp', icon: GraduationCap },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-[#352315]/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-[#352315]"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image 
                  src="https://i.imgur.com/RhzjOBs.png" 
                  alt="MaliMath Logo" 
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-bold text-[#352315]">
                  MaliMath
                </span>
                <span className="block text-xs text-[#5a4a3a] -mt-1">BAC Mali</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 rounded-xl transition-all"
                  >
                    <span className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                      active ? 'text-[#352315]' : 'text-[#5a4a3a] hover:text-[#352315]'
                    }`}>
                      <Icon size={18} />
                      {item.name}
                    </span>
                    {active && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-[#352315]/10 rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-xl bg-[#352315]/10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-[#352315]" />
              ) : (
                <Menu size={20} className="text-[#352315]" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-[#352315]/10 z-50 md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.4 }}
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                          active 
                            ? 'bg-[#352315] text-white' 
                            : 'hover:bg-[#352315]/5 text-[#352315]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          active ? 'bg-white/20' : 'bg-[#352315]/10'
                        }`}>
                          <Icon size={20} className={active ? 'text-white' : 'text-[#352315]'} />
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold block">{item.name}</span>
                          {active && (
                            <span className="text-xs text-white/70">Page actuelle</span>
                          )}
                        </div>
                        {active && (
                          <motion.div
                            layoutId="mobile-active-indicator"
                            className="w-2 h-2 rounded-full bg-white"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navbar;
