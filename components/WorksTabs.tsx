'use client';

import { useState } from 'react';
import { getThemeClasses } from '../lib/theme';
import { 
  IconPalette, 
  IconCalendarEvent,
  IconUsers
} from '@tabler/icons-react';
import ExperienceTab from './works/ExperienceTab';
import EventsTab from './works/EventsTab';
import OrganizationsTab from './works/OrganizationsTab';

export default function WorksTabs() {
  const [activeTab, setActiveTab] = useState('experience');
  const theme = getThemeClasses();

  const tabs = [
    { id: 'experience', label: 'Experience', icon: IconPalette },
    { id: 'events', label: 'Organizations i have involved with', icon: IconCalendarEvent },
    { id: 'organizations', label: 'Events i have organized', icon: IconUsers }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'experience':
        return <ExperienceTab />;
      case 'events':
        return <EventsTab />;
      case 'organizations':
        return <OrganizationsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className={`${theme.glassOverlay} rounded-3xl p-6 ${theme.glassShadow}`}>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? `${theme.primaryGradient} text-white shadow-lg`
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <IconComponent size={18} />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
} 