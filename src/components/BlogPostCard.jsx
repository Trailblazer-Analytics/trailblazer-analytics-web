import React from 'react';

const BlogPostCard = ({ 
  title, 
  description, 
  date, 
  readTime, 
  tags = [], 
  slug, 
  featured = false 
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${featured ? 'border-2 border-brandGold' : ''}`}>
      {featured && (
        <div className="bg-brandGold text-gray-900 px-4 py-2 text-center">
          <span className="font-semibold text-sm">Featured Post</span>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-brandGreen/10 text-brandGreen text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-brandGreen transition-colors">
          <a href={`/blog/${slug}/`}>
            {title}
          </a>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <time>{formatDate(date)}</time>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
          
          <a 
            href={`/blog/${slug}/`}
            className="text-brandGreen font-medium hover:text-green-700 transition-colors"
          >
            Read →
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
