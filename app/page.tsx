import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: "Deepfake Video Detection",
      tech: "EfficientNet V2 • LSTM • Python",
      desc: "A hybrid machine learning architecture utilizing Convolutional and Recurrent Neural Networks to analyze temporal inconsistencies in video frames and combat digital misinformation.",
      year: "2024-Present"
    },
    {
      title: "Meditrack Clinic Management",
      tech: "React • TypeScript • Supabase",
      desc: "A full-stack web application enabling secure patient monitoring, inventory control, and multi-format report generation with secure audit logs.",
      year: "2025-Present"
    },
    {
      title: "NAvSU: AR Campus Navigation",
      tech: "C# • Unity • Dijkstra's Algorithm",
      desc: "An augmented reality mobile application providing real-time spatial guidance and optimal pathfinding across university infrastructure.",
      year: "2025-Present"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-100 p-8 md:p-24">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-24 border-b border-slate-800 pb-6">
        <div className="text-xl font-bold tracking-tighter text-white">JRV<span className="text-cyan-400">.sys</span></div>
        <div className="space-x-6 text-sm font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition-colors">/root</Link>
          <Link href="/data-analytics" className="hover:text-cyan-400 transition-colors">/data-analytics-hub</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Jhon Rhey Valleramos
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-cyan-400 mb-8 font-mono">
          AI/ML Engineer & Full Stack Developer_
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          Vice President's Lister and upcoming Computer Science graduate (2026) blending full-stack web development with advanced artificial intelligence. Specializing in neural network architectures, predictive modeling, and robust data analytics.
        </p>
      </header>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <section>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <span className="bg-slate-800 p-2 rounded mr-4 text-cyan-400 text-sm font-mono">01</span>
            Experience
          </h3>
          <div className="border-l border-slate-800 pl-6 ml-4">
            <div className="mb-8 relative">
              <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[31px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
              <h4 className="text-xl font-medium text-white">Associate Full Stack Developer</h4>
              <p className="text-cyan-400 font-mono text-sm mt-1">Naval Meteorological and Oceanographic Center</p>
              <p className="text-slate-500 text-sm mb-3">July 2025 - August 2025</p>
              <p className="text-slate-400 leading-relaxed">
                Engineered an automatic weather reporting system utilizing Python numerical modeling, PHP, and MySQL to generate predictive maps and structural forecasts.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <span className="bg-slate-800 p-2 rounded mr-4 text-cyan-400 text-sm font-mono">02</span>
            Education
          </h3>
          <div className="border-l border-slate-800 pl-6 ml-4">
            <div className="mb-8 relative">
              <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[31px] top-1.5"></div>
              <h4 className="text-xl font-medium text-white">BS Computer Science</h4>
              <p className="text-cyan-400 font-mono text-sm mt-1">Cavite State University - CCAT Campus</p>
              <p className="text-slate-500 text-sm mb-3">Expected 2026</p>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section className="mb-24">
        <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
          <span className="bg-slate-800 p-2 rounded mr-4 text-cyan-400 text-sm font-mono">03</span>
          Core Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/50 transition-colors group">
              <h4 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
              <p className="text-xs font-mono text-cyan-500/70 mb-4">{project.tech}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="grid md:grid-cols-2 gap-16 border-t border-slate-800 pt-16">
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Technical Architecture</h3>
          <div className="flex flex-wrap gap-3">
            {['Python', 'Machine Learning', 'Data Analysis', 'Prompt Engineering', 'React', 'TypeScript'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 font-mono">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Certifications</h3>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-300">Data Analytics Essentials</span>
              <span className="text-slate-500 text-sm">Cisco</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-300">Google Data Analytics</span>
              <span className="text-slate-500 text-sm">Coursera</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-300">Fundamentals of Python</span>
              <span className="text-slate-500 text-sm">Data Analytics PH</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}