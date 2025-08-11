import React from 'react';
import { Users, Gamepad2, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-amber-800">Koyot Digital</span>
          </h2>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto leading-relaxed">
            We're a Roblox development group creating realistic nuclear power plant experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-700 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Roblox Focused</h3>
            <p className="text-amber-800">Built specifically for the Roblox platform with optimized gameplay</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-700 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Nuclear Simulation</h3>
            <p className="text-amber-800">Realistic nuclear power plant operations and safety systems</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-700 to-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Team Play</h3>
            <p className="text-amber-800">Multiplayer cooperation for complex facility operations</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 border border-amber-300 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Creating the most immersive and educational nuclear power plant simulation on Roblox, 
            where players can learn about nuclear energy while having fun with friends.
          </p>
        </div>
      </div>
    </section>
  );
}