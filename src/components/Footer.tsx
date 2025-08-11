import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950/80 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Muhammad Yusuf Maulana</h3>
          <p className="text-gray-400">UI/UX Designer specializing in creating beautiful, functional, and user-centered digital experiences.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            {['UI Design', 'UX Research', 'Prototyping', 'Web Design', 'Mobile App Design'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>muhammadyusufm529@gmail.com</li>
            <li>+62895413985210</li>
            <li>Pekalongan City, Central Java, Indonesia</li>
          </ul>
          <a 
            href="#contact" 
            className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Contact Us <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Muhammad Yusuf Maulana. All rights reserved.</p>
      </div>
    </footer>
  );
};