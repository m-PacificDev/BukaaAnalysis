import React from 'react';
import muhire from '../TeamPics/profile.jpg';
import nziza from '../TeamPics/nziza.jpeg';
import ngwino from '../TeamPics/ngwino.jpeg';
import gabi from '../TeamPics/gabi.jpeg';

interface LandingPageProps {
  onUserSelect: (userName: string) => void;
}

const teamMembers = [
  { name: 'Pacifique MUHIRE', role: 'Engineer', photo: muhire },
  { name: 'Alain NZIZA', role: 'Engineer', photo: nziza },
  { name: 'Christian NGWINO', role: 'Engineer', photo: ngwino },
  { name: 'Gabriella', role: 'SME', photo: gabi },
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
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
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
