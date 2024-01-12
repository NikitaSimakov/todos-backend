# Todo API

[Swagger с описанием маршрутов проекта](https://todos-backend-pqko.onrender.com/api-docs/)

## Описание проекта

Todo API создан для взаимодействия с клиентским приложением
[Todo App](https://todos-frontend-five.vercel.app/todos-frontend/) для сохранения/редактирования/изменения статуса задач.

### Особенности

- **База данных:** В качестве базы данных была использована MongoDB.
  ![MongoDB](https://img001.prntscr.com/file/img001/sG_Y9a0RTsy3kx7QBSA8bA.png)
- **Web service:** Разместился на render.com
  ![Render](https://img001.prntscr.com/file/img001/ZgbePRJITImHl7znto02tw.png)
- **Маршруты:** Разработаны маршруты для задач: /api/todos, а для авторизации /api/auth.
  ![Routes](https://img001.prntscr.com/file/img001/etj4zry0RVGTe0RqP67SgA.png)
- **Безопасность:** Для обеспечения безопасности персональных данных пользователя были использованы библиотеки bcrypt и jwt.

## Используемые технологии

- Node.js
- Express
- MongoDB
- Mongoose
- Joi
- JWT
- Swagger
