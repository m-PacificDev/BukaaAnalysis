import React from 'react';
import { Rocket, MessageCircle, ShoppingBag, Search } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: 'Phase 1 (MVP)',
    description: 'High-profile pages (portfolio + appointments)',
    icon: Rocket,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Phase 2',
    description: 'Add chat + negotiation',
    icon: MessageCircle,
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: 'Phase 3',
    description: 'Add product selling (mini e-commerce)',
    icon: ShoppingBag,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Phase 4',
    description: 'Add discovery/search marketplace (categories, trending businesses)',
    icon: Search,
    color: 'bg-orange-500'
  }
];

function Overview() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bukaa.app System Overview
        </h1>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <p className="text-gray-700 leading-relaxed">
    <strong>Bukaa.app</strong> is an all-in-one digital business platform built to help 
    individuals and companies create a strong online presence 🌍. Each business or 
    professional gets a personalized profile page 
    (<code>bukaa.app/business-name</code>) that works like a mini-website ⚡ — combining 
    portfolio, appointment booking, chat, and even product sales in one seamless experience.  
  </p>

  <p className="text-gray-700 leading-relaxed mt-4">
    For customers 👥, Bukaa makes it easy to:  
    <br />📅 Book appointments instantly  
    <br />💬 Chat with businesses for inquiries or negotiations  
    <br />🛍️ Browse and purchase listed products or services  
    <br />⭐ View past work, reviews, and build trust before booking  
  </p>

  <p className="text-gray-700 leading-relaxed mt-4">
    For businesses 🏢, Bukaa is more than just a booking tool:  
    <br />✨ Showcase services and portfolios professionally  
    <br />⏱️ Manage bookings and payments in one place  
    <br />📦 Sell products directly without a separate online store  
    <br />📈 Gain visibility and new customers as part of the wider Bukaa ecosystem  
  </p>

  <p className="text-gray-700 leading-relaxed mt-4">
    By combining simplicity, accessibility, and scalability, Bukaa.app empowers both 
    small and large businesses to grow faster 🚀, while giving customers a trusted, 
    modern way to discover and connect with services they need.  
  </p>
</div>

      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Phases of Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={phase.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`${phase.color} p-3 rounded-lg mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Overview;