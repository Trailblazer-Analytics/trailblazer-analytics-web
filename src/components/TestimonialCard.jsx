import React from 'react';

export default function TestimonialCard({ icon, quote, author }) {
  return (
    <div className="bg-gray-800 border-gray-700 border rounded-2xl p-6 shadow-lg">
      <div className="text-brandGreen mb-4">{icon}</div>
      <blockquote>
        <p className="text-gray-100 text-lg italic mb-4">{quote}</p>
        <footer className="text-gray-400">{author}</footer>
      </blockquote>
    </div>
  );
}
