import React from 'react';
import { Mail, Lock, Users, Shield } from 'lucide-react';

const authFeatures = [
  {
    icon: Mail,
    title: 'Email & Password Login',
    description: 'Users can sign up and log in using their email address and a secure password'
  },
  {
    icon: Lock,
    title: 'JWT Token Authentication',
    description: 'Secure authentication using JSON Web Tokens for session management'
  },
  {
    icon: Users,
    title: 'User Role Management',
    description: 'Three distinct user roles: Normal User, Business Owner, and Administrator'
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'End-to-end encryption and privacy protection for all user data'
  }
];

function Authentication() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Authentication Approach
        </h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Our authentication system is designed with security and user experience as top priorities. 
            We implement industry-standard practices to ensure user data protection while providing 
            a seamless login experience across all devices and platforms.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Core Authentication Strategy</h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• <strong>Primary Method:</strong> Email and password authentication</li>
              <li>• <strong>Session Management:</strong> JWT (JSON Web Tokens) for secure sessions</li>
              <li>• <strong>Role-Based Access:</strong> Three user types with different permissions</li>
              <li>• <strong>Security:</strong> Password hashing, secure token storage, and session expiration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Authentication Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">User Roles</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-gray-900">Normal User</h4>
              <p className="text-gray-600 text-sm">Can browse businesses, book appointments, and communicate with service providers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-gray-900">Business Owner</h4>
              <p className="text-gray-600 text-sm">Can create business profiles, manage appointments, sell products, and access analytics</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <h4 className="font-medium text-gray-900">Administrator</h4>
              <p className="text-gray-600 text-sm">Full system access, user management, platform configuration, and moderation tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;