
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToAddAddress = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToAddAddress')}>
      <div className="space-y-4">
        <p>Adding addresses is essential for delivery operations. Follow these steps to add a new address:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Click on "ДОБАВИТЬ АДРЕСА" in the main navigation bar</li>
          <li>In the address management screen, click "Add New Address"</li>
          <li>Enter the address details:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Building Number and Street Name</li>
              <li>Apartment/Suite/Unit (if applicable)</li>
              <li>Select City (from previously added cities)</li>
              <li>Select District (from previously added districts)</li>
              <li>Postal/ZIP Code</li>
              <li>Additional Instructions (entry codes, landmarks, etc.)</li>
            </ul>
          </li>
          <li>Verify the address on the map:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The system will automatically geocode the address</li>
              <li>Adjust the pin location manually if needed</li>
              <li>Confirm the location is accurate</li>
            </ul>
          </li>
          <li>Assign the address (optional):
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Associate with a customer</li>
              <li>Associate with a merchant</li>
              <li>Mark as warehouse/distribution point</li>
            </ul>
          </li>
          <li>Set address status (Active/Inactive)</li>
          <li>Click "Save" to add the address to the system</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Bulk Import:</p>
          <p>Need to add multiple addresses? Use the "Bulk Import" feature with a CSV file containing all address details in the specified format.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddAddress;
