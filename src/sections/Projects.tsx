import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';

const CATEGORIES = ['All', 'Mobile App', 'Web Design'];

const PROJECTS = [
  {
    id: 1,
    title: 'Learnify Education App',
    description: 'Learnify is a digital learning application specifically designed to help high school students understand subject matter in a more interactive, interesting and fun way. Learnify combines learning videos, interactive practice questions, and gamification systems such as leaderboards and achievement badges.',
    image: '/assets/images/portfolio1.png',
    tags: ['UI Design', 'Education App', 'App Design'],
    category: 'Mobile App' , 
  },
  {
    id: 2,
    title: 'Onboarding FinSmart App',
    description: 'Manage personal finances smarter and without stress',
    image: '/assets/images/porto2.png',
    tags: ['UI Design', 'Prototyping', 'App Design'],
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'TravelNest Landing Page',
    description: 'Travelnest is a company engaged in tourism services and this is the companys landing page.',
    image: '/assets/images/travelnest.png',
    tags: ['Web Design', 'UI Design', 'Travelling'],
    category: 'Web Design',
  },
  {
    id: 4,
    title: 'Litera Apps',
    description: 'Litera is a library application.',
    image: '/assets/images/litera.png',
    tags: ['App Design', 'E-Library', 'UI Design'],
    category: 'Mobile App',
  },
  {
    id: 5,
    title: 'Web3Hire Website',
    description: 'Web3Hire is a job search website in the web3 world.',
    image: '/assets/images/web3hire.png',
    tags: ['UI Design', 'Web Design', 'Interaction Design'],
    category: 'Web Design',
  },
  {
    id: 6,
    title: 'CozyBean Landing Page',
    description: 'CozyBean is a coffee shop landing page',
    image: '/assets/images/CozyBean.png',
    tags: ['Web Design', 'Interaction Design', 'UI Design'],
    category: 'Web Design',
  },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of UI/UX design projects that showcase my skills, creativity, and problem-solving approach.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border border-blue-500 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
          >
            Interested in working together? Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};