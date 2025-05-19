
type LanguageType = 'ru' | 'en';

const mailoutTranslations: Record<LanguageType, Record<string, string>> = {
  en: {
    mailouts: 'Mailouts',
    mailoutsDesc: 'Different types of mailouts you can send to your customers',
    mailoutsTypes: 'There are 3 types of mailouts:',
    oneTimeMailouts: 'One-time mailouts - most often created automatically during bulk product uploads by checking the "Launch mailout" option. You can also create them manually. The peculiarity of this type is that they are automatically deleted after 24 hours and cannot be launched again.',
    manualLaunchMailouts: 'Manual launch - created and launched only manually in the "Mailouts" section. You can create mailout templates and then launch them manually as needed.',
    automaticLaunchMailouts: 'Automatic launch - created manually in the "Mailouts" section and launched at the time set in the settings. Can also be launched manually from the "Mailouts" section by clicking the "launch" button to the right of the mailout. By default, each store can create 3 mailouts for automatic launch. If you need more, you need to contact the administrator.',
    howToCreateMailout: 'To create a mailout, click the "add mailout" button in the "Mailouts" section in the upper right corner.',
    createMailoutSteps: 'To create a mailout you need to:',
    step1: 'Specify the store for which the mailout will be made. The mailout will be sent to all customers of this store.',
    step2: 'Choose the type of mailout from the options provided. When choosing "Automatic launch", hour selection fields will appear - you need to check one or more boxes next to the desired hour. Hours are specified in Moscow time. You can also specify the time in minutes for the launch. For example, you check the box to send at 12 hours Moscow time - and specify 30 minutes - the mailout will be launched at 12:30 Moscow time.',
    step3: 'You can add an attachment file - this can be a Photo, Video, or GIF animation.',
    step4: 'Next, add the mailout text itself. You can use emojis, as well as HTML tags - <b>BOLD</b> <i>ITALIC</i> You can also add special commands to the mailout text: /info - Store information /start - main menu /rules - store rules /price /show /list - Showcase They will be highlighted in blue and the client can click on them and get the necessary menu item.',
    step5: 'Check the box "Add product availability" - then text similar to the "Showcase" item in the bot will be added to the mailout.',
    step6: 'Add buttons with links, or a "Main Menu" button; To add buttons with links, you need to add a construction like "BUTTON TEXT|https://t.me/durov" to each line (Button text, then separator |, then a link in full format) If you specify just text, without a separator and without a link, for example "MAIN MENU" - then a keyboard will be added under the input text to open the main menu.',
    step7: 'Below in the Sending Settings block, you can choose several options. Do not send to clients - when this box is checked, the mailout will be sent ONLY to the channels selected below. Send only to those who have purchased - when this box is checked, the mailout will be sent ONLY to clients who have purchased at least once in your store. Channels for publication - here is a list of your channels from the "Additional" - "Info channels" section.',
    saveButton: 'Then click the "SAVE" button. Mailouts of the "One-time" type will be launched automatically upon creation. Other mailouts need to be launched manually or wait for the execution time automatically.',
    possibleErrors: 'Possible errors when saving a mailout:',
    error1: '1) Error code: 400. Description: Bad Request: message caption is too long - This means that you have too much text in the caption for the image. In this case, you need to either reduce the caption (most often this is related to adding product availability - if there are many products, a lot of text is generated. you need to disable this checkbox).',
    error2: '2) You need to reconnect your Telegram account. When creating a mailout, we send a check to the account connected to the store for notifications through the Helper bot. If you have blocked this bot or your account has been deleted - then this error will appear. You need to reconnect your account to create a mailout.',
    prev: 'Previous',
    next: 'Next'
  },
  ru: {
    mailouts: 'Рассылки',
    mailoutsDesc: 'Существует несколько видов рассылок, которые вы можете отправить своим клиентам',
    mailoutsTypes: 'Существует 3 вида рассылок:',
    oneTimeMailouts: 'Разовые - чаще всего создаются автоматически при массовой загрузке товаров, установив галочку "Запустить рассылку". Вы также можете создавать их вручную. Особенность данного вида заключается в том, что через сутки они автоматически удалятся и их нельзя запускать повторно.',
    manualLaunchMailouts: 'Ручной запуск - создаются и запускаются только вручную в разделе "Рассылки". Вы можете создать себе шаблоны рассылок и далее запускать их вручную по мере надобности.',
    automaticLaunchMailouts: 'Автоматический запуск - создаются вручную в разделе "Рассылки" и запускаются по времени, установленному в настройках. Также может быть запущена вручную из раздела "Рассылки" кликнув на кнопку "запустить" справа от рассылки. По умолчанию, каждый магазин может создать 3 рассылки для автоматического запуска. Если нужно больше - необходимо обратиться к администратору.',
    howToCreateMailout: 'Чтобы создать рассылку необходимо нажать кнопку "добавить рассылку" в разделе "Рассылки" в правом верхнем углу.',
    createMailoutSteps: 'Для создания рассылки необходимо:',
    step1: 'Указать магазин, по которому будет произведена рассылка. Рассылка будет произведена по всем клиентам данного магазина.',
    step2: 'Выбрать тип рассылки из предложенных вариантов. При выборе "Автоматического запуска" появятся поля выбора часов запуска - необходимо установить одну или несколько галочек напротив нужного часа. Часы указаны по Московскому времени. Так же вы можете указать время в минутах запуска. Например, ставите галочку отправить в 12 часов по мск - и указываете 30 минут - рассылка будет запущена в 12.30 мск.',
    step3: 'Вы можете добавить файл вложения - это может быть Фото, Видео, Анимация гиф.',
    step4: 'Далее добавить сам текст рассылки. Можете использовать емоджи, а также теги HTML - <b>ЖИРНЫЙ</b> <i>КУРСИВ</i> Так же вы можете добавить в текст рассылки специальные команды: /info - Информация о магазине /start - главное меню /rules - правила магазина /price /show /list - Витрина Они будут подсвечены синим цветом и клиент сможет кликнуть на них и получить необходимый пункт меню.',
    step5: 'Установить галочку - "Добавить наличие товаров" - тогда к рассылке будет добавлен текст, аналогичный пункту "Витрина" в боте.',
    step6: 'Добавить кнопки с ссылками, или кнопку "Главное меню"; Для того чтобы добавить кнопки с ссылками - необходимо добавить в каждую строчку конструкцию типа "ТЕКСТ КНОПКИ|https://t.me/durov" (Текст кнопки, далее разделитель | , далее ссылку в полном формате) Если вы укажите просто текст, без разделителя и без ссылки, например "ГЛАВНОЕ МЕНЮ" - тогда будет добавлена клавиатура под текст ввода, для открытия главного меню.',
    step7: 'Ниже в блоке Настройки отправки можно выбрать несколько вариантов. Не рассылать клиентам - при установке этой галочки рассылка будет произведена ТОЛЬКО по каналам, выбранным ниже. Отправить только купившим - при установке этой галочки рассылка будет отправлена ТОЛЬКО клиентам, которые хотя бы раз купили в вашем магазине. Каналы для публикации - тут список ваших каналов из раздела "Дополнительно" - "Инфо-каналы".',
    saveButton: 'Далее необходимо нажать кнопку "СОХРАНИТЬ". Рассылки вида "Разовая" будут запущены автоматически при создании. Другие рассылки необходимо запускать в ручном режиме либо ожидать времени исполнения в автоматическом.',
    possibleErrors: 'Возможные ошибки при сохранении рассылки:',
    error1: '1) Error code: 400. Description: Bad Request: message caption is too long - Это значит что у вас слишком большой текст подписи к картинке. В данном случае вам необходимо либо уменьшить подпись (чаще всего это связано с добавлением наличия товара - если товара много то генерируется очень много текста. необходмо отключить эту галочку).',
    error2: '2) Необходимо переподключить ТГ аккаунт. При создании рассылки мы отправляем проверку на подключенный к магазину аккаунт для оповещений через бота Helper. Если вы заблокировали этого бота или ваш аккаунт удален - тогда выйдет эта ошибка. Вам необходимо переподключить аккаунт для создания рассылки.',
    prev: 'Предыдущий',
    next: 'Следующий'
  }
};

export default mailoutTranslations;
