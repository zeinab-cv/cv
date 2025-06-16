'use client';

import { useState } from 'react';
import { getThemeClasses } from '../lib/theme';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/TabNavigation';
import TabContent from '../components/TabContent';

export default function Home() {
  const theme = getThemeClasses();
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <div className={`min-h-screen ${theme.heroBg} p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          
          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <TabNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />
            
            {/* Tab Content */}
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
