import React from 'react';
import { ExternalLink, Zap, Shield, Settings, Users, Eye } from 'lucide-react';
import { useGameStats } from '../hooks/usePlayerCount';

export default function Game() {
  const { playerCount, visits, upvotes } = useGameStats();

  return (
    <section id="game" className="py-20 bg-amber-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Game Stats Display */}
        <div className="text-center mb-12">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-amber-100/90 to-amber-50/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/50">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Users className="w-6 h-6 text-amber-800" />
                <div className="text-2xl font-bold text-amber-900">
                  {playerCount !== null ? playerCount.toLocaleString() : '---'}
                </div>
              </div>
              <div className="text-amber-800 text-sm font-medium">Players Online</div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-100/90 to-amber-50/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/50">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Eye className="w-6 h-6 text-amber-800" />
                <div className="text-2xl font-bold text-amber-900">
                  {visits !== null ? visits.toLocaleString() : '---'}
                </div>
              </div>
              <div className="text-amber-800 text-sm font-medium">Total Visits</div>
            </div>
          </div>
            
          <div className="bg-gradient-to-r from-amber-100/90 to-amber-50/90 backdrop-blur-sm rounded-2xl p-6 border border-amber-300/50">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Eye className="w-6 h-6 text-amber-800" />
              <div className="text-2xl font-bold text-amber-900">
                {upvotes !== null ? upvotes.toLocaleString() : '---'}
              </div>
            </div>
            <div className="text-amber-800 text-sm font-medium">Game Upvotes</div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-amber-200">Oakridge Nuclear Power Station</span>
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Experience realistic nuclear power plant operations in this immersive Roblox simulation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-100/90 to-amber-50/90 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/50 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Game Features</h3>
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-amber-700" />
                  <span>Realistic reactor control systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-orange-700" />
                  <span>Nuclear safety protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-amber-700" />
                  <span>Complex facility management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span>Multiplayer team operations</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.roblox.com/games/15684145480" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-500 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Play on Roblox</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                
                <a 
                  href="https://wiki.koyot.digital/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-amber-700 text-amber-800 px-6 py-3 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-900 hover:bg-amber-200/20 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Wiki</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Learn More</h3>
          <p className="text-amber-200 mb-6">
            Check out our comprehensive wiki for guides, tutorials, and detailed information about the game.
          </p>
          <a 
            href="https://wiki.koyot.digital/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-amber-200 hover:text-amber-100 transition-colors"
          >
            <span>Visit wiki.koyot.digital</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
