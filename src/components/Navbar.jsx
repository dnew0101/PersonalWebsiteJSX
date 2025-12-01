import React from 'react';

export default function Navbar() {
  const links = [
    { label: 'Hero', id: 'hero' },
    { label: 'About Me', id: 'about-me' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Get In Touch!', id: 'contact' },
  ];

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // try to compute navbar height dynamically; fall back to 64px
    const nav = document.querySelector('nav');
    const offset = nav ? nav.getBoundingClientRect().height : 64;

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - offset - 8; // extra 8px padding

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    // hidden on small screens, visible from md and up
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-black/70 border-b backdrop-blur-md" aria-hidden="false">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <ul className="hidden md:flex gap-4 text-sm text-neutral-200 justify-center">
          {links.map((l) => (
            <li key={l.id}>
                <button
                  onClick={() => handleClick(l.id)}
                  aria-label={`Go to ${l.label}`}
                  className="cursor-pointer px-3 py-1 text-sm bg-black text-white border border-white rounded-none 
                  transition-transform duration-400 ease-in-out 
                  hover:scale-105
                  hover:bg-neutral-900 
                  focus:outline-none 
                  focus-visible:ring-4 
                  focus-visible:ring-white"
                >
                  {l.label}
                </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
