
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToCreateProductTypes = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToCreateProductTypes')}>
      <div className="space-y-4">
        <p>Product types define the attributes and behavior of products. Here's how to create them:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "СКЛАД" (Inventory) section in the main navigation</li>
          <li>Select "Product Types" from the submenu</li>
          <li>Click the "Create New Product Type" button</li>
          <li>Enter the basic information:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Type Name (e.g., Digital, Physical, Service)</li>
              <li>Type Description</li>
            </ul>
          </li>
          <li>Configure the attributes for this product type:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Add custom fields (size, color, weight, etc.)</li>
              <li>Specify which fields are required</li>
              <li>Set field validation rules</li>
            </ul>
          </li>
          <li>Configure inventory tracking settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Track inventory (yes/no)</li>
              <li>Allow backorders (yes/no)</li>
              <li>Low stock threshold</li>
            </ul>
          </li>
          <li>Set shipping and tax properties:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Requires shipping (yes/no)</li>
              <li>Tax category</li>
            </ul>
          </li>
          <li>Click "Save" to create the product type</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Advanced Tip:</p>
          <p>Product types can inherit attributes from other types. Use this feature to create specialized subtypes without duplicating configuration work.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToCreateProductTypes;
