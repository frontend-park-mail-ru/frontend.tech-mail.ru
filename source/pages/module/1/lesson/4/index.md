{{{
	"title": "Работа с сетью, разработка API"
}}}

## Работа с сетью, разработка API
__Смешанное занятие №4__

Основы HTTP, методы HTTP. Организация работы с сетью из браузера. Написание сервисов. Понятие API, разработка, документирование и тестирование API.

__[Презентация лекции](/slides/s4)__

#### Домашнее задание

Всем привет!

Подходит к концу первый модуль, на кону рубежный контроль, а мы должны применить на практике знания, полученные на лекции про работу с Сетью.

**Необходимо сделать следующее**

- Напишите свою собственную реализацию транспорта (модуля, который упрощает работу с HTTP-запросами) и необходимые для работы приложения сервисы. За использование Fetch API будет респект от преподавателей ;)
- Договоритесь в команде об API и задокументируйте его, используя любой инструмент
- Реализуйте интеграцию между фронтендом и бекендом. В вашем приложении должны быть функции регистрации/авторизации, должна быть возможность посмотреть список всех пользователей (таблицу лидеров)
- Напишите тесты на все методы вашего API. Пример того, как это сделать, можно посмотреть в нашем репозитории sample. Необходимо протестировать все аспекты работы API: коды ответов, формат запросов и ответов, возвращаемые ошибки в случаях, когда отправляются неверные данные...

На рубежном контроле мы будем проверять выполнение всех домашних заданий. Для вашего удобства привожу здесь краткий

#### Чек лист к РК1

- Ваше приложение **задеплоено на heroku**
- Страницы приложения переключаются без перезагрузки сайта
- Выполнена интеграция с бекендом
- Используется модульный и компонентный подход, используются шаблонизаторы
- Есть формы авторизации и регистрации с валидацией данных
- Есть линтер, который не ругается на ваш код
- Всё ваше API протестировано и **тесты действительно проходят**

Для допуска к РК необходимо **обязательно получить аппрув от ментора**. Перед РК мы распределим команды по преподавателям, инфа об этом появится в [ведомости](https://goo.gl/Qh7N9T).

Все материалы с занятия доступны в [нашем репозитории sample](https://github.com/frontend-park-mail-ru/sample/tree/lesson-4) в ветке lesson-4. Посмотреть работу приложения можно [здесь](https://sample-frontend-2k17.herokuapp.com/). Чтобы запустить тесты, необходимо перейти [вот сюда](https://sample-frontend-2k17.herokuapp.com/tests.html).

По всем вопросам вы можете обращаться к своим менторам или к преподавателям. Желаю вам успехов и до встречи на рубежном контроле!

#### Полезные ссылки

<ul lang="en">
			<li>Same-origin policy описано <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank">здесь (MDN)</a> и <a href="https://en.wikipedia.org/wiki/Same-origin_policy" target="_blank">здесь (wiki)</a></li>
			<li>Метода обхода Same-origin policy <a href="http://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy" target="_blank">stackoverflow</a></li>
			<li>Iframe: <a href="https://webref.ru/html/iframe" target="_blank">WebReference.ru</a> и <a href="https://learn.javascript.ru/same-origin-policy" target="_blank">learn.javascript.ru</a></li>
			<li>Кроссдоменные запросы на <a href="https://learn.javascript.ru/xhr-crossdomain" target="_blank">learn.javascript.ru</a></li>
			<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="_blank">Описание</a> HTTP access control (CORS)</li>
			<li>Документация к <strong>Spring</strong> про CORS: <a href="https://spring.io/blog/2015/06/08/cors-support-in-spring-framework" target="_blank">здесь</a></li>
			<li>API (application programming interface) <a href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank">wiki</a></li>
			<li>Документирование API с помощью <a href="http://swagger.io/" target="_blank">swagger</a>, <a href="https://apiary.io/" target="_blank">apiary</a> или <a href="https://apiblueprint.org/" target="_blank">apiblueprint</a></li>
			<li>Семантический API: <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank">CRUD</a> и <a href="http://www.ibm.com/developerworks/ru/library/ws-restfu/" target="_blank">REST</a></li>
			<li>Тестирование JavaScript <a href="https://jasmine.github.io/" target="_blank">с помощью Jasmine</a></li>
            <li>Очень подробные посты, про Promise на <a href="https://learn.javascript.ru/promise" target="_blank">learn.javascript.ru</a> и на <a href="https://habrahabr.ru/post/209662/" target="_blank">хабре</a></li>
			<li><a href="https://learn.javascript.ru/fetch" target="_blank">Fetch API</a></li>
</ul>
