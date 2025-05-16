
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToAddCourier = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToAddCourier')}>
      <div className="space-y-4">
        <p>Adding a new courier to the system is essential for delivery operations. Follow these steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "STAFF" section in the main navigation bar</li>
          <li>Click on the "Couriers" tab</li>
          <li>Click the "Add New Courier" button</li>
          <li>Fill in the required courier information:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full Name</li>
              <li>Contact Number</li>
              <li>Email Address</li>
              <li>Assigned City/District</li>
              <li>Working Hours</li>
              <li>Transportation Type</li>
              <li>Upload ID Document (passport/driver's license)</li>
            </ul>
          </li>
          <li>Set courier status (Active/Inactive)</li>
          <li>Generate login credentials for the courier app</li>
          <li>Click "Save" to add the new courier</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Important Security Note:</p>
          <p>Always verify the identity documents of each courier before activating their account. All document uploads are encrypted and stored securely.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddCourier;
