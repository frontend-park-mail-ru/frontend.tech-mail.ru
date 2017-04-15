{{{
	"title": "Работа с данными в браузере"
}}}

## Работа с данными в браузере
__Смешанное занятие №7__

Кэширование данных в браузере, использование cookies, хранение данных на клиенте. Протокол WebSocket, взаимодействие клиента и сервера. Service Workers и оффлайн-работа веб-приложений. HTTP/2.

__[Презентация лекции](/slides/s8)__

#### Домашнее задание

Теперь у вас есть все знания, чтобы начать реализовывать мультиплеер. Для общения между клиентом и сервером необходимо использовать быстрые и легковесные веб-сокеты.

Внедрите в ваше приложение возможность работы в ***оффлайне***. Напишите сервис-воркер и закешируйте в нём всю статику, необходимую для работы вашего приложения. В оффлайне должен быть доступен синглплеер. Если в вашей игре начисляются очки, то при игре в оффлайн-режиме они должны сохраняться в каком-нибудь сторадже и при появлении сети, они должны синхронизироваться с сервером. Как всегда, приветствуются продуктовые решения, удивите нас!
  
Пример использования веб-сокетов и сервис-воркеров для организации ***оффлайн***-работы приложения можно посмотреть в нашей мини-игрушке с танчиками. Я задеплоил её на хероку, она доступна [по ссылке](https://sample-game-frontend.herokuapp.com/). Исходники игры лежат в [репозитории на гитхабе](https://github.com/frontend-park-mail-ru/sample-game). Можно запустить игрушку локально и поизучать, как она работает. Если после этого *выключить* интернет на компьютере и *обновить* страницу, то все файлы игры достанутся из кэша и вы всё равно сможете в неё поиграть.

С любыми вопросами вы можете обращаться к своим менторам и к любому их преподавателей. До встречи на следующей лекции!!!


#### Полезные ссылки

<ul lang="en">
			<li><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=ru" target="_blank">Кэширование HTTP</a> &mdash; Google Developers</li>
			<li><a href="https://developer.mozilla.org/ru/docs/WebSockets" target="_blank">WebSockets | MDN</a></li>
			<li><a href="https://ru.wikipedia.org/wiki/JSON-RPC" target="_blank">Описание JSON-RPC</a> и хорошая <a href="https://github.com/teambition/jsonrpc-lite" target="_blank">библиотечка</a> для работы с ним из браузера</li>
			<li><a href="https://habrahabr.ru/post/279291/" target="_blank">ServiceWorker и CacheStorage | Habr</a></li>
			<li>This excellent <a href="https://docs.google.com/presentation/d/1r7QXGYOLCh4fcUq0jDdDwKJWNqWK1o4xMtYpKZCJYjM/present?slide=id.p19" target="_blank">set of slides</a> has more information on some of the points covered in this presentation</li>
			<li>Vitaly Friedman: <a href="https://youtu.be/whFhyHysYYg" target="_blank">How We Moved To HTTP/2 To Improve Performance... And Failed</a></li>
			<li>High Performance Browser Networking (O'Reilly): <a href="https://youtu.be/whFhyHysYYg" target="_blank">HTTP/2</a></li>
</ul>
