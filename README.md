# Gestor de Clientes

Aplicación web Full Stack para la gestión de clientes mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Desarrollada con **Vue 3 y TypeScript** en el frontend, y **Node.js, Express, Sequelize y SQLite** en el backend.

---

## Tecnologías

### Backend
- Node.js
- TypeScript
- Express
- Sequelize
- SQLite
- Sequelize CLI

### Frontend
- Vue 3
- TypeScript
- Vite
- Axios
- Heroicons

---

## Funcionalidades

- Listado de clientes.
- Creación, edición y eliminación de clientes.
- Búsqueda por nombre, correo o empresa.
- Validación de campos obligatorios y formato de email.
- Validación de correo electrónico único.
- Modal de confirmación para eliminar.
- Manejo de errores y mensajes visuales.
- Diseño responsive.
- Persistencia mediante SQLite.

---

## Modelo Cliente

| Campo | Descripción |
|---|---|
| `id` | Identificador único autoincremental |
| `nombre_completo` | Nombre completo. Requerido |
| `email` | Correo electrónico. Requerido y único |
| `telefono` | Teléfono. Opcional |
| `empresa` | Empresa. Requerido |

En el frontend, nombre y apellidos se solicitan por separado y se combinan antes de enviarse al backend como `nombre_completo`.

---

# Instalación y ejecución

## Requisitos previos

Es necesario tener instalado:

- Node.js
- npm
- Git

No es necesario instalar un servidor de base de datos. El proyecto utiliza **SQLite** y la base de datos se genera localmente mediante las migraciones.

---

## 1. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/CarlosQB/prueba-tecnica-crud-clientes.git
```

Entra a la carpeta del proyecto:

```bash
cd prueba-tecnica-crud-clientes
```

---

## 2. Instalar y ejecutar el Backend

Entra a la carpeta `backend`:

```bash
cd backend
```

Instala las dependencias:

```bash
npm install
```

Ejecuta las migraciones para crear la base de datos SQLite y sus tablas:

```bash
npm run db:migrate
```

Inicia el servidor:

```bash
npm run dev
```

El backend estará disponible en:

```text
http://localhost:5000
```

Mantén esta terminal abierta.

---

## 3. Instalar y ejecutar el Frontend

Abre una **segunda terminal** y entra a la carpeta `frontend` desde la raíz del proyecto:

```bash
cd frontend
```

Instala las dependencias:

```bash
npm install
```

Inicia el frontend:

```bash
npm run dev
```

Vite mostrará la dirección local de la aplicación. Normalmente:

```text
http://localhost:5173
```

Abre esa dirección en el navegador.

> El backend y el frontend deben permanecer ejecutándose al mismo tiempo.

---

# Endpoints de la API

URL base:

```text
http://localhost:5000/clientes
```

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/clientes` | Obtener todos los clientes |
| GET | `/clientes/:id` | Obtener un cliente por ID |
| POST | `/clientes` | Crear un cliente |
| PUT | `/clientes/:id` | Actualizar un cliente |
| DELETE | `/clientes/:id` | Eliminar un cliente |

Ejemplo para crear un cliente:

```json
{
  "nombre_completo": "Juan Pérez",
  "email": "juan@email.com",
  "telefono": "3312345678",
  "empresa": "Empresa Demo"
}
```

---

## Scripts del Backend

```bash
npm run dev
```

Ejecuta el servidor en modo desarrollo.

```bash
npm run build
```

Compila el proyecto TypeScript.

```bash
npm run db:migrate
```

Ejecuta las migraciones pendientes.

```bash
npm run db:migrate:undo
```

Revierte la última migración.

---

## Scripts del Frontend

```bash
npm run dev
```

Ejecuta el servidor de desarrollo con Vite.

```bash
npm run build
```

Genera el build de producción.

---

## Notas

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`
- La base de datos SQLite se crea al ejecutar las migraciones.
- `node_modules` y la base de datos local no están incluidos en el repositorio.

---

## Autor

Carlos Quezada
