import React, { useState } from 'react';
import { Card } from './components/card';
import { Button } from './components/button';
import { Input } from './components/input';
import { Textarea } from './components/textarea';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('About Me');
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  const handleValidation = (field: string, value: string) => {
    if (!value) {
      setFormErrors(prev => ({ ...prev, [field]: 'This field is required' }));
    } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFormErrors(prev => ({ ...prev, email: 'Invalid email address' }));
    } else {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const portfolioProjects = Array.from({ length: 6 }, (_, index) => ({
    title: `Project ${index + 1}`,
    demo: `https://demo${index + 1}.com`,
    repo: `https://github.com/username/project${index + 1}`
  }));

  return (
    <div>
      {/* Header */}
      <header>
        {sections.map(section => (
          <Button
            key={section}
            className={activeSection === section ? 'font-bold underline' : ''}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </Button>
        ))}
      </header>

      {/* Content Section */}
      <main>
        {activeSection === 'About Me' && <section><h2 className="text-2xl font-bold">About Me</h2><p>Your bio here...</p></section>}

        {activeSection === 'Portfolio' && (
          <div>
            {portfolioProjects.map((project, index) => (
              <Card key={index}>
                <h3>{project.title}</h3>
                <a href={project.demo}target="_blank">Live Demo</a>
                <a href={project.repo}target="_blank">GitHub Repo</a>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'Contact' && (
          <form>
            <Input placeholder="Name" type="text" onBlur={(e) => handleValidation('name', e.target.value)} />
            {formErrors.name && <p>{formErrors.name}</p>}

            <Input placeholder="Email" type="email" onBlur={(e) => handleValidation('email', e.target.value)} />
            {formErrors.email && <p>{formErrors.email}</p>}

            <Textarea placeholder="Message" onBlur={(e) => handleValidation('message', e.target.value)} />
            {formErrors.message && <p>{formErrors.message}</p>}

            <Button type="submit">Send</Button>
          </form>
        )}

        {activeSection === 'Resume' && (
          <section>
            <a href="/resume.pdf" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
              <li>React (TypeScript)</li>
              <li>Vite</li>
              <li>PostgreSQL</li>
              <li>Inquirer CLI</li>
            </ul>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        <a href="https://github.com/username" target="_blank">GitHub </a>
        <a href="https://linkedin.com/in/username" target="_blank">LinkedIn </a>
        <a href="https://stackoverflow.com/users/username" target="_blank">Stack Overflow</a>
      </footer>
    </div>
  );
};

export default App;
