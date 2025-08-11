import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src="/banner3.webp" 
          alt="Oakridge Nuclear Power Station" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Koyot Digital
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Roblox Development Group behind 
          <span className="text-yellow-200 font-semibold"> Oakridge Nuclear Power Station</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wiki.koyot.digital/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-amber-500 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <span>View Wiki</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://www.roblox.com/games/15684145480" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-amber-200/50 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-amber-200 hover:bg-amber-200/10 transition-all duration-200 flex items-center space-x-2 shadow-lg"
          >
            <Play className="w-5 h-5" />
            <span>Play on Roblox</span>
          </a>
        </div>
      </div>
    </section>
  );
}