import React from 'react';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Understanding Material You Design', date: 'Oct 15, 2026', readTime: '5 min read' },
    { id: 2, title: 'Why I switched to Vite and React', date: 'Sep 28, 2026', readTime: '8 min read' },
    { id: 3, title: 'The art of the perfect API', date: 'Aug 12, 2026', readTime: '12 min read' },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-md-surfaceVariant">Thoughts, tutorials, and ramblings.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="card cursor-pointer hover:bg-md-surfaceVariant/10 group">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h2 className="text-2xl font-bold group-hover:text-md-primary transition-colors">{post.title}</h2>
            </div>
            <div className="flex gap-3 text-sm text-md-surfaceVariant mb-4 font-medium">
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-md-onBackground/80">
              This is a short excerpt from the blog post. It gives the reader a quick overview of what to expect when they click through to read the full article...
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
