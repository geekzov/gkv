import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Code, Shield, Zap, MessageSquare, Users } from 'lucide-react';

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-neon-pink">{skill}</span>
      <span className="text-sm font-medium text-neon-blue">{percentage}%</span>
    </div>
    <div className="w-full bg-cyber-purple rounded-full h-2.5">
      <div className="bg-neon-green h-2.5 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const ProjectCard = ({ title, description, icon: Icon }) => (
  <div className="bg-cyber-purple p-4 md:p-6 rounded-lg shadow-neon transition-all duration-300 hover:shadow-neon-intense mb-6 transform hover:scale-105">
    <div className="flex items-center mb-3">
      <Icon className="text-neon-pink mr-2" size={24} />
      <h3 className="text-lg md:text-xl font-bold text-neon-blue">{title}</h3>
    </div>
    <p className="text-cyber-gray text-sm md:text-base">{description}</p>
  </div>
);

const BlogPost = ({ title, excerpt }) => (
  <div className="mb-6 bg-cyber-dark p-4 rounded-lg transition-all duration-300 hover:bg-cyber-purple">
    <h3 className="text-lg md:text-xl font-bold text-neon-pink mb-2">{title}</h3>
    <p className="text-cyber-gray text-sm md:text-base">{excerpt}</p>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = ['about', 'skills', 'projects', 'blog', 'contact'];

  return (
    <div className="bg-cyber-black text-cyber-gray min-h-screen font-mono">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-neon-green mb-4">Hey,I'm Geekzov🦹‍♀️</h1>
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSection(item)}
                    className={`text-sm md:text-lg px-2 md:px-3 py-1 rounded ${
                      activeSection === item ? 'bg-neon-blue text-cyber-black' : 'text-neon-pink hover:bg-cyber-purple'
                    } transition-all duration-300`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          {activeSection === 'about' && (
            <section id="about" className="mb-12 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">Welcome</h2>
              <p className="text-cyber-gray text-base md:text-lg leading-relaxed">
                Greetings, citizens of  digital world! I'm Sajad  Geekzov, the caped crusader of coding you never knew you needed. By day, I'm just your average software developer. But when the git commit beams light up the sky, I don my keyboard and fight the forces of spaghetti code and security breaches.
              </p>
              <p className="text-cyber-gray text-base md:text-lg leading-relaxed mt-4">
                My utility belt is packed with full-stack development tools and cybersecurity gadgets. I swing from the high-rises of front-end frameworks to the dark alleys of back-end databases, always ready to clean up the streets... err, I mean, codebases. Remember, in this city, it's not about who I am underneath, but what I commit that defines me.
              </p>
            </section>
          )}

          {activeSection === 'skills' && (
            <section id="skills" className="mb-12 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-neon-pink mb-4">Development</h3>
                  <SkillBar skill="Full-Stack Development" percentage={95} />
                  <SkillBar skill="API Design" percentage={90} />
                  <SkillBar skill="Cloud Computing" percentage={92} />
                  <SkillBar skill="DevOps" percentage={85} />
                  <SkillBar skill="CI/CD" percentage={88} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-neon-pink mb-4">Security</h3>
                  <SkillBar skill="Penetration Testing" percentage={80} />
                  <SkillBar skill="Cryptography" percentage={75} />
                  <SkillBar skill="Secure Coding" percentage={85} />
                  <SkillBar skill="Threat Analysis" percentage={70} />
                </div>
              </div>
            </section>
          )}

          {activeSection === 'projects' && (
            <section id="projects" className="mb-12 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">Recent Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  icon={Code}
                  title="Secure API Framework"
                  description="Developed a highly secure and scalable API framework with advanced authentication mechanisms."
                />
                <ProjectCard
                  icon={Shield}
                  title="Cloud Security Solution"
                  description="Implemented a comprehensive cloud security solution to protect sensitive data and ensure compliance."
                />
                <ProjectCard
                  icon={Zap}
                  title="Automated Code Analyzer"
                  description="Created an automated tool for detecting and addressing security vulnerabilities in source code."
                />
                <ProjectCard
                  icon={MessageSquare}
                  title="AI-Powered Chatbot"
                  description="Designed an intelligent chatbot using natural language processing to assist with coding queries."
                />
                <ProjectCard
                  icon={Users}
                  title="Developer Collaboration Platform"
                  description="Built a secure platform for developers to share ideas, collaborate on projects, and improve code quality."
                />
              </div>
            </section>
          )}

          {activeSection === 'blog' && (
            <section id="blog" className="mb-12 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">Technical Insights</h2>
              <BlogPost
                title="Best Practices for Writing Clean, Maintainable Code"
                excerpt="Explore techniques and principles for creating code that's easy to read, maintain, and scale, improving long-term project health."
              />
              <BlogPost
                title="Essential Cybersecurity Measures for Modern Applications"
                excerpt="Learn about crucial security practices to protect your applications from common vulnerabilities and emerging threats."
              />
            </section>
          )}

          {activeSection === 'contact' && (
            <section id="contact" className="mb-12 animate-fadeIn">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-blue mb-4">Summon Geekzov🧞‍♂️</h2>
              <p className="text-cyber-gray text-base md:text-lg mb-6">
                Need a hero to save your project from the clutches of buggy code or security vulnerabilities? Don't bother with the Bat-Signal – it's so last century. Instead, use one of these high-tech communication channels below. But remember, I can't be everywhere at once. I'm the developer Gotham deserves, but not the one it needs right now... or something like that.
              </p>
              <div className="flex space-x-4 justify-center">
                <a href="https://github.com/geekzov" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:text-neon-green transition-colors duration-300">
                  <Github size={24} className="md:w-8 md:h-8" />
                </a>
                <a href="https://www.linkedin.com/in/abdulla-sajad-b7914124a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:text-neon-green transition-colors duration-300">
                  <Linkedin size={24} className="md:w-8 md:h-8" />
                </a>
                <a href="https://twitter.com/geekzov" target="_blank" rel="noopener noreferrer" className="text-neon-pink hover:text-neon-green transition-colors duration-300">
                  <Twitter size={24} className="md:w-8 md:h-8" />
                </a>
              </div>
            </section>
          )}
        </main>

        <footer className="mt-12 text-center text-cyber-gray text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Geekzov. All rights reserved🔒.</p>
          <p>[Under Maintanence🧙‍♂️]</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
