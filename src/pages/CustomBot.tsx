
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CustomBot = () => {
  const { tNew } = useTranslations();

  // Images for our carousel
  const carouselImages = [
    {
      src: "https://i.ibb.co/6RsXsmVw/Screenshot-2025-05-17-at-8-08-55-PM.png",
      alt: "tutbila"
    },
    {
      src: "https://i.ibb.co/jk2cf6z8/Screenshot-2025-05-17-at-3-26-35-PM.png",
      alt: " FOX"
    },
    {
      src: "https://i.ibb.co/4R4t9sh2/Screenshot-2025-05-17-at-8-15-13-PM.png",
      alt: "iexisted"
    }
  ];
  
  // New images for the separate sections
  const supportSectionImage = {
    src: "https://i.ibb.co/0Vd5kWRL/Screenshot-2025-05-17-at-8-41-43-PM.png",
    alt: "Bot support operator interface"
  };
  
  const messagesSectionImage = {
    src: "https://i.ibb.co/dsWkKv5k/Screenshot-2025-05-17-at-3-57-11-PM.png",
    alt: "Bot message customization interface"
  };

  return (
    <TutorialPage title={tNew('customBotPageTitle')}>
      <div className="flex items-center justify-between mb-4">
        <BackButton to="/" />
      </div>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-3">{tNew('customBotIntro')}</h2>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-3">{tNew('customBotTypes')}</h3>
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
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('customBotAppearance')}
          </h3>
          
          <div className="space-y-3">
            <p>{tNew('gotoStores')}</p>
            <p>{tNew('clickStoreName')}</p>
            <p className="mb-2">{tNew('twoMainMenus')}</p>
            
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
            
            <div className="bg-neonBlue/10 border border-neonBlue/30 rounded-md p-4 mb-2">
              <p className="font-medium text-neonBlue">{tNew('tip')}:</p>
              <p>{tNew('saveAndContinue')}</p>
            </div>
            
            <p>{tNew('activateCasino')}</p>
            <p className="font-medium">{tNew('exampleSettings')}</p>
            
            {/* Updated Carousel with larger images */}
            <div className="relative py-4">
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="p-1">
                        <div className="rounded-lg overflow-hidden border border-gray-700">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-80 object-contain bg-gray-800/60" 
                          />
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-2">{image.alt}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
            
            <div className="space-y-3 mt-4">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-4">
                <p className="font-medium text-yellow-500">{tNew('important')}:</p>
                <p>{tNew('supportItem')}</p>
              </div>
              
              <ul className="space-y-2 pl-5">
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
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('customizationSection')}
          </h3>
          
          <div className="space-y-3">
            <p>{tNew('buttonOptions')}</p>
            
            <ul className="space-y-2 pl-5">
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('oneColumnMenu')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-neonBlue">•</span>
                <span>{tNew('supportLink')}</span>
              </li>
            </ul>
            
            <div className="rounded-lg overflow-hidden border border-gray-700 mt-3">
              <img 
                src={supportSectionImage.src}
                alt={supportSectionImage.alt}
                className="w-full h-56 object-cover" 
              />
            </div>
            
            <p>{tNew('editButtons')}</p>
            
            <div className="rounded-lg overflow-hidden border border-gray-700 mt-3">
              <img 
                src={messagesSectionImage.src}
                alt={messagesSectionImage.alt}
                className="w-full h-56 object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Section 3: Message Customization */}
        <section className="bg-gray-900/40 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-neonBlue pl-3">
            {tNew('messageCustomization')}
          </h3>
          
          <div className="space-y-3">
            <p>{tNew('messageBotSection')}</p>
            <p>{tNew('allMessagesHere')}</p>
            
            <div className="bg-gray-800 rounded-md p-4 font-mono text-sm whitespace-pre-wrap">
              {tNew('htmlGuide')}
            </div>
            
            <h4 className="text-lg font-medium mt-4">{tNew('settingsRecommendations')}</h4>
            
            <ul className="space-y-2 pl-5">
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
            
            <div className="flex items-center gap-2 mt-3 bg-gray-800/60 p-3 rounded-md">
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
