import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
        <p className="text-xl text-md-surfaceVariant">A collection of things I've built.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card group cursor-pointer hover:scale-[1.02]">
            <div className="h-40 rounded-xl bg-md-surfaceContainerLow mb-4 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-md-primary/20 to-md-tertiary/20 group-hover:scale-110 transition-transform duration-500 ease-md-emphasized"></div>
            </div>
            <h3 className="text-xl font-bold mb-2">Project {i}</h3>
            <p className="text-sm text-md-surfaceVariant mb-4">Brief description of project {i} explaining the core problem it solves and the tech stack used.</p>
            <button className="text-md-primary font-medium text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              View Case Study <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
