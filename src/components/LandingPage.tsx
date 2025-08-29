import React from 'react';
import { User } from 'lucide-react';

interface LandingPageProps {
  onUserSelect: (userName: string) => void;
}

const teamMembers = [
  { name: 'Alex Chen', role: 'Product Manager' },
  { name: 'Sarah Rodriguez', role: 'UI/UX Designer' },
  { name: 'Marcus Johnson', role: 'Lead Developer' },
  { name: 'Emily Davis', role: 'Business Analyst' }
];

function LandingPage({ onUserSelect }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bukaa.app Team Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Select your profile to access the internal analysis dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              onClick={() => onUserSelect(member.name)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer p-6 text-center border border-gray-100"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Click on your card to access the dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;