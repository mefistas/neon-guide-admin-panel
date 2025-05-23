
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
      alt: "add new menu"
    },
    {
      src: "https://i.ibb.co/jk2cf6z8/Screenshot-2025-05-17-at-3-26-35-PM.png",
      alt: "customize"
    },
    {
      src: "https://i.ibb.co/4R4t9sh2/Screenshot-2025-05-17-at-8-15-13-PM.png",
      alt: "bam"
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
          <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{tNew('customBotIntro')}</h2>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">{tNew('customBotTypes')}</h3>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <Bot size={20} className="flex-shrink-0 text-blue-600 dark:text-neonBlue" />
              <span className="text-gray-700 dark:text-gray-200">{tNew('customBotType1')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Bot size={20} className="flex-shrink-0 text-blue-600 dark:text-neonBlue" />
              <span className="text-gray-700 dark:text-gray-200">{tNew('customBotType2')}</span>
            </li>
          </ul>
        </section>

        {/* Section 1: Customization of appearance */}
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('customBotAppearance')}
          </h3>
          
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-200">{tNew('gotoStores')}</p>
            <p className="text-gray-700 dark:text-gray-200">{tNew('clickStoreName')}</p>
            <p className="mb-2 text-gray-700 dark:text-gray-200">{tNew('twoMainMenus')}</p>
            
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-blue-100 dark:bg-gray-800 p-4 text-left font-medium text-gray-800 dark:text-white">
                <span>{tNew('addNewLanguage')}</span>
                <ChevronDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-2 text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">{tNew('deleteMenuItems')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{tNew('sortingNote')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{tNew('addTwoItems')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{tNew('chooseLanguage')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{tNew('writeButton')}</li>
                  <li className="text-gray-700 dark:text-gray-300">{tNew('externalSite')}</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            
            <div className="bg-blue-50 dark:bg-neonBlue/10 border border-blue-200 dark:border-neonBlue/30 rounded-md p-4 mb-2">
              <p className="font-medium text-blue-700 dark:text-neonBlue">{tNew('tip')}:</p>
              <p className="text-gray-700 dark:text-gray-300">{tNew('saveAndContinue')}</p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-200">{tNew('activateCasino')}</p>
            <p className="font-medium text-gray-800 dark:text-white">{tNew('exampleSettings')}</p>
            
            {/* Updated Carousel with larger images */}
            <div className="relative py-4">
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="p-1">
                        <div className="rounded-lg overflow-hidden border border-blue-200 dark:border-gray-700">
                          <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-80 object-contain bg-blue-50 dark:bg-gray-800/60" 
                          />
                        </div>
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">{image.alt}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
            
            <div className="space-y-3 mt-4">
              <div className="bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/30 rounded-md p-4">
                <p className="font-medium text-yellow-700 dark:text-yellow-500">{tNew('important')}:</p>
                <p className="text-gray-700 dark:text-gray-300">{tNew('supportItem')}</p>
              </div>
              
              <ul className="space-y-2 pl-5">
                <li className={cn("flex gap-2")}>
                  <span className="text-blue-600 dark:text-neonBlue">•</span>
                  <span className="text-gray-700 dark:text-gray-200">{tNew('citySelection')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-blue-600 dark:text-neonBlue">•</span>
                  <span className="text-gray-700 dark:text-gray-200">{tNew('personalBots')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-blue-600 dark:text-neonBlue">•</span>
                  <span className="text-gray-700 dark:text-gray-200">{tNew('preorderButton')}</span>
                </li>
                <li className={cn("flex gap-2")}>
                  <span className="text-blue-600 dark:text-neonBlue">•</span>
                  <span className="text-gray-700 dark:text-gray-200">{tNew('bonusButton')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Bot Customization Section */}
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('customizationSection')}
          </h3>
          
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-200">{tNew('buttonOptions')}</p>
            
            <ul className="space-y-2 pl-5">
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('oneColumnMenu')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('supportLink')}</span>
              </li>
            </ul>
            
            <div className="rounded-lg overflow-hidden border border-blue-200 dark:border-gray-700 mt-3">
              <img 
                src={supportSectionImage.src}
                alt={supportSectionImage.alt}
                className="w-full h-56 object-cover" 
              />
            </div>
            
            <p className="text-gray-700 dark:text-gray-200">{tNew('editButtons')}</p>
            
            <div className="rounded-lg overflow-hidden border border-blue-200 dark:border-gray-700 mt-3">
              <img 
                src={messagesSectionImage.src}
                alt={messagesSectionImage.alt}
                className="w-full h-56 object-cover" 
              />
            </div>
          </div>
        </section>

        {/* Section 3: Message Customization */}
        <section className="bg-white/90 dark:bg-gray-900/40 rounded-lg p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="text-xl font-medium mb-4 border-l-4 border-blue-500 dark:border-neonBlue pl-3 text-gray-800 dark:text-white">
            {tNew('messageCustomization')}
          </h3>
          
          <div className="space-y-3">
            <p className="text-gray-700 dark:text-gray-200">{tNew('messageBotSection')}</p>
            <p className="text-gray-700 dark:text-gray-200">{tNew('allMessagesHere')}</p>
            
            <div className="bg-blue-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
              {tNew('htmlGuide')}
            </div>
            
            <h4 className="text-lg font-medium mt-4 text-gray-800 dark:text-white">{tNew('settingsRecommendations')}</h4>
            
            <ul className="space-y-2 pl-5">
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('searchTip')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('addVariant')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('notVisibleMessage')}</span>
              </li>
              <li className={cn("flex gap-2")}>
                <span className="text-blue-600 dark:text-neonBlue">•</span>
                <span className="text-gray-700 dark:text-gray-200">{tNew('messageCount')}</span>
              </li>
            </ul>
            
            <div className="flex items-center gap-2 mt-3 bg-blue-50 dark:bg-gray-800/60 p-3 rounded-md">
              <p className="text-gray-700 dark:text-gray-300">{tNew('translationTip')}</p>
              <a 
                href="https://chat.deepseek.com/sign_in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-neonBlue hover:text-blue-800 dark:hover:text-neonBlue/80 inline-flex items-center gap-1"
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
