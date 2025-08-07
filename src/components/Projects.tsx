import React from 'react';
import { ExternalLink, Zap, AlertTriangle, Settings, Users } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our flagship nuclear power simulation and upcoming developments in the Roblox ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Project */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
                  <Zap className="w-8 h-8 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Oakridge Nuclear Power Station</h3>
                  <p className="text-slate-400">Flagship Nuclear Facility Simulation</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Live
              </span>
            </div>
            
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Experience the most realistic nuclear power plant simulation on Roblox. Manage reactor operations, 
              handle emergency scenarios, and work as a team to maintain safe power generation. Features authentic 
              control systems, realistic physics, and comprehensive safety protocols.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-slate-400">Reactor Systems</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <div className="text-sm text-slate-400">Emergency Protocols</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <Settings className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-slate-400">Control Systems</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-slate-400">Team Operations</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wiki.koyot.digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Documentation</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://www.roblox.com/games/15684145480" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Play on Roblox
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
          <p className="text-slate-400">Exciting new projects in development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-700 p-2 rounded-lg">
                <Settings className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Advanced Training Simulator</h4>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">In Development</span>
              </div>
            </div>
            <p className="text-slate-400">
              Comprehensive training environment for new operators to learn nuclear safety procedures and emergency response.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-slate-700 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-slate-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Mobile Command Center</h4>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Planning</span>
              </div>
            </div>
            <p className="text-slate-400">
              Remote monitoring and control capabilities for off-site emergency management and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}