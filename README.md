# macroscop-emulator

Эмулятор системы видеонаблюдения Macroscop

> Все запросы необходимо выполнять от группы Старший администратор

> Все запросы для конфигурирования системы (configure) необходимо посылать на главный сервер системы

> Запросы для получения информации о сервере (api) можно посылать на любой сервер видеонаблюдения

> Для получения доступа до ресурсов необходимо использовать HTTP Basic authentication. Base64 берем от строки вида: логин:пароль. При этом пароль должен передаваться в виде md5-хэша

## Коды возврата:

* 200 — Запрос выполнен успешно
* 400 — Запрос сформирован неверно, или во время выполнения произошла непредвиденная ошибка
* 403 — Запрашиваемый ресурс запрещен текущему пользователю, убедитесь, что пользователь обладает правами на конфигурирование
* 404 — Запрашиваемый ресурс не найден
* 409 — Во время выполнения запроса обнаружено изменение конфигурации. Повторите запрос позже

## Документация Macroscop. REST API

[link](https://macroscop.com/media/5813/download/macroscop-rest-api-ru.pdf?v=1&inline=1)

* Получить список всех лиц из базы
http://localhost:8080/api/faces?offset=0&portion=50&module=complete
* Добавляет новое лицо в базу. В ответ возвращается полное описание лица.
http://localhost:8080/api/faces?module=complete
* Получить подробное описание лица вместе с изображениями лиц из базы, закодированными в base64
http://localhost:8080/api/faces/d1bd0147-e3d7-4bcd-a19c-e9a1acafaadd?module=complete&onlymainsample=true
* Обновление существующего лица в базе. В ответ возвращается полное описание.
http://localhost:8080/api/faces/d1bd0147-e3d7-4bcd-a19c-e9a1acafaadd?module=complete
* Удалить лицо с указанным идентификатором из базы.
http://localhost:8080/api/faces/d1bd0147-e3d7-4bcd-a19c-e9a1acafaadd?module=complete

## Документация Macroscop. SDK и API

[link](https://macroscop.com/media/5543/download/macroscop-sdk-api-ru.pdf?v=15&inline=1)

* Получение конфигурации системы. Пример запроса данных в формате XML:
http://127.0.0.1:8080/configex?login=root&password=
* Получение конфигурации системы. Пример запроса данных в формате JSON:
http://127.0.0.1:8080/configex?login=root&password=&responsetype=json
* Получение событий в реальном времени
http://127.0.0.1:8080/event?login=root&password=&responsetype=json
* Получение кадра
http://127.0.0.1:8080/site?login=root&password=&channelid=706c4691-3d90-41e3-8789-76eb9810648f
