import React from 'react';
import { /*Briefcase,*/ ExternalLink, Frown } from 'lucide-react';

export default function Careers() {
  const jobOpenings = [
    // Uncomment and fill out this template when hiring:
    // {
    //   title: "Senior Roblox Developer",
    //   department: "Development",
    //   type: "Full-time",
    //   description: "Join our team to create immersive nuclear power plant simulations on Roblox.",
    //   requirements: [
    //     "3+ years of Roblox development experience",
    //     "Strong Lua scripting skills",
    //     "Experience with complex game mechanics"
    //   ],
    //   applyUrl: "https://forms.google.com/your-form-link-here"
    // }

    // Uncomment and fill out this template when hiring:
     
    
  ];

  return (
    <section id="careers" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Join Our <span className="text-amber-700">Team</span>
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Help us create the most immersive nuclear power plant simulation experiences on Roblox.
          </p>
        </div>

        {jobOpenings.length === 0 ? (
          <div className="text-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg border border-stone-200">
              <div className="mb-6">
                <Frown className="w-16 h-16 text-amber-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">No Open Positions</h3>
              <p className="text-amber-800 text-lg mb-6 max-w-2xl mx-auto">
                Our hiring reactor is currently offline for maintenance. But hey, if you're a nuclear enthusiast 
                who codes, we'd love to hear from you anyway!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                      {job.department}
                    </span>
                    <span className="text-amber-700">{job.type}</span>
                  </div>
                </div>
                
                <p className="text-amber-800 mb-4 leading-relaxed">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-amber-800 space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={job.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-500 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
