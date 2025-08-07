import React from 'react';
import { ExternalLink, Zap, Shield, Settings, Users } from 'lucide-react';

export default function Game() {
  return (
    <section id="game" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-blue-400">Oakridge Nuclear Power Station</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience realistic nuclear power plant operations in this immersive Roblox simulation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Game Features</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span>Realistic reactor control systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Nuclear safety protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-blue-400" />
                  <span>Complex facility management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>Multiplayer team operations</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-6 mb-6">
                <div className="text-3xl font-bold text-white mb-2">Active Now</div>
                <div className="text-slate-400">Join thousands of players</div>
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.roblox.com/games/15684145480" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Play on Roblox</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                <a 
                  href="https://wiki.koyot.digital/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Documentation</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Learn More</h3>
          <p className="text-slate-400 mb-6">
            Check out our comprehensive wiki for guides, tutorials, and detailed information about the game.
          </p>
          <a 
            href="https://wiki.koyot.digital/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>Visit wiki.koyot.digital</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}