import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MediumIcon from './icons/MediumIcon';
import GitHubIcon from './icons/GitHubIcon';

const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brandGold rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">TA</span>
              </div>
              <span className="font-bold text-xl text-brandGold">Trailblazer Analytics</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering analytics professionals through tools, insights, and thought leadership. Building careers in data and analytics.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/trailblazeranalytics" aria-label="Twitter" className="hover:text-brandGold transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com/company/trailblazer-analytics" aria-label="LinkedIn" className="hover:text-brandGold transition-colors">
                <LinkedInIcon />
              </a>
              <a href="https://medium.com/@alex.nykolaiszyn" aria-label="Medium" className="hover:text-brandGold transition-colors">
                <MediumIcon />
              </a>
              <a href="https://github.com/trailblazer-analytics" aria-label="GitHub" className="hover:text-brandGold transition-colors">
                <GitHubIcon />
              </a>
            </div>
          </div>          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href={base + '/insights'} className="text-gray-400 hover:text-brandGold transition-colors">Insights & Analysis</a></li>
              <li><a href={base + '/podcast'} className="text-gray-400 hover:text-brandGold transition-colors">Podcast</a></li>
              <li><a href={base + '/tech-notes'} className="text-gray-400 hover:text-brandGold transition-colors">Tech Notes</a></li>
              <li><a href={base + '/tools'} className="text-gray-400 hover:text-brandGold transition-colors">Tools & Software</a></li>
              <li><a href={base + '/downloads'} className="text-gray-400 hover:text-brandGold transition-colors">Free Downloads</a></li>
              <li><a href={base + '/white-papers'} className="text-gray-400 hover:text-brandGold transition-colors">White Papers</a></li>
            </ul>
          </div>          {/* Community */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href={base + '/about'} className="text-gray-400 hover:text-brandGold transition-colors">About Alexander</a></li>
              <li><a href={base + '/tools'} className="text-gray-400 hover:text-brandGold transition-colors">Analytics Tools</a></li>
              <li><a href={base + '/contact'} className="text-gray-400 hover:text-brandGold transition-colors">Connect</a></li>
              <li><a href={base + '/speaking'} className="text-gray-400 hover:text-brandGold transition-colors">Speaking</a></li>
              <li><a href={base + '/newsletter'} className="text-gray-400 hover:text-brandGold transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg text-white mb-4">Stay Updated</h3>            <p className="text-gray-400 mb-4 text-sm">
              Get the latest tools, insights, and analytics career tips.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-brandGold focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="w-full bg-brandGold hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              &copy; 2025 Trailblazer Analytics. All rights reserved.
            </div>
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href={base + '/privacy'} className="text-gray-400 hover:text-brandGold transition-colors">Privacy Policy</a>
              <a href={base + '/terms'} className="text-gray-400 hover:text-brandGold transition-colors">Terms of Service</a>
              <a href={base + '/cookies'} className="text-gray-400 hover:text-brandGold transition-colors">Cookie Policy</a>
              <a href={base + '/sitemap'} className="text-gray-400 hover:text-brandGold transition-colors">Sitemap</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
