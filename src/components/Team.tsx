import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      description: "Nuclear engineering background with 5+ years in Roblox development",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      name: "Sarah Johnson",
      role: "Systems Architect",
      description: "Specializes in complex game mechanics and server optimization",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      description: "Creates intuitive interfaces for complex nuclear control systems",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    },
    {
      name: "Emma Thompson",
      role: "Quality Assurance",
      description: "Ensures safety protocols and gameplay mechanics work flawlessly",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The talented individuals behind Koyot Digital, bringing together expertise in nuclear engineering, 
            game development, and user experience design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-yellow-400 to-orange-500 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="absolute inset-1 w-22 h-22 rounded-full mx-auto object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.description}</p>
                
                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200">
                    <Github className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200">
                    <Linkedin className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200">
                    <Mail className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Our Team</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented developers, designers, and nuclear enthusiasts to join our mission 
              of creating the most realistic nuclear simulation experiences on Roblox.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}