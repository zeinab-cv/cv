import { getThemeClasses } from '../lib/theme';
import { 
  IconHome, 
  IconFileText, 
  IconBriefcase, 
  IconBrain, 
  IconPhone 
} from '@tabler/icons-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const theme = getThemeClasses();
  
  const tabs = [
    { id: 'home', label: 'Home', icon: IconHome },
    { id: 'resume', label: 'Education', icon: IconFileText },
    { id: 'works', label: 'Works', icon: IconBriefcase },
    { id: 'skills', label: 'Skills', icon: IconBrain },
    { id: 'contact', label: 'Contact', icon: IconPhone }
  ];

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);
  
  return (
    <div className={`${theme.glassCard} rounded-2xl p-2 ${theme.cardShadow} mb-8 relative`}>
      {/* Sliding indicator */}
      <div 
        className={`absolute top-2 bottom-2 ${theme.primaryGradient} rounded-xl transition-all duration-300 ease-out shadow-lg`}
        style={{
          width: `calc(20% - 4px)`,
          left: `calc(${activeIndex * 20}% + 4px)`,
          transform: 'translateX(0)'
        }}
      />
      
      <div className="flex space-x-2 relative z-10">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group
                ${activeTab === tab.id 
                  ? 'text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <div className="relative z-10 flex flex-col items-center space-y-1">
                <IconComponent size={20} />
                <span className="text-sm font-medium">{tab.label}</span>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          );
        })}
      </div>
    </div>
  );
} 