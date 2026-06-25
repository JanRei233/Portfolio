'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  /* ── Scroll-reveal & Scroll-to-top observer ── */
  useEffect(() => {
    // Scroll-to-top listener
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll-reveal logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe every element with the .reveal class
    const el = mainRef.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    }
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    {
      icon: '🤖',
      title: 'AI / Machine Learning',
      tags: ['Python', 'Prompt Engineering', 'Deep Learning', 'Neural Network Architecture', 'Machine Learning', 'SVM', 'EfficientNetV2B0'],
    },
    {
      icon: '📊',
      title: 'Data Science & Analytics',
      tags: ['Data Analysis', 'Data Science', 'Predictive Modeling'],
    },
    {
      icon: '💻',
      title: 'Full Stack Development',
      tags: ['React', 'TypeScript', 'Supabase', 'Express', 'Python', 'PHP', 'MySQL', 'Web App'],
    },
    {
      icon: '📱',
      title: 'Mobile & AR',
      tags: ['Unity', 'C#', 'Augmented Reality', 'Dijkstra\'s Algorithm', '3D Visualization', 'Mobile App'],
    },
  ];

  const certifications = [
    { name: 'Data Analysis with R Programming', issuer: 'Coursera (Nov 9, 2024)', link: 'https://coursera.org/verify/AXL5Y0ISQJEL' },
    { name: 'Google Advanced Data Analytics', issuer: 'Coursera (Nov 15, 2024)', link: 'https://coursera.org/verify/professional-cert/BEVJWR9UIQDM' },
    { name: 'Foundations of Data Science', issuer: 'Coursera (Nov 15, 2024)', link: 'https://coursera.org/verify/G65CSBF6PRMC' },
    { name: 'Accelerate Your Job Search with AI', issuer: 'Coursera (Apr 7, 2026)', link: 'https://coursera.org/verify/O3W3ROZC2UBL' },
    { name: 'Google AI Essentials', issuer: 'Coursera (Nov 4, 2024)', link: 'https://coursera.org/verify/VZXGKG6SSB7P' },
    { name: 'Google Data Analytics', issuer: 'Coursera (Nov 9, 2024)', link: 'https://coursera.org/verify/professional-cert/TVQHOMNJ40QZ' },
    { name: 'Google Prompting Essentials', issuer: 'Coursera', link: 'https://coursera.org/verify/OHOFJP007EZC' },
    { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy (Feb 5, 2025)', link: '/python-essentials-1.jpg' },
    { name: 'Python Essentials 2', issuer: 'Cisco Networking Academy (Feb 5, 2025)', link: '/python-essentials-2.jpg' },
  ];

  const projects = [
    {
      icon: '🧭',
      title: 'NAvSU: AR Campus Navigation System',
      tech: 'Augmented Reality • Pathfinding Algorithm • C# • Unity • 3D Visualization',
      desc: 'An augmented reality-based campus navigation system utilizing Dijkstra\'s algorithm to determine the most efficient path between locations, providing real-time directional guidance through the user\'s camera view.',
      year: '2025–Present',
      link: 'https://navsu.vercel.app/',
    },
    {
      icon: '🏥',
      title: 'Meditrack Clinic Management System',
      tech: 'React • TypeScript • Supabase • Web App',
      desc: 'A full-stack clinic management web application enabling secure patient monitoring, consultation tracking, inventory control, admin management, audit logs, and multi-format report generation.',
      year: '2025–Present',
    },
    {
      icon: '🎙️',
      title: 'Deepfake Voice Detection',
      tech: 'Neural Network Architecture • Deep Learning • Python',
      desc: 'Detects Deepfake voice using Support Vector Machines (SVM) algorithm to identify slight imperfections in voice tone and pitch with an acceptable accuracy of 97% using GBAD dataset.',
      year: '2024–2025',
      link: 'https://github.com/JanRei233/Echo-Reveal',
    },
    {
      icon: '🖼️',
      title: 'Deepfake Image Detection',
      tech: 'Neural Network Architecture • Deep Learning • Python',
      desc: 'Aims to detect Deepfake images using EfficientNetV2B0 algorithm from authentic images with an acceptable accuracy of 84.19% using Kaggle dataset to prevent misinformation.',
      year: '2024–2025',
      link: 'https://github.com/JanRei233/Deepfake-Image',
    },
  ];

  return (
    <div className="portfolio-root">
      {/* Ambient background orbs */}
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />

      {/* ── Navbar ─────────────────────────────── */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-inner">
            <a href="#hero" className="navbar-logo">
              JRV<span>.sys</span>
            </a>
            <ul className="navbar-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button
              id="hamburger-btn"
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
          {/* Mobile nav */}
          <ul className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
            {['about', 'skills', 'certifications', 'experience', 'projects', 'contact'].map((s) => (
              <li key={s}>
                <a href={`#${s}`} onClick={() => setMenuOpen(false)}>
                  /{s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main ref={mainRef}>
        {/* ── Hero ──────────────────────────────── */}
        <section id="hero">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" aria-hidden="true" />
                  Available for opportunities
                </div>
                <h1 className="hero-name">
                  Jhon Rhey<br />
                  <span>Valleramos</span>
                </h1>
                <p className="hero-role">
                  AI/ML Engineer&nbsp;&amp;&nbsp;<em>Full Stack Developer</em>_
                </p>
                <p className="hero-desc">
                  Vice President&apos;s Lister and upcoming Computer Science graduate (2026) blending
                  full-stack web development with advanced artificial intelligence. Specializing in
                  neural network architectures, predictive modeling, and data analytics.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn-primary" id="hero-contact-btn">
                    Get in touch →
                  </a>
                  <a href="#projects" className="btn-secondary" id="hero-projects-btn">
                    View projects
                  </a>
                </div>
              </div>
              <div className="hero-avatar">
                <Image
                  src="/Janrei.jpg"
                  alt="Jhon Rhey Valleramos"
                  width={400}
                  height={400}
                  className="hero-avatar-img"
                  priority
                />
              </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#about" className="scroll-indicator" aria-label="Scroll down to About section">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div className="arrows">
                <span className="arrow"></span>
                <span className="arrow"></span>
                <span className="arrow"></span>
              </div>
            </a>
          </div>
        </section>

        {/* ── About ─────────────────────────────── */}
        <section id="about" className="reveal">
          <div className="container">
            <p className="section-label">01 / About</p>
            <h2 className="section-title">Who I Am</h2>
            <div className="section-divider" />
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I&apos;m a passionate Computer Science student at Cavite State University – CCAT Campus,
                  with a strong focus on building intelligent systems and clean, performant web
                  applications. I thrive at the intersection of data science and software engineering.
                </p>
                <p>
                  As a Vice President&apos;s Lister, I continuously push the boundaries of my technical
                  skills — whether it&apos;s training deep learning models, building full-stack platforms, or
                  creating AR experiences that bridge the digital and physical worlds.
                </p>
                <p>
                  I believe technology should be purposeful. Every project I take on is driven by a
                  desire to solve real problems in creative, data-informed ways.
                </p>
              </div>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎓</div>
                  <div>
                    <h4>BS Computer Science</h4>
                    <p>Cavite State University – CCAT Campus · Expected 2026</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🏆</div>
                  <div>
                    <h4>Vice President&apos;s Lister</h4>
                    <p>2nd Year (SY 2023-2024), 3rd Year (SY 2024-2025)</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💡</div>
                  <div>
                    <h4>AI/ML Specialist</h4>
                    <p>Neural networks, predictive modeling &amp; data analytics</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌏</div>
                  <div>
                    <h4>Based in Philippines</h4>
                    <p>General Trias, Cavite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ────────────────────────────── */}
        <section id="skills" className="reveal">
          <div className="container">
            <p className="section-label">02 / Skills</p>
            <h2 className="section-title">Technical Stack</h2>
            <div className="section-divider" />
            <div className="skills-grid">
              {skills.map((cat) => (
                <div className="skill-category-card" key={cat.title}>
                  <div className="skill-category-header">
                    <div className="skill-category-icon">{cat.icon}</div>
                    <span className="skill-category-title">{cat.title}</span>
                  </div>
                  <div className="skill-tags">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ─────────────────────── */}
        <section id="certifications" className="reveal">
          <div className="container">
            <p className="section-label">03 / Certifications</p>
            <h2 className="section-title">Certifications</h2>
            <div className="section-divider" />
            <div className="cert-grid">
              {certifications.map((c) => {
                const CardWrapper = c.link ? 'a' : 'div';
                const wrapperProps = c.link
                  ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <CardWrapper
                    className={`cert-card ${c.link ? 'clickable' : ''}`}
                    key={c.name}
                    {...(wrapperProps as any)}
                  >
                    <div className="cert-card-icon">📜</div>
                    <div className="cert-card-body">
                      <h3 className="cert-card-name">
                        {c.name}
                        {c.link && (
                          <svg className="external-link-icon-cert" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px', opacity: 0.7 }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        )}
                      </h3>
                      <span className="cert-issuer">{c.issuer}</span>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Experience ────────────────────────── */}
        <section id="experience" className="reveal">
          <div className="container">
            <p className="section-label">04 / Experience</p>
            <h2 className="section-title">Background</h2>
            <div className="section-divider" />
            <div className="experience-grid">
              {/* Work experience */}
              <div>
                <p className="exp-subhead">Work Experience</p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="timeline-period">July 2025 – August 2025</p>
                    <h3 className="timeline-title">Associate Full Stack Developer</h3>
                    <p className="timeline-org">Naval Meteorological and Oceanographic Center</p>
                    <p className="timeline-desc">
                      • Assisted in completing existing projects by adding new features and improving the existing system.<br />
                      • Developed an automated weather report system using Full stack Python language with numerical modeling and plotting of maps for weather forecast.<br />
                      • Developed a Personnel Management System (PMS) using MySQL local hosted database for managing manpower on the institution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <p className="exp-subhead">Education</p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <p className="timeline-period">2022 – Expected 2026</p>
                    <h3 className="timeline-title">BS Computer Science</h3>
                    <p className="timeline-org">Cavite State University – CCAT Campus</p>
                    <p className="timeline-desc">
                      Consistent Vice President&apos;s Lister. Focused coursework in Artificial
                      Intelligence, Machine Learning, Data Analytics, and Software Engineering.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot muted" />
                    <p className="timeline-period muted">2018 – 2022</p>
                    <h3 className="timeline-title">Senior High School – STEM</h3>
                    <p className="timeline-org muted">Secondary Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projects ──────────────────────────── */}
        <section id="projects" className="reveal">
          <div className="container">
            <p className="section-label">05 / Projects</p>
            <h2 className="section-title">Core Projects</h2>
            <div className="section-divider" />
            <div className="projects-grid">
              {projects.map((project) => {
                const CardWrapper = project.link ? 'a' : 'div';
                const wrapperProps = project.link
                  ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <CardWrapper
                    className={`project-card ${project.link ? 'clickable' : ''}`}
                    key={project.title}
                    {...(wrapperProps as any)}
                  >
                    <div className="project-card-top">
                      <span className="project-icon">{project.icon}</span>
                      <div className="project-card-top-right">
                        <span className="project-year">{project.year}</span>
                        {project.link && (
                          <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        )}
                      </div>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tech">{project.tech}</p>
                    <p className="project-desc">{project.desc}</p>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────── */}
        <section id="contact" className="reveal">
          <div className="container">
            <p className="section-label">06 / Contact</p>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <div className="section-divider" />
            <div className="contact-wrapper">
              <div>
                <p className="contact-intro">
                  I&apos;m currently open to internship opportunities, freelance projects, and
                  full-time roles starting 2026. If you have an exciting problem to solve or want
                  to collaborate, I&apos;d love to hear from you.
                </p>
                <div className="contact-links">
                  <a
                    href="mailto:jhonrei.valleramos@gmail.com"
                    className="contact-link"
                    id="contact-email-link"
                  >
                    <div className="contact-link-icon">✉️</div>
                    <div>
                      <div className="contact-link-label">Email</div>
                      <div className="contact-link-val">jhonrei.valleramos@gmail.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+63933500634"
                    className="contact-link"
                    id="contact-phone-link"
                  >
                    <div className="contact-link-icon">📱</div>
                    <div>
                      <div className="contact-link-label">Phone</div>
                      <div className="contact-link-val">+63 933 500 634</div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jhon-rhey-valleramos-169344326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    id="contact-linkedin-link"
                  >
                    <div className="contact-link-icon">💼</div>
                    <div>
                      <div className="contact-link-label">LinkedIn</div>
                      <div className="contact-link-val">jhon-rhey-valleramos</div>
                    </div>
                  </a>
                  <a
                    href="/Resume_Valleramos.pdf"
                    download="Resume_Valleramos.pdf"
                    className="contact-link"
                    id="contact-resume-link"
                  >
                    <div className="contact-link-icon">📄</div>
                    <div>
                      <div className="contact-link-label">Resume</div>
                      <div className="contact-link-val">Download PDF</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick contact form */}
              <form
                className="contact-form"
                id="contact-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="form-name">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">Email</label>
                  <input
                    id="form-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity…"
                    required
                  />
                </div>
                <button type="submit" className="form-submit" id="form-submit-btn">
                  Send Message ✉
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <p>
            © 2026 <span>Jhon Rhey Valleramos</span>. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── Scroll To Top Button ────────────────── */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </div>
  );
}