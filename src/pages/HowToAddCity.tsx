
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToAddCity = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToAddCity')}>
      <div className="space-y-4">
        <p>To add a new city to the admin panel, follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "MAIN" section in the top navigation bar</li>
          <li>Click on "MERCHANTS" dropdown menu</li>
          <li>Select "Cities" from the dropdown options</li>
          <li>Click the "Add New City" button in the top right corner</li>
          <li>Fill in the required fields:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>City Name</li>
              <li>Region/State</li>
              <li>Country</li>
              <li>Status (Active/Inactive)</li>
            </ul>
          </li>
          <li>Click "Save" to add the new city to the system</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Important Note:</p>
          <p>Make sure that each city has a unique name within the same region to avoid conflicts in the system.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCity;
