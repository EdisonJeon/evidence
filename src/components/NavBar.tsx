'use client'; 

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const articles = [
    'Article I: General Provisions', 
    'Article II: Judicial Notice', 
    'Article III: Presumptions in Civil Cases', 
    'Article IV: Relevance and its Limits',
    'Article V: Privileges', 
    'Article VI: Witnesses', 
    'Article VII: Opinions and Expert Testimony', 
    'Article VIII: Hearsay',
    'Article IX: Authentication and Identification', 
    'Article X: Contents of Writings, Recordings, and Photographs', 
    'Article XI: Miscellaneous Rules'
  ];

  return (
    // Changed to a beautiful gradient rose-to-pink navbar
    <nav className="bg-gradient-to-r from-rose-400 to-pink-400 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-extrabold tracking-wide drop-shadow-sm flex items-center gap-2 hover:opacity-80 transition-opacity">
          🌸 The Rules of Evidence
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-2xl focus:outline-none hover:text-pink-100 transition-colors bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        // Changed the dropdown to white with cute pink borders
        <div className="max-w-5xl mx-auto mt-4 flex flex-col space-y-1 pb-4 border-t border-pink-200/50 pt-4">
          {articles.map((article, index) => (
            <Link 
              key={index} 
              href={`/article-${index + 1}`} 
              onClick={() => setIsOpen(false)}
              // Changed hover states to soft pink backgrounds with rose text
              className="block px-4 py-3 bg-white/10 hover:bg-white text-white hover:text-rose-600 rounded-xl transition-all duration-200 font-bold shadow-sm"
            >
              {article}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}