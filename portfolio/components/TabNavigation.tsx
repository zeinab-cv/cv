import { getThemeClasses } from '../lib/theme';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const theme = getThemeClasses();
  
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'resume', label: 'Resume', icon: '📄' },
    { id: 'works', label: 'Works', icon: '💼' },
    { id: 'blogs', label: 'Blogs', icon: '📝' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];
  
  return (
    <div className={`${theme.glassCard} rounded-2xl p-2 ${theme.cardShadow} mb-8`}>
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group
              ${activeTab === tab.id 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {/* Active tab glow effect */}
            {activeTab === tab.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-xl"></div>
            )}
            
            <div className="relative z-10 flex flex-col items-center space-y-1">
              <span className="text-lg">{tab.icon}</span>
              <span className="text-sm font-medium">{tab.label}</span>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        ))}
      </div>
    </div>
  );
} 