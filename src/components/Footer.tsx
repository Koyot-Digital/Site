import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateToTerms: () => void;
  onNavigateToPrivacy: () => void;
}

export default function Footer({ onNavigateToTerms, onNavigateToPrivacy }: FooterProps) {
  return (
    <footer className="bg-amber-100 border-t border-amber-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-200/50 p-2 rounded-lg border border-amber-300">
                <img src="/icon.png" alt="Koyot Digital" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900">Koyot Digital</h3>
                <p className="text-sm text-amber-800">Roblox Development Group</p>
              </div>
            </div>
            <p className="text-amber-800 leading-relaxed">
              Creating immersive nuclear power plant simulation experiences on Roblox.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-amber-700 hover:text-amber-900 transition-colors">About</a></li>
              <li><a href="#game" className="text-amber-700 hover:text-amber-900 transition-colors">Our Game</a></li>
              <li><a href="#careers" className="text-amber-700 hover:text-amber-900 transition-colors">Careers</a></li>
              <li>
                <a 
                  href="https://wiki.koyot.digital/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900 transition-colors flex items-center space-x-1"
                >
                  <span>Wiki</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-amber-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onNavigateToTerms}
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToPrivacy}
                  className="text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Move Get Started section below the grid */}
        <div className="mt-8 pt-8 border-t border-amber-200">
          <div className="max-w-md">
            <h4 className="text-amber-900 font-semibold mb-4">Get Started</h4>
            <p className="text-amber-800 mb-4">
              Ready to experience nuclear power simulation?
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.roblox.com/games/15684145480" 
                target="_blank" 
                rel="noopener noreferrer"
               className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:from-amber-600 hover:to-amber-500 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Play on Roblox</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.gg/H87stZMZD4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-amber-700 text-amber-800 px-4 py-2 rounded-lg font-medium hover:border-amber-600 hover:text-amber-900 hover:bg-amber-200/20 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Join Discord</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-8 pt-8 text-center">
          <p className="text-amber-800 text-sm">
            © 2024 Koyot Digital. All rights reserved.<br />
            Primary Site Contact: <a href="mailto:koyotsupport@chrisrelf.dev" className="text-amber-700 hover:text-amber-900">koyotsupport@chrisrelf.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}