
import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import BackButton from '@/components/BackButton';

const QuickStart = () => {
  const { t, language } = useLanguage();
  const [expandedPoints, setExpandedPoints] = React.useState<number[]>([1]);
  
  const toggleExpand = (index: number) => {
    setExpandedPoints(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Function to render text with line breaks - improved version
  const renderTextWithLineBreaks = (text: string) => {
    if (!text) return null;
    
    // Handle both \n and \\n patterns
    const lines = text.split(/\\n|\n/);
    
    return lines.map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  // Quick start section data
  const quickStartSections = [
    {
      id: 1,
      title: 'quickStartPoint1',
      notes: ['quickStartPoint1Note1', 'quickStartPoint1Note2', 'quickStartPoint1Note3', 'quickStartPoint1Note4', 'quickStartPoint1Note5']
    },
    {
      id: 2,
      title: 'quickStartPoint2',
      notes: ['quickStartPoint2Note1', 'quickStartPoint2Note2', 'quickStartPoint2Note3', 'quickStartPoint2Note4', 'quickStartPoint2Note5', 'quickStartPoint2Note6', 'quickStartPoint2Note7']
    },
    {
      id: 3,
      title: 'quickStartPoint3',
      notes: ['quickStartPoint3Note1', 'quickStartPoint3Note2', 'quickStartPoint3Note3', 'quickStartPoint3Note4', 'quickStartPoint3Note5', 'quickStartPoint3Note6', 'quickStartPoint3Note7', 'quickStartPoint3Note8']
    },
    {
      id: 4,
      title: 'quickStartPoint4',
      notes: ['quickStartPoint4Note1', 'quickStartPoint4Note2', 'quickStartPoint4Note3', 'quickStartPoint4Note4', 'quickStartPoint4Note5', 'quickStartPoint4Note6', 'quickStartPoint4Note7', 'quickStartPoint4Note8']
    },
    {
      id: 5,
      title: 'quickStartPoint5',
      notes: ['quickStartPoint5Note1', 'quickStartPoint5Note2', 'quickStartPoint5Note3', 'quickStartPoint5Note4', 'quickStartPoint5Note5', 'quickStartPoint5Note6', 'quickStartPoint5Note7']
    },
    {
      id: 6,
      title: 'quickStartPoint6',
      notes: ['quickStartPoint6Note1', 'quickStartPoint6Note2', 'quickStartPoint6Note3', 'quickStartPoint6Note4', 'quickStartPoint6Note5', 'quickStartPoint6Note6', 'quickStartPoint6Note7', 'quickStartPoint6Note8']
    },
    {
      id: 7,
      title: 'quickStartPoint7',
      notes: ['quickStartPoint7Note1', 'quickStartPoint7Note2', 'quickStartPoint7Note3', 'quickStartPoint7Note4', 'quickStartPoint7Note5', 'quickStartPoint7Note6', 'quickStartPoint7Note7']
    },
    {
      id: 8,
      title: 'quickStartPoint8',
      notes: ['quickStartPoint8Note1', 'quickStartPoint8Note2', 'quickStartPoint8Note3', 'quickStartPoint8Note4', 'quickStartPoint8Note5', 'quickStartPoint8Note6', 'quickStartPoint8Note7', 'quickStartPoint8Note8']
    },
    {
      id: 9,
      title: 'quickStartPoint9',
      customContent: (
        <div className="mt-4">
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            {/* Bilingual section */}
            {language === 'ru' ? (
              <>
                <p>- Идем в раздел ДОБАВИТЬ АДРЕСА</p>
                <p>- Тут мы видим уже списки районов которые есть, воспользуйтесь поисковом если их много, находим нужный район для загрузки адресов и нажимаем ДОБАВИТЬ АДРЕСА</p>
                <p>- Выбираем нужного курьера, для этого мы его и добавляли ранее</p>
                <p>- Выбираем нужный МК если проставляли, если нет оставляем как есть</p>
                <p>- Выбираем тип продукта (название и грамовка) например у нас 5 кладов продукта по1гр на данном районе</p>
                <p>- Игнорируем пункт изображения на данный момент, в последствии вы сможете ознакомиться с их функцией в разделе АДРЕСА</p>
                <p>- Идем сразу в окно text и вот тут начинается магия большой загрузки !представьте если у вас 100 одинаковых адресов на данном районе, будет просто ужасно грузить каждый клад отдельно, вместо этого загрузите все свои фотографии кладов на какой нибудь хост по типу https://imgbb.com напишите к ним описание и используйте двойной пробел между строками что бы панель поняла что вы выгружаете не один адрес, а много</p>
              </>
            ) : (
              <>
                <p>- Go to the ADD ADDRESSES section</p>
                <p>- Here we see lists of districts that exist. Use the search if there are many. Find the right district to upload addresses and click ADD ADDRESSES</p>
                <p>- Be sure to select the courier you need - this is why we added one</p>
                <p>- Select the MK if you set them up, if not leave as is</p>
                <p>- Select the product type (name and gram size), for example if we have 5 stashes of meph singles in this district</p>
                <p>- Ignore the images section, that's for advanced users</p>
                <p>- Go straight to the text section, and here's where the bulk upload magic happens. Imagine if you have 100 singles in this district, it would be terrible to load each stash separately. Instead, upload all your stash photos to a host like https://imgbb.com, write descriptions for them and use double spaces between lines so the panel understands you're not loading one address but many</p>
              </>
            )}
          </div>
          
          <div className="mt-4 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 dark:bg-[#1A1F2C]">
              <h3 className="font-medium text-gray-800 dark:text-white">{language === 'ru' ? 'Пример:' : 'Example:'}</h3>
            </div>
            <div className="bg-white p-4 dark:bg-[#111827]">
              <div className="border border-blue-100 rounded bg-blue-50/50 p-3 font-mono text-sm dark:border-[#7E69AB]/30 dark:bg-[#0C111D]">
                <div>
                  <span className="text-blue-700 dark:text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">{language === 'ru' ? 'в указанной точке по кордам' : 'at the specified point by coordinates'}</span>
                </div>
                <div className="my-4 border-t border-b border-dashed border-gray-300 dark:border-gray-700 py-1 text-center text-xs text-gray-500">
                  {language === 'ru' ? '[пустая строка]' : '[empty line]'}
                  <br />
                  {language === 'ru' ? '[пустая строка]' : '[empty line]'}
                </div>
                <div>
                  <span className="text-blue-700 dark:text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">{language === 'ru' ? 'в указанной точке по кордам' : 'at the specified point by coordinates'}</span>
                </div>
                <div className="my-4 border-t border-b border-dashed border-gray-300 dark:border-gray-700 py-1 text-center text-xs text-gray-500">
                  {language === 'ru' ? '[пустая строка]' : '[empty line]'}
                  <br />
                  {language === 'ru' ? '[пустая строка]' : '[empty line]'}
                </div>
                <div>
                  <span className="text-blue-700 dark:text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">{language === 'ru' ? 'в указанной точке по кордам' : 'at the specified point by coordinates'}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-200">
            {language === 'ru' ? (
              <>
                <p>Итого теперь бот видит что вы загрузили три адреса для данного района</p>
                <p>Нажимаем сохранить если на этом районе больше нет других грамовок</p>
                <p>Либо нажимаем сохранить и добавить еще если в этом районе есть еще какие то другие адреса</p>
                <p>Осталось совсем немного!</p>
              </>
            ) : (
              <>
                <p>Now the bot sees that you've uploaded three addresses for this district</p>
                <p>Click save if there are no other gram sizes in this district</p>
                <p>Or click save and add more if there are other addresses in this district</p>
                <p>Congratulations, you're excellent! Let's take a look at the payment options!</p>
              </>
            )}
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: 'quickStartPoint10',
      notes: ['quickStartPoint10Note1', 'quickStartPoint10Note2', 'quickStartPoint10Note3', 'quickStartPoint10Note4', 'quickStartPoint10Note5', 'quickStartPoint10Note6', 'quickStartPoint10Note7', 'quickStartPoint10Note8']
    },
    {
      id: 11,
      title: 'quickStartPoint11',
      notes: ['quickStartPoint11Note1', 'quickStartPoint11Note2', 'quickStartPoint11Note3', 'quickStartPoint11Note4']
    }
  ];

  return (
    <TutorialPage title={t('quickStart')}>
      <div className="flex items-center justify-between mb-4">
        <BackButton to="/" />
      </div>
      
      <div className="space-y-8">
        <div className="text-lg text-gray-700 dark:text-gray-200">
          {renderTextWithLineBreaks(t('quickStartDescription'))}
        </div>

        <div className="space-y-4">
          {quickStartSections.map(section => {
            const isExpanded = expandedPoints.includes(section.id);
            return (
              <Collapsible 
                key={section.id} 
                open={isExpanded} 
                onOpenChange={() => toggleExpand(section.id)} 
                className={`backdrop-blur-sm transition-all duration-300 overflow-hidden rounded-lg ${
                  isExpanded 
                    ? 'bg-blue-50/90 dark:bg-[#1A1F2C]' 
                    : 'bg-white/90 hover:bg-blue-50/80 dark:bg-[#111827] dark:hover:bg-[#1A1F2C]/80'
                }`}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-medium dark:bg-[#7E69AB]/40 dark:text-white">
                      {section.id}
                    </div>
                    <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                      {renderTextWithLineBreaks(t(section.title))}
                    </h2>
                  </div>
                  <div className="text-blue-700 dark:text-[#D6BCFA]">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="overflow-hidden">
                  <div className="pl-12 pr-6 pb-6 space-y-4">
                    {section.customContent ? section.customContent : section.notes?.map((noteKey, index) => {
                      const noteText = t(noteKey);
                      console.log(`Note ${noteKey}:`, noteText); // Debug log
                      if (!noteText) return null;
                      return (
                        <div key={index} className="relative pl-5 text-gray-700 dark:text-gray-200">
                          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500/70 dark:bg-[#D6BCFA]/70"></span>
                          <div className="leading-relaxed whitespace-pre-wrap">
                            {renderTextWithLineBreaks(noteText)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </TutorialPage>
  );
};

export default QuickStart;
