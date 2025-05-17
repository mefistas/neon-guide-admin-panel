
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import useTranslations from '@/hooks/useTranslations';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Bot, ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import BackButton from '@/components/BackButton';

const CustomBot = () => {
  const { tNew } = useTranslations();

  // Images for our page
  const images = [
    {
      src: "https://i.ibb.co/6RsXsmVw/Screenshot-2025-05-17-at-8-08-55-PM.png",
      alt: "Bot menu customization example"
    },
    {
      src: "https://i.ibb.co/zq3mr6X/Screenshot-2025-05-17-at-8-12-22-PM.png",
      alt: "Bot support settings example"
    },
    {
      src: "https://i.ibb.co/FLBsT1B4/white-Screenshot-2025-05-17-at-8-16-19-PM.png",
      alt: "Bot language customization"
    }
  ];

  return (
    <TutorialPage title={tNew('customBotPageTitle')}>
      <div className="flex items-center justify-between mb-4">
        <BackButton to="/" />
      </div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4">{tNew('customBotIntro')}</h2>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">{tNew('customBotTypes')}</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <Bot size={20} className="flex-shrink-0 text-neonBlue" />
              {tNew('customBotType1')}
            </li>
            <li className="flex items-center gap-2">
              <Bot size={20} className="flex-shrink-0 text-neonBlue" />
              {tNew('customBotType2')}
            </li>
          </ul>
        </section>

        {/* Section 1: Customization of appearance */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('customBotAppearance')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('gotoStores')}</p>
            <p>{tNew('clickStoreName')}</p>
            <p>{tNew('twoMainMenus')}</p>
            
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-800 p-4 text-left font-medium">
                <span>{tNew('addNewLanguage')}</span>
                <ChevronDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-2 text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  <li>{tNew('deleteMenuItems')}</li>
                  <li>{tNew('sortingNote')}</li>
                  <li>{tNew('addTwoItems')}</li>
                  <li>{tNew('chooseLanguage')}</li>
                  <li>{tNew('writeButton')}</li>
                  <li>{tNew('externalSite')}</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            
            <div className="bg-neonBlue/10 border border-neonBlue/30 rounded-md p-4">
              <p className="font-medium text-neonBlue">{tNew('tip')}:</p>
              <p>{tNew('saveAndContinue')}</p>
            </div>
            
            <p>{tNew('activateCasino')}</p>
            
            <p className="font-medium">{tNew('exampleSettings')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-gray-700">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-4">
                <p className="font-medium text-yellow-500">{tNew('important')}:</p>
                <p>{tNew('supportItem')}</p>
              </div>
              
              <ul className="space-y-3 pl-5">
                <li className={cn("flex gap-2")}>
                  <span className="text-neonBlue">•</span>
                  <span>{tNew('citySelection')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-neonBlue">•</span>
                  <span>{tNew('personalBots')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-neonBlue">•</span>
                  <span>{tNew('preorderButton')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-neonBlue">•</span>
                  <span>{tNew('bonusButton')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Bot Customization Section */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('customizationSection')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('buttonOptions')}</p>
            
            <ul className="space-y-3 pl-5">
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('oneColumnMenu')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('supportLink')}</span>
              </li>
            </ul>
            
            <div className="rounded-lg overflow-hidden border border-gray-700 mt-4">
              <img 
                src={images[1].src}
                alt="Support operator settings"
                className="w-full h-48 object-cover" 
              />
            </div>
            
            <p>{tNew('editButtons')}</p>
            
            <div className="rounded-lg overflow-hidden border border-gray-700 mt-4">
              <img 
                src={images[2].src}
                alt="Edit buttons example"
                className="w-full h-48 object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Section 3: Message Customization */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-6 border-l-4 border-neonBlue pl-3">
            {tNew('messageCustomization')}
          </h3>
          
          <div className="space-y-4">
            <p>{tNew('messageBotSection')}</p>
            <p>{tNew('allMessagesHere')}</p>
            
            <div className="bg-gray-800 rounded-md p-4 font-mono text-sm whitespace-pre-wrap">
              {tNew('htmlGuide')}
            </div>
            
            <h4 className="text-lg font-medium mt-6">{tNew('settingsRecommendations')}</h4>
            
            <ul className="space-y-3 pl-5">
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('searchTip')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('addVariant')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('notVisibleMessage')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('messageCount')}</span>
              </li>
            </ul>
            
            <div className="flex items-center gap-2 mt-4 bg-gray-800/60 p-3 rounded-md">
              <p>{tNew('translationTip')}</p>
              <a 
                href="https://chat.deepseek.com/sign_in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neonBlue hover:text-neonBlue/80 inline-flex items-center gap-1"
              >
                <span>DeepSeek Chat</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </TutorialPage>
  );
};

export default CustomBot;
