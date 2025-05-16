
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToAddDistrict = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToAddDistrict')}>
      <div className="space-y-4">
        <p>To add a new district to a city in the admin panel, follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "MAIN" section in the top navigation bar</li>
          <li>Click on "MERCHANTS" dropdown menu</li>
          <li>Select "Districts" from the dropdown options</li>
          <li>Click the "Add New District" button in the top right corner</li>
          <li>Fill in the required fields:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>District Name</li>
              <li>Select the City (this district belongs to)</li>
              <li>Set boundaries (optional)</li>
              <li>Status (Active/Inactive)</li>
            </ul>
          </li>
          <li>Click "Save" to add the new district to the system</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Pro Tip:</p>
          <p>You can import district boundaries from a GeoJSON file by clicking the "Import Boundaries" button on the district creation form.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddDistrict;
