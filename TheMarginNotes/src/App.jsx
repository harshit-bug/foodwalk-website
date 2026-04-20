import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold text-md-primary">TheMarginNotes</Link>
          <div className="flex gap-4">
            <Link to="/projects" className="font-medium text-md-onBackground hover:text-md-primary transition-colors">Projects</Link>
            <Link to="/blog" className="font-medium text-md-onBackground hover:text-md-primary transition-colors">Blog</Link>
          </div>
        </nav>

        {/* Global Blur Shapes for "Bold Factor" */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-md-primary/10 rounded-full blur-3xl -z-10 mix-blend-multiply" aria-hidden="true"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-md-secondary/20 rounded-[100px] rounded-tr-[20px] blur-3xl -z-10 mix-blend-multiply" aria-hidden="true"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-md-tertiary/10 rounded-full blur-3xl -z-10 mix-blend-multiply" aria-hidden="true"></div>

        {/* Main Content Area */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
