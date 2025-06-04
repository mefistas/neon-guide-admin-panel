import React from 'react';
import TutorialPage from '@/components/TutorialPage';
import { useLanguage } from '@/contexts/LanguageContext';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from 'lucide-react';
import BackButton from '@/components/BackButton';
const QuickStart = () => {
  const {
    t,
    language
  } = useLanguage();
  const [expandedPoints, setExpandedPoints] = React.useState<number[]>([1]);
  const toggleExpand = (index: number) => {
    setExpandedPoints(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  // Function to render text with line breaks - improved version
  const renderTextWithLineBreaks = (text: string) => {
    if (!text) return null;

    // Handle both \n and \\n patterns
    const lines = text.split(/\\n|\n/);
    return lines.map((line, index, array) => <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>);
  };

  // Formatted description content
  const FormattedDescription = () => <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-blue-50/80 dark:bg-[#1A1F2C]/80 p-4 rounded-lg border border-blue-200 dark:border-[#7E69AB]/30">
        <h2 className="text-lg font-semibold text-blue-800 dark:text-[#D6BCFA] mb-2">
          🚀 Добро пожаловать в руководство по быстрому старту
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Это руководство поможет тебе настроить и сконфигурировать админ-панель всего за 11 шагов. 
          Следуйте этим инструкциям, чтобы быстро запустить свои продажи.
        </p>
      </div>

      {/* Main page overview */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          📊 Главная страница
        </h3>
        <p className="text-gray-700 dark:text-gray-200 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
          На главной странице есть графики - в них собраны статистические данные работы вашего магазина
        </p>
      </div>

      {/* Menu sections */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          🧭 Основные разделы меню
        </h3>
        <div className="pl-4 space-y-3">
          <div className="bg-gray-50 dark:bg-[#111827] p-3 rounded border-l-4 border-blue-500">
            <span className="font-medium text-blue-700 dark:text-[#D6BCFA]">Боты</span> - где создаете ботов
          </div>
          <div className="bg-gray-50 dark:bg-[#111827] p-3 rounded border-l-4 border-green-500">
            <span className="font-medium text-green-700 dark:text-green-400">Сотрудники</span> - где создаете сотрудников
          </div>
          <div className="bg-gray-50 dark:bg-[#111827] p-3 rounded border-l-4 border-purple-500">
            <span className="font-medium text-purple-700 dark:text-purple-400">Клиенты</span> - список ваших клиентов кто когда либо писал боту
          </div>
          <div className="bg-gray-50 dark:bg-[#111827] p-3 rounded border-l-4 border-orange-500">
            <span className="font-medium text-orange-700 dark:text-orange-400">Маркетинг</span> - различные промо акции и всё такое
          </div>
          <div className="bg-gray-50 dark:bg-[#111827] p-3 rounded border-l-4 border-red-500">
            <span className="font-medium text-red-700 dark:text-red-400">СКЛАД</span> - основной раздел где можно настроить города, районы, курьеры, товары и адреса
          </div>
        </div>
      </div>

      {/* How to add objects */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          ➕ Как добавить объект
        </h3>
        <div className="bg-green-50 dark:bg-[#0C1A0C] p-4 rounded-lg border border-green-200 dark:border-green-800">
          <ol className="list-decimal pl-4 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Перейти в нужный раздел</li>
            <li>Сверху справа найти кнопку <span className="bg-green-100 dark:bg-green-800 px-2 py-1 rounded font-medium">"ДОБАВИТЬ"</span></li>
            <li>Заполнить форму добавления</li>
          </ol>
        </div>
      </div>

      {/* How to delete objects */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          🗑️ Как удалить объект
        </h3>
        <div className="bg-red-50 dark:bg-[#1A0C0C] p-4 rounded-lg border border-red-200 dark:border-red-800">
          <ol className="list-decimal pl-4 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Перейти в нужный раздел</li>
            <li>Выбрать нужный объект и кликнуть на первую колонку</li>
            <li>Перейти в настройки этого объекта</li>
            <li>Внизу слева будет кнопка <span className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded font-medium">"УДАЛИТЬ"</span></li>
          </ol>
          <div className="mt-3 p-2 bg-red-100 dark:bg-red-900/50 rounded text-sm">
            <strong>⚠️ Внимание:</strong> После подтверждения объект удалится - восстановление не возможно!
          </div>
        </div>
      </div>

      {/* Mass actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          ☑️ Массовые действия
        </h3>
        <div className="bg-blue-50 dark:bg-[#0C1420] p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-200 mb-3">
            На странице списка объектов (например адресов) есть строка массовых действий:
          </p>
          <ul className="list-disc pl-4 space-y-1 text-gray-700 dark:text-gray-200">
            <li>Выберите несколько объектов галочками слева от строчки</li>
            <li>Выберите необходимое действие из выпадающего меню и примените настройки ко всем выделенным записям.</li>
          </ul>
        </div>
      </div>

      {/* Row actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 flex items-center">
          ⚡ Быстрые действия
        </h3>
        <div className="bg-purple-50 dark:bg-[#1A0C20] p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-gray-700 dark:text-gray-200">На некоторых страницах у записей есть различные кнопки действий справа. Они чаще всего располагаются в самой крайней правой колонке, с помощью них можно вносить изменения не открывая каждую карточку клиента сообщения или товара отдельно.</p>
        </div>
      </div>
    </div>;

  // Quick start section data
  const quickStartSections = [{
    id: 1,
    title: 'quickStartPoint1',
    notes: ['quickStartPoint1Note1', 'quickStartPoint1Note2', 'quickStartPoint1Note3', 'quickStartPoint1Note4', 'quickStartPoint1Note5']
  }, {
    id: 2,
    title: 'quickStartPoint2',
    notes: ['quickStartPoint2Note1', 'quickStartPoint2Note2', 'quickStartPoint2Note3', 'quickStartPoint2Note4', 'quickStartPoint2Note5', 'quickStartPoint2Note6', 'quickStartPoint2Note7']
  }, {
    id: 3,
    title: 'quickStartPoint3',
    notes: ['quickStartPoint3Note1', 'quickStartPoint3Note2', 'quickStartPoint3Note3', 'quickStartPoint3Note4', 'quickStartPoint3Note5', 'quickStartPoint3Note6', 'quickStartPoint3Note7', 'quickStartPoint3Note8']
  }, {
    id: 4,
    title: 'quickStartPoint4',
    notes: ['quickStartPoint4Note1', 'quickStartPoint4Note2', 'quickStartPoint4Note3', 'quickStartPoint4Note4', 'quickStartPoint4Note5', 'quickStartPoint4Note6', 'quickStartPoint4Note7', 'quickStartPoint4Note8']
  }, {
    id: 5,
    title: 'quickStartPoint5',
    notes: ['quickStartPoint5Note1', 'quickStartPoint5Note2', 'quickStartPoint5Note3', 'quickStartPoint5Note4', 'quickStartPoint5Note5', 'quickStartPoint5Note6', 'quickStartPoint5Note7']
  }, {
    id: 6,
    title: 'quickStartPoint6',
    notes: ['quickStartPoint6Note1', 'quickStartPoint6Note2', 'quickStartPoint6Note3', 'quickStartPoint6Note4', 'quickStartPoint6Note5', 'quickStartPoint6Note6', 'quickStartPoint6Note7', 'quickStartPoint6Note8']
  }, {
    id: 7,
    title: 'quickStartPoint7',
    notes: ['quickStartPoint7Note1', 'quickStartPoint7Note2', 'quickStartPoint7Note3', 'quickStartPoint7Note4', 'quickStartPoint7Note5', 'quickStartPoint7Note6', 'quickStartPoint7Note7']
  }, {
    id: 8,
    title: 'quickStartPoint8',
    notes: ['quickStartPoint8Note1', 'quickStartPoint8Note2', 'quickStartPoint8Note3', 'quickStartPoint8Note4', 'quickStartPoint8Note5', 'quickStartPoint8Note6', 'quickStartPoint8Note7', 'quickStartPoint8Note8']
  }, {
    id: 9,
    title: 'quickStartPoint9',
    customContent: <div className="mt-4">
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            {/* Bilingual section */}
            {language === 'ru' ? <>
                <p>- Идем в раздел ДОБАВИТЬ АДРЕСА</p>
                <p>- Тут мы видим уже списки районов которые есть, воспользуйтесь поисковом если их много, находим нужный район для загрузки адресов и нажимаем ДОБАВИТЬ АДРЕСА</p>
                <p>- Выбираем нужного курьера, для этого мы его и добавляли ранее</p>
                <p>- Выбираем нужный МК если проставляли, если нет оставляем как есть</p>
                <p>- Выбираем тип продукта (название и грамовка) например у нас 5 кладов продукта по1гр на данном районе</p>
                <p>- Игнорируем пункт изображения на данный момент, в последствии вы сможете ознакомиться с их функцией в разделе АДРЕСА</p>
                <p>- Идем сразу в окно text и вот тут начинается магия большой загрузки !представьте если у вас 100 одинаковых адресов на данном районе, будет просто ужасно грузить каждый клад отдельно, вместо этого загрузите все свои фотографии кладов на какой нибудь хост по типу https://imgbb.com напишите к ним описание и используйте двойной пробел между строками что бы панель поняла что вы выгружаете не один адрес, а много</p>
              </> : <>
                <p>- Go to the ADD ADDRESSES section</p>
                <p>- Here we see lists of districts that exist. Use the search if there are many. Find the right district to upload addresses and click ADD ADDRESSES</p>
                <p>- Be sure to select the courier you need - this is why we added one</p>
                <p>- Select the MK if you set them up, if not leave as is</p>
                <p>- Select the product type (name and gram size), for example if we have 5 stashes of meph singles in this district</p>
                <p>- Ignore the images section, that's for advanced users</p>
                <p>- Go straight to the text section, and here's where the bulk upload magic happens. Imagine if you have 100 singles in this district, it would be terrible to load each stash separately. Instead, upload all your stash photos to a host like https://imgbb.com, write descriptions for them and use double spaces between lines so the panel understands you're not loading one address but many</p>
              </>}
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
            {language === 'ru' ? <>
                <p>Итого теперь бот видит что вы загрузили три адреса для данного района</p>
                <p>Нажимаем сохранить если на этом районе больше нет других грамовок</p>
                <p>Либо нажимаем сохранить и добавить еще если в этом районе есть еще какие то другие адреса</p>
                <p>Осталось совсем немного!</p>
              </> : <>
                <p>Now the bot sees that you've uploaded three addresses for this district</p>
                <p>Click save if there are no other gram sizes in this district</p>
                <p>Or click save and add more if there are other addresses in this district</p>
                <p>Congratulations, you're excellent! Let's take a look at the payment options!</p>
              </>}
          </div>
        </div>
  }, {
    id: 10,
    title: 'quickStartPoint10',
    notes: ['quickStartPoint10Note1', 'quickStartPoint10Note2', 'quickStartPoint10Note3', 'quickStartPoint10Note4', 'quickStartPoint10Note5', 'quickStartPoint10Note6', 'quickStartPoint10Note7', 'quickStartPoint10Note8']
  }, {
    id: 11,
    title: 'quickStartPoint11',
    notes: ['quickStartPoint11Note1', 'quickStartPoint11Note2', 'quickStartPoint11Note3', 'quickStartPoint11Note4']
  }];
  return <TutorialPage title={t('quickStart')}>
      <div className="flex items-center justify-between mb-4">
        <BackButton to="/" />
      </div>
      
      <div className="space-y-8">
        <FormattedDescription />

        <div className="space-y-4">
          {quickStartSections.map(section => {
          const isExpanded = expandedPoints.includes(section.id);
          return <Collapsible key={section.id} open={isExpanded} onOpenChange={() => toggleExpand(section.id)} className={`backdrop-blur-sm transition-all duration-300 overflow-hidden rounded-lg ${isExpanded ? 'bg-blue-50/90 dark:bg-[#1A1F2C]' : 'bg-white/90 hover:bg-blue-50/80 dark:bg-[#111827] dark:hover:bg-[#1A1F2C]/80'}`}>
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
                  return <div key={index} className="relative pl-5 text-gray-700 dark:text-gray-200">
                          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500/70 dark:bg-[#D6BCFA]/70"></span>
                          <div className="leading-relaxed whitespace-pre-wrap">
                            {renderTextWithLineBreaks(noteText)}
                          </div>
                        </div>;
                })}
                  </div>
                </CollapsibleContent>
              </Collapsible>;
        })}
        </div>
      </div>
    </TutorialPage>;
};
export default QuickStart;