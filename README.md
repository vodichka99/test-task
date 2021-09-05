# test-task

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Info
В качестве базы данных используется localStorage. Но в store есть пример fetch запроса через открытый REST API.
Так как api для добавления пользователя в базу данных отсутствует, пришлось использовать локальное хранилище.
Для проверки работы приложения нужно заполнить localStorage нужными данными, ввести в консоль этот скрипт:
```
const arr = [
  { name: "Eugene", password: "123", token: "123", confirmed: true },
  { name: "Jack", password: "123", token: "321", confirmed: false },
];
localStorage.setItem('token', '123')
localStorage.setItem("users", JSON.stringify(arr));
```
Не совсем понятен пункт тз "информация о пользователе частично известна",
поэтому приглашенный пользователь имеет статус не подтвердившего активный статус, а зарегистрированный имеет активный статус в поле confirmed.
В остальном их данные одинаковые.

### Минусы
- Так как нет REST API, не получилось продемонстрировать работу с асинхронностью и база данных хранится в localStorage
- Нет верстки
- Нет обработки ошибок