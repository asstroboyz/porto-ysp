import React from 'react';
import { Group, Code, Lightbulb, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know me and my journey as a UI/UX designer passionate about creating intuitive and engaging digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="p-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/assets/images/photoprofile1.png"
                  alt="Muhammad Yusuf Maulana working"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full filter blur-2xl -z-10"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">UI/UX Designer with a passion for creating delightful user experiences</h3>
            <p className="text-gray-400">
              Hello! I'm Muhammad Yusuf Maulana, I am an Information Systems graduate eager to start a career in UI/UX Design. Throughout my studies, I developed skills in designing intuitive and engaging user interfaces, as well as conducting user research to create optimal user experiences. I am proficient in using tools like Figma and have hands-on experience in prototyping. Additionally, I possess a solid understanding of design principles and the ability to collaborate effectively within a team. My goal is to contribute to the creation of user-friendly digital products that have a positive impact through user-centered design.
            </p>
            <p className="text-gray-400">
              My approach combines user-centered design principles with the latest trends in visual design. I believe in creating designs that not only look beautiful but also provide seamless interactions and meaningful experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <Lightbulb className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">Creative Thinking</h4>
                <p className="text-gray-400 text-sm">Innovative solutions to complex design challenges</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">User Centered</h4>
                <p className="text-gray-400 text-sm">Designs focused on real user needs and behaviors</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <Code className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">Technical</h4>
                <p className="text-gray-400 text-sm">Understanding of development constraints and possibilities</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
                <Group className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-bold text-white">Teamwork</h4>
                <p className="text-gray-400 text-sm">Able to work in a team based on creative work</p>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};