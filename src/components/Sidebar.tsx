import React, { useState } from 'react';
import { BarChart3, Shield, Package, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { PlanType } from './Dashboard';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activePlan: PlanType;
  setActivePlan: (plan: PlanType) => void;
}

function Sidebar({ activeTab, setActiveTab, activePlan, setActivePlan }: SidebarProps) {
  const [plansExpanded, setPlansExpanded] = useState(false);

  const planOptions = [
    { id: 'free-normal' as PlanType, label: 'Free/Normal User' },
    { id: 'personal-small' as PlanType, label: 'Personal/Small Business (no store)' },
    { id: 'large-business' as PlanType, label: 'Large Businesses (with store)' }
  ];

  const handlePlanSelect = (plan: PlanType) => {
    setActivePlan(plan);
    setActiveTab('plans');
    setPlansExpanded(false);
  };

  return (
    <div className="fixed left-0 top-0 w-64 bg-gray-900 text-white h-screen flex flex-col z-10">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">Bukaa Analytics</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto mt-6 px-3 pb-6">
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </button>
          
          <button
            onClick={() => setActiveTab('authentication')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'authentication'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Shield className="w-5 h-5" />
            <span>Authentication</span>
          </button>
          
          <div>
            <button
              onClick={() => setPlansExpanded(!plansExpanded)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'plans'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5" />
                <span>Plans</span>
              </div>
              {plansExpanded ? 
                <ChevronDown className="w-4 h-4" /> : 
                <ChevronRight className="w-4 h-4" />
              }
            </button>
            
            {plansExpanded && (
              <div className="ml-4 mt-2 space-y-1">
                {planOptions.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeTab === 'plans' && activePlan === plan.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;