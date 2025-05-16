
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToCreateProductGroup = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToCreateProductGroup')}>
      <div className="space-y-4">
        <p>Product groups help you organize your catalog efficiently. Here's how to create a new product group:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "СКЛАД" (Inventory) section in the main navigation</li>
          <li>Select "Product Groups" from the submenu</li>
          <li>Click on the "Create New Group" button</li>
          <li>Fill in the group details:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Group Name (will be visible to customers)</li>
              <li>Group Description</li>
              <li>Select Parent Group (if it's a subgroup)</li>
              <li>Upload Group Image (optional)</li>
              <li>Set Group Priority (for display order)</li>
            </ul>
          </li>
          <li>Configure visibility settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Visible in store (yes/no)</li>
              <li>Visible in app (yes/no)</li>
              <li>Visible in website (yes/no)</li>
            </ul>
          </li>
          <li>Click "Save" to create the product group</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Organization Tip:</p>
          <p>Create a logical hierarchical structure for your product groups. This helps both in inventory management and improves customer navigation experience.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToCreateProductGroup;
