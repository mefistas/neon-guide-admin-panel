import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';

const QuickStart = () => {
  const { t } = useLanguage();
  const [expandedPoints, setExpandedPoints] = React.useState<number[]>([1]);
  
  const toggleExpand = (index: number) => {
    setExpandedPoints(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Quick start section data
  const quickStartSections = [
    {
      id: 1,
      title: 'quickStartPoint1',
      notes: [
        'quickStartPoint1Note1',
        'quickStartPoint1Note2',
        'quickStartPoint1Note3',
        'quickStartPoint1Note4',
        'quickStartPoint1Note5',
      ]
    },
    {
      id: 2,
      title: 'quickStartPoint2',
      notes: [
        'quickStartPoint2Note1',
        'quickStartPoint2Note2',
        'quickStartPoint2Note3',
        'quickStartPoint2Note4',
        'quickStartPoint2Note5',
        'quickStartPoint2Note6',
        'quickStartPoint2Note7',
      ]
    },
    {
      id: 3,
      title: 'quickStartPoint3',
      notes: [
        'quickStartPoint3Note1',
        'quickStartPoint3Note2',
        'quickStartPoint3Note3',
        'quickStartPoint3Note4',
        'quickStartPoint3Note5',
        'quickStartPoint3Note6',
        'quickStartPoint3Note7',
        'quickStartPoint3Note8',
      ]
    },
    {
      id: 4,
      title: 'quickStartPoint4',
      notes: [
        'quickStartPoint4Note1',
        'quickStartPoint4Note2',
        'quickStartPoint4Note3',
        'quickStartPoint4Note4',
        'quickStartPoint4Note5',
        'quickStartPoint4Note6',
        'quickStartPoint4Note7',
        'quickStartPoint4Note8',
      ]
    },
    {
      id: 5,
      title: 'quickStartPoint5',
      notes: [
        'quickStartPoint5Note1',
        'quickStartPoint5Note2',
        'quickStartPoint5Note3',
        'quickStartPoint5Note4',
        'quickStartPoint5Note5',
        'quickStartPoint5Note6',
        'quickStartPoint5Note7',
      ]
    },
    {
      id: 6,
      title: 'quickStartPoint6',
      notes: [
        'quickStartPoint6Note1',
        'quickStartPoint6Note2',
        'quickStartPoint6Note3',
        'quickStartPoint6Note4',
        'quickStartPoint6Note5',
        'quickStartPoint6Note6',
        'quickStartPoint6Note7',
        'quickStartPoint6Note8',
      ]
    },
    {
      id: 7,
      title: 'quickStartPoint7',
      notes: [
        'quickStartPoint7Note1',
        'quickStartPoint7Note2',
        'quickStartPoint7Note3',
        'quickStartPoint7Note4',
        'quickStartPoint7Note5',
        'quickStartPoint7Note6',
        'quickStartPoint7Note7',
      ]
    },
    {
      id: 8,
      title: 'quickStartPoint8',
      notes: [
        'quickStartPoint8Note1',
        'quickStartPoint8Note2',
        'quickStartPoint8Note3',
        'quickStartPoint8Note4',
        'quickStartPoint8Note5',
        'quickStartPoint8Note6',
        'quickStartPoint8Note7',
        'quickStartPoint8Note8',
      ]
    },
    {
      id: 9,
      title: 'quickStartPoint9',
      notes: [
        'quickStartPoint9Note1',
        'quickStartPoint9Note2',
      ],
      customContent: (
        <div className="mt-4">
          <div className="space-y-3 text-gray-200">
            <p>{t('quickStartPoint9Note3')}</p>
            <p>{t('quickStartPoint9Note4')}</p>
            <p>{t('quickStartPoint9Note5')}</p>
            <p>{t('quickStartPoint9Note6')}</p>
            <p>{t('quickStartPoint9Note7')}</p>
          </div>
          
          <div className="mt-4 rounded-lg overflow-hidden">
            <div className="bg-[#1A1F2C] px-4 py-2">
              <h3 className="font-medium text-white">Пример:</h3>
            </div>
            <div className="bg-[#111827] p-4">
              <div className="border border-[#7E69AB]/30 rounded bg-[#0C111D] p-3 font-mono text-sm">
                <div>
                  <span className="text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-300">в указанной точке по кордам</span>
                </div>
                <div className="my-4 border-t border-b border-dashed border-gray-700 py-1 text-center text-xs text-gray-500">
                  [пустая строка]
                  <br />
                  [пустая строка]
                </div>
                <div>
                  <span className="text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-300">в указанной точке по кордам</span>
                </div>
                <div className="my-4 border-t border-b border-dashed border-gray-700 py-1 text-center text-xs text-gray-500">
                  [пустая строка]
                  <br />
                  [пустая строка]
                </div>
                <div>
                  <span className="text-[#D6BCFA]">https://imgbb.com</span>
                  <br />
                  <span className="text-gray-300">в указанной точке по кордам</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="text-gray-200">
              <p className="leading-relaxed">Итого теперь бот видит что ты загрузил три адреса для данного района. Нажимаем сохранить если на этом районе больше нет других грамовок, либо нажимаем сохранить и добавить еще если в этом районе есть еще какие то другие адреса. Поздравляю ты великолепен что там с вариантами оплат</p>
            </div>
            <div className="relative pl-5 text-gray-200">
              <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
              <p className="leading-relaxed">{t('quickStartPoint9Note8')}</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: 'quickStartPoint10',
      notes: [
        'quickStartPoint10Note1',
        'quickStartPoint10Note2',
        'quickStartPoint10Note3',
        'quickStartPoint10Note4',
        'quickStartPoint10Note5',
        'quickStartPoint10Note6',
        'quickStartPoint10Note7',
        'quickStartPoint10Note8',
      ]
    },
    {
      id: 11,
      title: 'quickStartPoint11',
      notes: [
        'quickStartPoint11Note1',
        'quickStartPoint11Note2',
        'quickStartPoint11Note3',
        'quickStartPoint11Note4',
      ]
    },
  ];

  return (
    <TutorialPage title={t('quickStart')}>
      <div className="space-y-8">
        <p className="text-lg text-gray-200">{t('quickStartDescription')}</p>

        <div className="space-y-4">
          {quickStartSections.map((section) => {
            const isExpanded = expandedPoints.includes(section.id);
            
            return (
              <Collapsible 
                key={section.id} 
                open={isExpanded} 
                onOpenChange={() => toggleExpand(section.id)}
                className={`backdrop-blur-sm transition-all duration-300 overflow-hidden rounded-lg ${
                  isExpanded 
                    ? 'bg-[#1A1F2C]' 
                    : 'bg-[#111827] hover:bg-[#1A1F2C]/80'
                }`}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-5 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center min-w-8 h-8 rounded-full bg-[#7E69AB]/40 text-white font-medium">
                      {section.id}
                    </div>
                    <h2 className="text-xl font-medium text-gray-100">{t(section.title)}</h2>
                  </div>
                  <div className="text-[#D6BCFA]">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="overflow-hidden">
                  <div className="pl-12 pr-6 pb-6 space-y-4">
                    {section.customContent ? (
                      section.customContent
                    ) : (
                      section.notes.map((noteKey, index) => {
                        const noteText = t(noteKey);
                        if (!noteText) return null;
                        
                        return (
                          <div 
                            key={index}
                            className="relative pl-5 text-gray-200"
                          >
                            <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#D6BCFA]/70"></span>
                            <p className="leading-relaxed">{noteText}</p>
                          </div>
                        );
                      })
                    )}
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
