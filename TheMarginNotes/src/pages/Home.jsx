import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Replace with your Web3Forms Access Key
    const accessKey = "YOUR_ACCESS_KEY_HERE"; 
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, access_key: accessKey })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative bg-md-surfaceContainer rounded-[48px] p-12 md:p-24 overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm Harshit
            <span className="block text-md-primary">Building digital experiences.</span>
          </h1>
          <p className="text-xl mb-10 text-md-onSurfaceVariant">
            I'm a developer and designer passionate about crafting beautiful, 
            functional software. Welcome to my personal slice of the internet.
          </p>
          <div className="flex gap-4">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          Featured Work
          <div className="h-px bg-md-outline flex-1 opacity-20"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
          {/* Main featured project with asymmetric elevation */}
          <div className="card md:-translate-y-4 shadow-md ring-2 ring-md-primary/20 hover:scale-[1.02] cursor-pointer group-hover:opacity-100 transition-all">
            <div className="h-48 rounded-xl bg-md-secondary/30 mb-6 flex items-center justify-center overflow-hidden">
              <div className="text-4xl">🚀</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Project Alpha</h3>
            <p className="text-md-surfaceVariant mb-6">A full-stack SaaS application built with React and Node.js. Features real-time collaboration and AI-powered insights.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-md-secondary rounded-full text-xs font-medium text-md-onSecondary">React</span>
              <span className="px-3 py-1 bg-md-secondary rounded-full text-xs font-medium text-md-onSecondary">Tailwind</span>
            </div>
          </div>

          <div className="card hover:scale-[1.02] cursor-pointer group-hover:opacity-75 hover:!opacity-100 transition-all">
            <div className="h-48 rounded-xl bg-md-tertiary/10 mb-6 flex items-center justify-center overflow-hidden">
              <div className="text-4xl">🎨</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Design System</h3>
            <p className="text-md-surfaceVariant mb-6">A comprehensive design system implementing Material You specifications. Includes tokens, components, and documentation.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-md-secondary rounded-full text-xs font-medium text-md-onSecondary">Figma</span>
              <span className="px-3 py-1 bg-md-secondary rounded-full text-xs font-medium text-md-onSecondary">CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-md-surfaceContainerLow backdrop-blur-sm border border-md-outline/20 rounded-[32px] p-8 md:p-12 max-w-3xl mx-auto shadow-lg relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-md-primary/10 via-transparent to-transparent pointer-events-none"></div>
        
        <h2 className="text-3xl font-bold mb-2 relative z-10">Get in Touch</h2>
        <p className="text-md-surfaceVariant mb-8 relative z-10">Have a project in mind or just want to say hi? Send me a message!</p>
        
        <form className="flex flex-col gap-5 relative z-10" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-5">
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              className="input-filled flex-1"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              disabled={status === 'submitting'}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              className="input-filled flex-1"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              disabled={status === 'submitting'}
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            required
            rows="4"
            className="input-filled py-4 h-auto resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            disabled={status === 'submitting'}
          ></textarea>
          
          <button 
            type="submit" 
            className="btn-primary w-full sm:w-auto self-end mt-2 disabled:opacity-50"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="p-4 bg-green-100 text-green-800 rounded-xl mt-2 text-sm font-medium">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-800 rounded-xl mt-2 text-sm font-medium">
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Home;
