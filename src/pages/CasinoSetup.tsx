
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const CasinoSetup = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('casinoSetup')}>
      <div className="space-y-4">
        <p>Setting up the casino features in your admin panel involves several steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to "MARKETING" section in the main navigation</li>
          <li>Select "Casino Setup" from the dropdown</li>
          <li>Configure basic casino settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Casino Name</li>
              <li>Logo and Theme</li>
              <li>Default Currency</li>
              <li>Operating Hours</li>
            </ul>
          </li>
          <li>Set up game providers:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Connect API keys for game providers</li>
              <li>Select game categories to feature</li>
              <li>Configure game limits and odds</li>
            </ul>
          </li>
          <li>Configure player accounts:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Registration requirements</li>
              <li>Verification procedures</li>
              <li>Account limits</li>
            </ul>
          </li>
          <li>Set up payment methods:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Deposit options</li>
              <li>Withdrawal procedures</li>
              <li>Minimum and maximum amounts</li>
            </ul>
          </li>
          <li>Configure responsible gambling tools:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Self-exclusion options</li>
              <li>Deposit limits</li>
              <li>Reality checks</li>
            </ul>
          </li>
          <li>Set up promotions and bonuses:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Welcome bonuses</li>
              <li>Loyalty program</li>
              <li>Special promotions</li>
            </ul>
          </li>
          <li>Configure compliance and regulatory settings:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Geolocation restrictions</li>
              <li>Age verification</li>
              <li>Anti-money laundering procedures</li>
            </ul>
          </li>
          <li>Test the casino functionality in sandbox environment</li>
          <li>Launch the casino when ready</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Important Regulatory Note:</p>
          <p>Make sure to comply with all gambling regulations in your operating jurisdictions. Different regions have different requirements for operating online casinos.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default CasinoSetup;
