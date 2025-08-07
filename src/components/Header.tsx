import React from 'react';
import { Zap, Menu, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onNavigateToTerms: () => void;
  onNavigateToPrivacy: () => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen, onNavigateToTerms, onNavigateToPrivacy }: HeaderProps) {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/icon.png" 
              alt="Koyot Digital" 
              className="w-14 h-14 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              onMouseEnter={(e) => e.currentTarget.src = "/iconopen.png"}
              onMouseLeave={(e) => e.currentTarget.src = "/icon.png"}
            />
            <div>
              <h1 className="text-xl font-bold text-white">Koyot Digital</h1>
              <p className="text-sm text-slate-400">Roblox Development Group</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#game" className="text-slate-300 hover:text-white transition-colors">
              Our Game
            </a>
            <a 
              href="https://discord.gg/H87stZMZD4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discord</span>
            </a>
            <a 
              href="https://wiki.koyot.digital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
            >
              Wiki
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#game" className="text-slate-300 hover:text-white transition-colors">
                Our Game
              </a>
              <a 
                href="https://discord.gg/H87stZMZD4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discord</span>
              </a>
              <a 
                href="https://wiki.koyot.digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 w-fit"
              >
                Wiki
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}