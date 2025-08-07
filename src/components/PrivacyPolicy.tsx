import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Koyot Digital operates within the Roblox platform and does not directly collect personal 
                information from users. Any data collection is handled through Roblox's systems in 
                accordance with their privacy policy.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                We may collect non-personal information such as:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Game usage statistics and performance data</li>
                <li>In-game preferences and settings</li>
                <li>Technical information for debugging and improvement purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Any information we collect is used solely for:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li>Improving game performance and user experience</li>
                <li>Debugging technical issues</li>
                <li>Developing new features and content</li>
                <li>Ensuring fair gameplay and preventing abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-slate-900 mb-4">3. Information Sharing</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your information to third parties. 
                All user interactions are governed by Roblox's privacy policy and terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We implement appropriate security measures to protect against unauthorized access, 
                alteration, disclosure, or destruction of information. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our services are designed to be family-friendly and comply with Roblox's policies 
                regarding children's privacy. We do not knowingly collect personal information from 
                children under 13 outside of what is handled by Roblox's platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Third-Party Services</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Our games operate within the Roblox platform. Users should review Roblox's privacy 
                policy to understand how their data is handled by the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to Privacy Policy</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify users of any 
                material changes by posting the new privacy policy on this page with an updated 
                revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-slate-100 rounded-lg p-4 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-600" />
                <a 
                  href="mailto:privacy@chrisrelf.dev" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  privacy@chrisrelf.dev
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}