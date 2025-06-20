import WorksTabs from './WorksTabs';
import HomeTab from './tabs/HomeTab';
import EducationTab from './tabs/EducationTab';
import SkillsTab from './tabs/SkillsTab';
import ContactTab from './tabs/ContactTab';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
        
      case 'resume':
        return <EducationTab />;
        
      case 'works':
        return (
          <div className="space-y-6">
            <WorksTabs />
          </div>
        );
        
      case 'skills':
        return <SkillsTab />;
        
      case 'contact':
        return <ContactTab />;
        
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  );
} 