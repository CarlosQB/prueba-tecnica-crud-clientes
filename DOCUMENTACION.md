# Documentación del proyecto

## Descripción general

Este proyecto corresponde a una aplicación web Full Stack para la gestión de clientes mediante operaciones CRUD.

La aplicación permite registrar, consultar, buscar, editar y eliminar clientes desde una interfaz web.

El proyecto está dividido en dos partes principales:

- `backend`: encargado de la API, la lógica del sistema y la persistencia de datos.
- `frontend`: encargado de la interfaz de usuario y la comunicación con la API.

---

## Estructura del proyecto

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
├── README.md
└── DOCUMENTACION.md
