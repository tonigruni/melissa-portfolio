"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-[1920px] mx-auto transition-all duration-300">
      <Link
        href="/"
        className="text-base font-bold tracking-wide md:font-headline-md md:text-headline-md text-on-surface hover:text-primary transition-colors truncate max-w-[180px] md:max-w-none"
      >
        Melissa Morales
      </Link>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/melissa-morales-ca%C3%B1%C3%B3n-71b111176/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="mailto:melissamcanon@gmail.com" aria-label="Send email" className="hidden md:inline-flex items-center">
          <span className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity cursor-pointer">
            mail
          </span>
        </a>
        <a href="tel:+573136466863" aria-label="Call Melissa" className="hidden md:inline-flex items-center">
          <span className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity cursor-pointer">
            call
          </span>
        </a>
      </div>
    </nav>
  );
}
