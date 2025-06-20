'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/TabNavigation';
import TabContent from '../components/TabContent';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div 
        className="relative z-10 p-4 md:p-8 mt-24"
        data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-easing="ease-out"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Sticky */}
            <div 
              className="lg:col-span-1"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <Sidebar />
            </div>
            
            {/* Right Content Area */}
            <div 
              className="lg:col-span-2 space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-easing="ease-out"
            >
              {/* Tab Navigation */}
              <div
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease-out"
              >
                <TabNavigation 
                  activeTab={activeTab} 
                  onTabChange={setActiveTab} 
                />
              </div>
              
              {/* Tab Content */}
              <div
                data-aos="zoom-out"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-easing="ease-out"
              >
                <TabContent activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
