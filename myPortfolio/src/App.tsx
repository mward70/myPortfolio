import React, { useState } from 'react';
import { Card } from './components/card';
import { Button } from './components/button';
import { Input } from './components/input';
import { Textarea } from './components/textarea';
import Resume from './components/resume';
import { motion } from 'framer-motion';
import profilePic from './assets/profilePic.jpg';
import catSleeping from './assets/catSleeping.jpg';
import puzzleCat from './assets/puzzleCat.jpg';
import catSurfing from './assets/catSurfing.jpg';
import vehicleBuilder from './assets/vehicleBuilder.png';
import README from './assets/README.png';
import employeeTracker from './assets/employeeTracker.png';
import resumeFile from './assets/resumeFile.pdf';

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

  const projects = [
    { title: 'Vehicle Builder', image: vehicleBuilder, demo: 'https://drive.google.com/file/d/1qMPpQGfrq4Ul-55VdX_IHy42DS_V4lZk/view', repo: 'https://github.com/mward70/vehicleBuilder' },
    { title: 'README Generator', image: README, demo: 'https://drive.google.com/file/d/1b7bRUqggG6j1HnADYf6xpgkb6kdc5E-q/view', repo: 'https://github.com/mward70/readme-generator' },
    { title: 'Employee Tracker', image: employeeTracker, demo: 'https://drive.google.com/file/d/1eCLk5qi_rnm5ymPsKTJ04xmyvYOS2ONh/view', repo: 'https://github.com/mward70/employee-tracker' },
    { title: 'Project Four: Coming soon!', image: puzzleCat, demo: '#', repo: '#' },
    { title: 'Project Five: Coming soon!', image: catSurfing, demo: '#', repo: '#' },
    { title: 'Project Six: Coming soon!', image: catSleeping, demo: '#', repo: '#' },
  ];
  
  return (
    <div>
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '1.5rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#A36D90' }}>Megan Ward</h1>
        <div>
          {sections.map(section => (
            <Button
              key={section}
              className={activeSection === section ? 'font-bold underline' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </Button>
          ))}
        </div>
      </header>

      {/* Content Section */}
      <main>
        {activeSection === 'About Me' && (
          <section className="about-me">
            <h2 className="text-2xl font-bold">About Me</h2>
            <img 
              src={profilePic} 
              alt="Profile" 
              className="profile-picture" 
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '5px solid #A36D90',
                boxShadow: '0px 0px 15px rgba(163, 109, 144, 0.8)',
                margin: '20px auto'
              }}
            />
            <p>Hello, and welcome to my portfolio site! Click the tabs at the top of the page to learn more about me and my work. If you would like to connect with me on social media, you can follow the links below. Talk soon!</p>
          </section>
        )};

        {activeSection === 'Portfolio' && (
         <section>
         <h2>My Projects</h2>
         <div>
           {projects.map((project, index) => (
             <Card key={index}>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="project-image"
                 style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
               />
               <h3>{project.title}</h3>
               <a href={project.demo} target="_blank">Live Demo</a>
               <a href={project.repo} target="_blank">GitHub Repo</a>
             </Card>
           ))}
         </div>
       </section>
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
            <a
            href= {resumeFile}
            download="resumeFile.pdf"
            className="download-button"
              style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: '#A36D90',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s',
              }}
              >
                Download My Resume
              </a>
              <Resume />
            </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        <a href="https://github.com/mward70" target="_blank">GitHub </a>
        <a href="https://linkedin.com/in/meganward3001" target="_blank">LinkedIn </a>
        <a href="https://stackoverflow.com/users/username" target="_blank">Stack Overflow</a>
      </footer>
      </div>
        );
      };


export default App;
