import React from 'react';
import { LogOut } from 'lucide-react';

interface TopbarProps {
  activeUser: string;
  onLogout: () => void;
}

function Topbar({ activeUser, onLogout }: TopbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-900">
        Welcome, {activeUser}
      </h1>
      
      <button
        onClick={onLogout}
        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
      >
        <LogOut className="w-4 h-4" />
        <span>Switch User</span>
      </button>
    </div>
  );
}

export default Topbar;