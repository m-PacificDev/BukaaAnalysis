import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Overview from './pages/Overview';
import Authentication from './pages/Authentication';
import PlanPage from './pages/PlanPage';

interface DashboardProps {
  activeUser: string;
  onLogout: () => void;
}

export type PlanType = 'free-normal' | 'personal-small' | 'large-business';

function Dashboard({ activeUser, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [activePlan, setActivePlan] = useState<PlanType>('free-normal');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'authentication':
        return <Authentication />;
      case 'plans':
        return <PlanPage planType={activePlan} activeUser={activeUser} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activePlan={activePlan}
        setActivePlan={setActivePlan}
      />
      <div className="ml-64 flex flex-col min-h-screen">
        <Topbar activeUser={activeUser} onLogout={onLogout} />
        <main className="flex-1 transition-all duration-300 ease-in-out">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;