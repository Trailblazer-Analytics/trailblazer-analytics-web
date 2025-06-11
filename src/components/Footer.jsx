import React from 'react';
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
            </div>            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering analytics professionals through tools, insights, and thought leadership. Building careers in data and analytics.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/trailblazeranalytics" aria-label="Twitter" className="hover:text-brandGold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 007.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 4.59a8.36 8.36 0 01-2.54.7z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/trailblazer-analytics" aria-label="LinkedIn" className="hover:text-brandGold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                </svg>
              </a>
              <a href="https://medium.com/@alex.nykolaiszyn" aria-label="Medium" className="hover:text-brandGold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a href="https://github.com/trailblazer-analytics" aria-label="GitHub" className="hover:text-brandGold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                </svg>
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
