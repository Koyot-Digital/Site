import React from 'react';
import { Zap, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigateToTerms: () => void;
  onNavigateToPrivacy: () => void;
}

export default function Footer({ onNavigateToTerms, onNavigateToPrivacy }: FooterProps) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-700 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Koyot Digital</h3>
                <p className="text-sm text-slate-400">Roblox Development Group</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Creating immersive nuclear power plant simulation experiences on Roblox.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#game" className="text-slate-400 hover:text-white transition-colors">Our Game</a></li>
              <li>
                <a 
                  href="https://wiki.koyot.digital/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Wiki</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onNavigateToTerms}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToPrivacy}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Move Get Started section below the grid */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-4">Get Started</h4>
            <p className="text-slate-400 mb-4">
              Ready to experience nuclear power simulation?
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.roblox.com/games/15684145480" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Play on Roblox</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://discord.gg/H87stZMZD4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-slate-600 text-slate-300 px-4 py-2 rounded-lg font-medium hover:border-slate-500 hover:text-white transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Join Discord</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Koyot Digital. All rights reserved.<br />
            Primary Site Contact: <a href="mailto:koyotsupport@chrisrelf.dev" className="text-blue-400 hover:text-blue-300">koyotsupport@chrisrelf.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}