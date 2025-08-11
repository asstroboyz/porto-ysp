import React from 'react';
import { SkillBadge } from '../components/SkillBadge';
import { 
  Figma, 
  Layers, 
  Layout, 
  Smartphone, 
  PenTool, 
  Pencil, 
  Eye, 
  Users,
  Sparkles,
  BookOpen,
  Briefcase,
  Lightbulb
} from 'lucide-react';

const DESIGN_TOOLS = [
  { name: 'Figma', level: 9, icon: <Figma size={20} /> },
  { name: 'Photoshop', level: 7, icon: <Layers size={20} /> },
  { name: 'Canva', level: 8, icon: <Pencil size={20} /> },
];

const DESIGN_SKILLS = [
  { name: 'UI Design', level: 9, icon: <Layout size={20} /> },
  { name: 'UX Research', level: 8, icon: <Users size={20} /> },
  { name: 'Wireframing', level: 9, icon: <Pencil size={20} /> },
  { name: 'Prototyping', level: 8, icon: <Smartphone size={20} /> },
  { name: 'User Testing', level: 7, icon: <Eye size={20} /> },
  { name: 'Design Systems', level: 8, icon: <Layers size={20} /> },
];

const SOFT_SKILLS = [
  { name: 'Problem Solving', level: 9, icon: <Lightbulb size={20} /> },
  { name: 'Communication', level: 8, icon: <Users size={20} /> },
  { name: 'Creativity', level: 9, icon: <Sparkles size={20} /> },
  { name: 'Adaptability', level: 8, icon: <Briefcase size={20} /> },
  { name: 'Time Management', level: 7, icon: <BookOpen size={20} /> },
  { name: 'Teamwork', level: 8, icon: <Users size={20} /> },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950/50 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, design tools proficiency, and soft skills that enable me to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Layout className="mr-2 text-blue-400" size={20} /> Design Tools
            </h3>
            <div className="space-y-4">
              {DESIGN_TOOLS.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Pencil className="mr-2 text-blue-400" size={20} /> Design Skills
            </h3>
            <div className="space-y-4">
              {DESIGN_SKILLS.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Users className="mr-2 text-blue-400" size={20} /> Soft Skills
            </h3>
            <div className="space-y-4">
              {SOFT_SKILLS.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800/40 via-blue-900/20 to-gray-800/40 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">My Design Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understanding user needs and business goals through thorough research.',
                icon: <BookOpen className="text-blue-400" size={24} />,
              },
              {
                step: '02',
                title: 'Wireframe',
                description: 'Creating structural design blueprints focusing on layout and user flow.',
                icon: <Pencil className="text-blue-400" size={24} />,
              },
              {
                step: '03',
                title: 'Design',
                description: 'Developing high-fidelity designs with visual aesthetics and interactions.',
                icon: <PenTool className="text-blue-400" size={24} />,
              },
              {
                step: '04',
                title: 'Test & Iterate',
                description: 'Validating designs through user testing and iterative improvements.',
                icon: <Eye className="text-blue-400" size={24} />,
              },
            ].map((item, index) => (
              <div key={index} className="relative p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold text-white">
                  {item.step}
                </span>
                <div className="mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};