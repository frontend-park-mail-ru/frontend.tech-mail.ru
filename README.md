# [frontend.tech-mail.ru](http://frontend.tech-mail.ru/)
Source of frontend.tech-mail.ru site

### Команды

- `npm run deploy` выполняет сборку проекта в директорию `.deploy.git` и заливает результат на гитхаб в репозиторий [frontend-park-mail-ru.github.io](https://github.com/frontend-park-mail-ru/frontend-park-mail-ru.github.io)
  
  - Комментарий к коммиту можно указать в кавычках как аргумент команде: `npm run deploy -- "Add awesome slides"` (пока не работает)
  
- `npm run build` выполняет сборку проекта в директорию `dist` и завершает свою работу
- `npm run show` выполняет сборку проекта в директорию `dist` и запускает статический сервер из этой директории для просмотра результата. Так же активируется мониторинг изменений файлов и автоматическая пересборка и перезагрузка сайта
- `npm run add-slides` создаёт в папке `source/slides` шаблон для новой презентации



### Структура проекта

- `.deploy.git` используется для деплоя сайта в репозиторий [frontend-park-mail-ru.github.io](https://github.com/frontend-park-mail-ru/frontend-park-mail-ru.github.io)
- `dist` содержит сборку сайта
- `tasks` содержит grunt-таски
- `source` содержит исходники сайта
  - `source/lib` содержит используемые библиотеки
    - `source/lib/shower/themes/technopark/styles` содержит файлы со [стилями темы Shower'а](https://github.com/frontend-park-mail-ru/shower-technopark-theme). В директории располагаются файлы со стилями для разных screen aspect ratios. При загрузке страницы вычисляется SAR и выбирается необходимый файл со стилями, чтобы презентация выглядела максимально эффектно на экранах с любыми форматами
  - `source/pages` содержит шаблоны для страниц 
  - `source/slides` содержит презентации к лекциям
  - `source/examples` содержит все файлы с примерами
