'use client';

import { useState } from 'react';
import { getThemeClasses } from '../lib/theme';
import { 
  IconPalette, 
  IconHandStop, 
  IconBook, 
  IconWorld,
  IconCalendarEvent,
  IconUsers,
  IconBuildingCommunity
} from '@tabler/icons-react';

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('projects');
  const theme = getThemeClasses();

  const tabs = [
    { id: 'projects', label: 'Projects', icon: IconPalette },
    { id: 'events', label: 'Events Hosted', icon: IconCalendarEvent },
    { id: 'organizations', label: 'Organizations', icon: IconUsers }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconPalette size={48} className="text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Social Media Strategy</h3>
              <p className="text-white/70 text-sm">Developed and implemented creative social media campaigns for various organizations.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconHandStop size={48} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Project Coordination</h3>
              <p className="text-white/70 text-sm">Coordinated multicultural projects and community development initiatives.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconBook size={48} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Non-formal Education</h3>
              <p className="text-white/70 text-sm">Designed and facilitated workshops focused on active citizenship and dialogue.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconWorld size={48} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Development</h3>
              <p className="text-white/70 text-sm">Cultural well-being and community development initiatives across diverse environments.</p>
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconCalendarEvent size={48} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Workshops</h3>
              <p className="text-white/70 text-sm">Organized and facilitated workshops on active citizenship and community engagement.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconBuildingCommunity size={48} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cultural Events</h3>
              <p className="text-white/70 text-sm">Hosted multicultural events promoting dialogue and understanding between communities.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconUsers size={48} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Networking Events</h3>
              <p className="text-white/70 text-sm">Organized professional networking events connecting diverse professionals and organizations.</p>
            </div>
          </div>
        );

      case 'organizations':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconBuildingCommunity size={48} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Osuuskunta 3E</h3>
              <p className="text-white/70 text-sm">Project Coordinator role focusing on national and international project planning and implementation.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconUsers size={48} className="text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Nordic Inclusify ry</h3>
              <p className="text-white/70 text-sm">Social Media & Marketing Team member, developing inclusive marketing strategies and content.</p>
            </div>
            
            <div className={`${theme.glassCard} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="w-full h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-xl mb-4 flex items-center justify-center">
                <IconWorld size={48} className="text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Partners</h3>
              <p className="text-white/70 text-sm">Collaborated with various local and international organizations on social development initiatives.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <IconComponent size={18} />
              <span className="text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
} 