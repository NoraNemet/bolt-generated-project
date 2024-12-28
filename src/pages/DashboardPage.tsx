import React from 'react';
import { ProspectingCard } from '../components/dashboard/ProspectingCard';
import { ContactInfoCard } from '../components/dashboard/ContactInfoCard';
import { OutreachCard } from '../components/dashboard/OutreachCard';

export function DashboardPage() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Prospect & Personalize Outreach</h1>
          <p className="text-xl text-gray-600 mb-2">
            Prospect & Personalize Outreach to tailor prospecting efforts at scale
          </p>
          <p className="text-gray-500">
            Find and engage leads with personalized outreach, leveraging the latest in GPT, Google, and LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProspectingCard
            title="Personalized Prospecting"
            description="Say goodbye to generic outreach. Our platform utilizes cutting-edge AI to automate prospecting, ensuring each interaction is tailored."
            tags={[
              { name: '@samuel' },
              { name: '@jim' },
              { name: '@alex' },
              { name: '@kellyhands', active: true },
              { name: '@mehmetozsoy' },
            ]}
          />
          
          <ContactInfoCard />
          
          <OutreachCard />
        </div>
      </div>
    </div>
  );
}
