import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                By accessing and using Koyot Digital's services, including our Roblox games and related content, 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Use License</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Permission is granted to temporarily access and use our games and services for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">Under this license you may not:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in our services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Conduct</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Users are expected to follow Roblox's Community Standards and Terms of Service. 
                Additionally, users must not engage in any behavior that disrupts the gaming experience 
                for others or violates the spirit of our nuclear simulation games.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                The materials on Koyot Digital's services are provided on an 'as is' basis. 
                Koyot Digital makes no warranties, expressed or implied, and hereby disclaims and 
                negates all other warranties including without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Limitations</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In no event shall Koyot Digital or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Revisions</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Koyot Digital may revise these terms of service at any time without notice. 
                By using our services, you are agreeing to be bound by the then current version 
                of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-100 rounded-lg p-4 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-600" />
                <a 
                  href="mailto:compliance@chrisrelf.dev" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  compliance@chrisrelf.dev
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}