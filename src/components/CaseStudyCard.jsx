export default function CaseStudyCard({ title, client, summary, date, slug, industry, results }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {industry && (
            <span className="bg-brandBlue/10 text-brandBlue px-2 py-1 rounded text-xs font-medium">
              {industry}
            </span>
          )}
        </div>
        {date && (
          <span className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short' 
            })}
          </span>
        )}
      </div>
      
      <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
      
      {client && (
        <div className="text-sm text-brandGreen font-medium mb-3">
          Client: {client}
        </div>
      )}
      
      <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
      
      {results && results.length > 0 && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-700 mb-2">Key Results:</div>
          <ul className="text-xs text-gray-600 space-y-1">
            {results.slice(0, 2).map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brandGold mr-2">•</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <a 
          href={`/case-studies/${slug}`}
          className="text-brandBlue hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Read Full Case Study →
        </a>
        <div className="text-xs text-gray-500">
          Success Story
        </div>
      </div>
    </div>
  );
}
