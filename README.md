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

En el frontend, el nombre y los apellidos se solicitan por separado y se combinan antes de enviarse al backend como `nombre_completo`.

---

# Instalación y ejecución

## Requisitos previos

Antes de instalar y ejecutar el proyecto, es necesario contar con:

- **Node.js 20.19.0 o superior, o Node.js 22.12.0 o superior**
- **Recomendado: Node.js 22 LTS**
- **npm 10 o superior**
- **Git**

El proyecto fue probado con **Node.js 22.14.0 en Windows 11**.

No es necesario instalar un servidor de base de datos externo. El proyecto utiliza **SQLite** y la base de datos se genera localmente mediante las migraciones.

> El proyecto utiliza `sqlite3`, que es un módulo nativo. Normalmente `npm install` descargará automáticamente un binario precompilado. Si la instalación falla en una plataforma o versión de Node sin un binario compatible, puede ser necesario contar con herramientas de compilación instaladas. Se recomienda utilizar una versión LTS de Node.js.

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

Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

El backend estará disponible por defecto en:

```text
http://localhost:5000
```

Mantén esta terminal abierta.

> El puerto del backend puede configurarse mediante la variable de entorno `PORT`. Si no se especifica, se utilizará el puerto `5000`.

---

## 3. Instalar y ejecutar el Frontend

Abre una **segunda terminal** y entra a la carpeta `frontend` desde la raíz del proyecto:

```bash
cd frontend
```

Antes de instalar y ejecutar el frontend, crea el archivo de variables de entorno a partir del archivo `.env.example`.

### Linux / macOS

```bash
cp .env.example .env
```

### Windows PowerShell

```powershell
Copy-Item .env.example .env
```

El archivo `.env` debe contener:

```env
VITE_API_URL=http://localhost:5000
```

Esta variable define la URL del backend utilizada por el frontend.

A continuación, instala las dependencias:

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

URL base por defecto:

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

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Compilar TypeScript

```bash
npm run build
```

### Ejecutar la versión compilada

Después de ejecutar `npm run build`:

```bash
npm start
```

### Ejecutar migraciones pendientes

```bash
npm run db:migrate
```

### Revertir la última migración

```bash
npm run db:migrate:undo
```

---

## Scripts del Frontend

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Generar el build de producción

```bash
npm run build
```

---

## Notas

- El backend utiliza por defecto `http://localhost:5000`.
- El frontend utiliza normalmente `http://localhost:5173`.
- La base de datos SQLite se crea al ejecutar las migraciones.
- `node_modules`, `.env` y la base de datos local no están incluidos en el repositorio.
- El archivo `.env.example` sirve como referencia para configurar las variables de entorno del frontend.
- La URL del backend utilizada por el frontend se configura mediante `VITE_API_URL`.
- El puerto del backend puede configurarse mediante la variable de entorno `PORT`. Si no se especifica, se utiliza el puerto `5000`.

---

## Documentación adicional

Para consultar información sobre la estructura del proyecto, arquitectura, decisiones técnicas y uso de Inteligencia Artificial durante el desarrollo, revisar el archivo [`DOCUMENTACION.md`](./DOCUMENTACION.md).

---

## Autor

Jose Carlos Quezada Benavides
