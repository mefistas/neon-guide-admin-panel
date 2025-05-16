
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const CardsPayments = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('cardsPayments')}>
      <div className="space-y-4">
        <p>Setting up card payments in your admin panel requires integration with payment processors:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to "PURCHASES" section in the main navigation</li>
          <li>Select "Payment Methods" option</li>
          <li>Click on "Add Payment Method" and select "Credit/Debit Cards"</li>
          <li>Select a payment processor to integrate with:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Stripe</li>
              <li>PayPal</li>
              <li>Square</li>
              <li>Authorize.net</li>
              <li>Other payment gateways</li>
            </ul>
          </li>
          <li>Enter the API credentials for the selected processor:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>API Key/Public Key</li>
              <li>Secret Key</li>
              <li>Merchant ID</li>
              <li>Webhook URL (system will generate this)</li>
            </ul>
          </li>
          <li>Configure payment settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Supported card types (Visa, Mastercard, Amex, etc.)</li>
              <li>Default currency</li>
              <li>Transaction types (one-time, subscription, etc.)</li>
              <li>3D Secure settings</li>
            </ul>
          </li>
          <li>Set up transaction fee structure:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Percentage fee</li>
              <li>Fixed fee</li>
              <li>Who absorbs the fees (merchant or customer)</li>
            </ul>
          </li>
          <li>Configure security settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fraud detection rules</li>
              <li>Card verification requirements</li>
              <li>Transaction limits</li>
            </ul>
          </li>
          <li>Set up notification preferences:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Transaction success notifications</li>
              <li>Failed transaction alerts</li>
              <li>Chargeback notifications</li>
            </ul>
          </li>
          <li>Test the payment processing using sandbox mode</li>
          <li>Activate the payment method when ready</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Security Note:</p>
          <p>Never store complete card details in your system. Always use tokenization provided by your payment processor to comply with PCI DSS requirements.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CardsPayments;
