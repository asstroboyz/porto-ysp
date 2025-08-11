import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, icon }) => {
  // Calculate the width based on skill level (1-10)
  const levelPercentage = Math.min(Math.max(level * 10, 0), 100);
  
  return (
    <div className="group relative flex items-center p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-800/60 transition-all">
      {icon && <div className="mr-3 text-blue-400">{icon}</div>}
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-200">{name}</span>
          <span className="text-xs text-gray-400">{level}/10</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            style={{ width: `${levelPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};