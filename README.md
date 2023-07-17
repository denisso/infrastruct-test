# Выполнение ДЗ

.github/workflows/commitlint.yml - проверка соответствия сообщений о коммитах формату conventional commits
.github/workflows/deploy.yml - деплой на gh-pages
.github/workflows/issue.md - шаблош isse при удачном release
.github/workflows/release.yml - release при установке тега
.github/workflows/tests.yml - тесты

в ДЗ ветка мастер в которую мержатся изменения из dev веток через пул реквесты, я еще думал создать ветку master-workflow в которой бы выполнялись настроки workflow

# Установка и настройка

В этом репозитории находится пример приложения с тестами:

- [e2e тесты](e2e/example.spec.ts)
- [unit тесты](src/example.test.tsx)

Для запуска примеров необходимо установить [NodeJS](https://nodejs.org/en/download/) 16 или выше.

Как запустить:

```sh
# установить зависимости
npm ci

# запустить приложение
npm start
```

Как запустить e2e тесты:

```sh
# скачать браузеры
npx playwright install

# запустить тесты
npm run e2e
```

Как запустить модульные тесты:

```sh
npm test
```
