import React from 'react';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 border-gray-700 border rounded-2xl p-6 shadow-lg hover:border-brandGold transition-colors">
      <div className="text-brandGreen mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
