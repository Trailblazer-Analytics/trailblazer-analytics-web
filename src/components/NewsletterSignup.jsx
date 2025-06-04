import React, { useState } from 'react';

export default function NewsletterSignup({ 
  title = "Subscribe to Our Newsletter", 
  description = "Get the latest insights on data strategy, analytics best practices, and industry trends delivered to your inbox.",
  theme = "dark",
  className = ""
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: title.toLowerCase().includes('tech') ? 'tech-notes' : 'website'
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setStatus('error');
    }
  };

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const descClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const inputClass = isDark 
    ? 'bg-gray-900 border-gray-700 text-gray-100 placeholder-gray-500' 
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400';

  return (
    <div className={`${bgClass} border rounded-2xl p-8 shadow-lg max-w-2xl mx-auto text-center ${className}`}>
      <h3 className={`text-2xl font-bold ${textClass} mb-4`}>{title}</h3>
      <p className={`${descClass} mb-6`}>{description}</p>
      
      {status === 'success' ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Thank you for subscribing! Check your email for confirmation.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-brandGreen focus:border-transparent ${inputClass}`}
            required
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-brandGold text-gray-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </div>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      )}

      {status === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-4">
          Something went wrong. Please try again.
        </div>
      )}

      <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm mt-4`}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
