import React, { useEffect, useState } from 'react';
import { TypewriterEffect } from '../components/TypewriterEffect';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <img
            src="/assets/images/photoprofile1.png"
            alt="Muhammad Yusuf Maulana"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500/50 shadow-lg shadow-blue-500/20"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Muhammad Yusuf Maulana
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
            I'm a{' '}
            <TypewriterEffect
              text={[
                'UI/UX Designer',
                'UI Designer',
                'UX designer',
                'UX Writer',
                'Prototyping & Interaction Designer',
                'Designer Systems',
                'Creative Thinker',
              ]}
            />
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-centered
            digital experiences that delight users and help businesses grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300 hover:shadow-lg hover:shadow-blue-600/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-transparent border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};