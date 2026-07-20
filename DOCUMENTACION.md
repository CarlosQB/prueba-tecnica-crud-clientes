## Estructura del proyecto

El proyecto está dividido en dos partes principales: `backend` y `frontend`.

```text
prueba-tecnica-crud-clientes/
├── backend/
│   ├── config/
│   ├── migrations/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.ts
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.vue
│   │   └── main.ts
│   └── package.json
│
└── README.md
```

### Backend

- `config/`: contiene la configuración utilizada por Sequelize CLI.
- `migrations/`: contiene las migraciones necesarias para crear y modificar la estructura de la base de datos.
- `src/controllers/`: recibe las peticiones HTTP y genera las respuestas correspondientes.
- `src/db/`: contiene la configuración de conexión con la base de datos SQLite.
- `src/models/`: define el modelo `Cliente` utilizado por Sequelize.
- `src/routes/`: define los endpoints disponibles en la API.
- `src/services/`: contiene la lógica de las operaciones CRUD.
- `src/app.ts`: archivo principal encargado de iniciar el servidor y configurar Express.

### Frontend

- `src/assets/`: contiene los estilos generales de la aplicación.
- `src/components/`: contiene los componentes visuales, como el formulario, la tabla, los mensajes y el modal de confirmación.
- `src/composables/`: contiene la lógica reutilizable del CRUD mediante `useClientes`.
- `src/services/`: contiene las peticiones HTTP al backend realizadas con Axios.
- `src/types/`: contiene las interfaces y tipos utilizados por TypeScript.
- `src/App.vue`: componente principal de la aplicación.
- `src/main.ts`: punto de entrada del frontend.

Esta estructura permite separar responsabilidades y mantener el código organizado, facilitando su mantenimiento y comprensión.
