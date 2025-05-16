
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';

const HowToAddBots = () => {
  const { t } = useLanguage();

  return (
    <TutorialPage title={t('howToAddBots')}>
      <div className="space-y-4">
        <p>Messaging bots can automate customer interactions. Here's how to set up a new bot:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Navigate to the "БОТЫ/КАНАЛЫ" section in the main navigation</li>
          <li>Click on "Add New Bot"</li>
          <li>Select the bot platform:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Telegram</li>
              <li>WhatsApp</li>
              <li>Facebook Messenger</li>
              <li>Custom API</li>
            </ul>
          </li>
          <li>Configure bot credentials:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Bot Name</li>
              <li>API Token/Key</li>
              <li>Bot Username (if applicable)</li>
              <li>Webhook URL (system will generate this)</li>
            </ul>
          </li>
          <li>Configure bot behavior:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Welcome Message</li>
              <li>Menu Structure</li>
              <li>Response Templates</li>
              <li>Error Messages</li>
            </ul>
          </li>
          <li>Set up integrations:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Connect to product catalog</li>
              <li>Connect to order system</li>
              <li>Set up payment methods</li>
            </ul>
          </li>
          <li>Create conversation flows:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Define chat scenarios</li>
              <li>Set up automated responses</li>
              <li>Configure when to transfer to human support</li>
            </ul>
          </li>
          <li>Test the bot in sandbox mode</li>
          <li>Activate the bot when ready</li>
        </ol>
        <div className="p-4 bg-neonBlue/10 rounded-md mt-4 border border-neonBlue">
          <p className="font-semibold">Monitoring Note:</p>
          <p>After activating a bot, monitor its performance in the "Bot Analytics" section to track user engagement, common queries, and success rates.</p>
        </div>
      </div>
    </TutorialPage>
  );
};

export default HowToAddBots;
