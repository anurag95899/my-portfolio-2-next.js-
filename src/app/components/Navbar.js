
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react or replace with any icons you prefer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-indigo-400 text-white cursor-pointer">Anurag Yadav</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-7">
          <Link href="/projects" className="hover:text-indigo-300">Projects</Link>
          <Link href="/skills" className="hover:text-indigo-300">Skills</Link>
          <Link href="/services" className="hover:text-indigo-300">Services</Link>
          <Link href="/companies" className="hover:text-indigo-300">Experiences/Companies</Link>
          <Link href="/contact" className="hover:text-indigo-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-slate-800 text-white">
          <Link href="/projects" className="block hover:text-indigo-300" onClick={toggleMenu}>Projects</Link>
          <Link href="/skills" className="block hover:text-indigo-300" onClick={toggleMenu}>Skills</Link>
          <Link href="/services" className="block hover:text-indigo-300" onClick={toggleMenu}>Services</Link>
          <Link href="/companies" className="block hover:text-indigo-300" onClick={toggleMenu}>Companies</Link>
          <Link href="/contact" className="block hover:text-indigo-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}