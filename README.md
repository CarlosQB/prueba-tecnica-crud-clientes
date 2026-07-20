# Gestor de Clientes

Aplicación web Full Stack para la gestión de clientes mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El proyecto fue desarrollado como prueba técnica utilizando **Vue.js y TypeScript** en el frontend, y **Node.js, Express, Sequelize y SQLite** en el backend.

El objetivo de la aplicación es permitir administrar clientes de forma sencilla mediante una interfaz web, manteniendo una estructura organizada y separando las responsabilidades del frontend y backend.

---

## Tecnologías utilizadas

### Backend

- Node.js
- TypeScript
- Express
- Sequelize
- SQLite
- Sequelize CLI
- CORS

### Frontend

- Vue 3
- TypeScript
- Vite
- Axios
- Heroicons

---

## Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- Listado de clientes registrados.
- Creación de nuevos clientes.
- Edición de clientes existentes.
- Eliminación de clientes mediante un modal de confirmación.
- Búsqueda de clientes por nombre, correo electrónico o empresa.
- Visualización del ID de cada cliente.
- Validación de campos obligatorios.
- Validación del formato del correo electrónico.
- Validación de correo electrónico único.
- Manejo de errores provenientes del backend.
- Mensajes visuales según la operación realizada.
- Opción para limpiar manualmente el formulario.
- Actualización automática del listado después de crear, editar o eliminar un cliente.
- Diseño responsive.
- Persistencia de datos mediante SQLite.
- Migraciones de base de datos mediante Sequelize CLI.

---

## Modelo de datos

La entidad `Cliente` contiene los siguientes campos:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Integer | Identificador único autoincremental |
| `nombre_completo` | String | Nombre completo del cliente. Campo obligatorio |
| `email` | String | Correo electrónico. Campo obligatorio y único |
| `telefono` | String | Número telefónico. Campo opcional |
| `empresa` | String | Empresa del cliente. Campo obligatorio |

En el frontend, el formulario solicita el **nombre** y los **apellidos** por separado para mejorar la experiencia de usuario.

Antes de enviar la información al backend, ambos valores se combinan y se envían mediante la API como `nombre_completo`.

Por ejemplo:

```text
Nombre: Carlos
Apellidos: Quezada Benavides
```

El backend recibe y almacena:

```text
nombre_completo: "Carlos Quezada Benavides"
```

De esta forma, la estructura de la base de datos mantiene el campo `nombre_completo` solicitado en los requisitos de la prueba.

---

# Instalación y ejecución

A continuación se explican los pasos necesarios para descargar, instalar y ejecutar el proyecto desde cero.

## Requisitos previos

Antes de comenzar, es necesario tener instalado:

- Node.js
- npm
- Git

No es necesario instalar ni configurar MySQL, PostgreSQL u otro servidor de base de datos.

El proyecto utiliza **SQLite**, por lo que la base de datos se crea localmente mediante las migraciones incluidas en el proyecto.

---

## Paso 1: Clonar el repositorio

Abre una terminal y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/CarlosQB/prueba-tecnica-crud-clientes.git
```

Una vez finalizada la descarga, entra a la carpeta principal del proyecto:

```bash
cd prueba-tecnica-crud-clientes
```

Dentro encontrarás las carpetas principales del proyecto:

```text
prueba-tecnica-crud-clientes/
├── backend/
├── frontend/
└── README.md
```

El backend y el frontend deben instalarse y ejecutarse por separado.

---

## Paso 2: Instalar las dependencias del Backend

Desde la carpeta principal del proyecto, entra a la carpeta `backend`:

```bash
cd backend
```

Una vez dentro de la carpeta `backend`, instala todas las dependencias necesarias ejecutando:

```bash
npm install
```

Este comando instalará las dependencias utilizadas por el servidor, como Express, Sequelize, SQLite y TypeScript.

La carpeta `node_modules` no está incluida en el repositorio, por lo que este paso es necesario después de clonar el proyecto.

---

## Paso 3: Crear la base de datos

Una vez instaladas las dependencias del backend, ejecuta las migraciones:

```bash
npm run db:migrate
```

Este comando ejecutará las migraciones de Sequelize y creará la estructura necesaria de la base de datos SQLite.

No es necesario crear manualmente una base de datos ni configurar un servidor externo.

La base de datos se genera localmente al ejecutar las migraciones.

---

## Paso 4: Ejecutar el Backend

Después de instalar las dependencias y ejecutar las migraciones, inicia el servidor backend con:

```bash
npm run dev
```

El backend se ejecutará en:

```text
http://localhost:5000
```

La API de clientes estará disponible en:

```text
http://localhost:5000/clientes
```

Mantén esta terminal abierta mientras utilizas la aplicación.

---

## Paso 5: Instalar las dependencias del Frontend

Con el backend ejecutándose, abre una **segunda terminal**.

No cierres la terminal donde está ejecutándose el backend.

Desde la carpeta principal del proyecto, entra a la carpeta `frontend`:

```bash
cd frontend
```

Si tu terminal todavía se encuentra dentro de la carpeta `backend`, puedes regresar a la raíz y entrar al frontend ejecutando:

```bash
cd ..
cd frontend
```

Una vez dentro de `frontend`, instala las dependencias:

```bash
npm install
```

Este comando instalará las dependencias utilizadas por la interfaz, incluyendo Vue, Axios, Vite y Heroicons.

---

## Paso 6: Ejecutar el Frontend

Después de instalar las dependencias del frontend, ejecuta:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local donde se está ejecutando la aplicación.

Normalmente será:

```text
http://localhost:5173
```

Abre esta dirección en tu navegador para utilizar la aplicación.

---

## Paso 7: Utilizar la aplicación

Para utilizar correctamente la aplicación, el **backend y el frontend deben permanecer ejecutándose al mismo tiempo**.

Debes tener dos terminales abiertas:

### Terminal 1 - Backend

Dentro de la carpeta `backend`:

```bash
npm run dev
```

### Terminal 2 - Frontend

Dentro de la carpeta `frontend`:

```bash
npm run dev
```

Después, abre en el navegador:

```text
http://localhost:5173
```

Desde la interfaz podrás:

- Consultar los clientes registrados.
- Crear nuevos clientes.
- Buscar clientes.
- Editar clientes existentes.
- Eliminar clientes.

---

# Resumen rápido de instalación

Si se desea consultar únicamente los comandos necesarios para levantar el proyecto desde cero, se puede seguir este orden:

## 1. Clonar el proyecto

```bash
git clone https://github.com/CarlosQB/prueba-tecnica-crud-clientes.git
cd prueba-tecnica-crud-clientes
```

## 2. Preparar y ejecutar el Backend

```bash
cd backend
npm install
npm run db:migrate
npm run dev
```

Mantener esta terminal abierta.

## 3. Preparar y ejecutar el Frontend

Abrir una nueva terminal, ubicarse nuevamente en la raíz del proyecto y ejecutar:

```bash
cd frontend
npm install
npm run dev
```

Finalmente, abrir en el navegador:

```text
http://localhost:5173
```

---

# Endpoints de la API

La URL base de la API es:

```text
http://localhost:5000/clientes
```

## Obtener todos los clientes

```http
GET /clientes
```

Ejemplo:

```text
GET http://localhost:5000/clientes
```

---

## Obtener un cliente por ID

```http
GET /clientes/:id
```

Ejemplo:

```text
GET http://localhost:5000/clientes/1
```

---

## Crear un cliente

```http
POST /clientes
```

Ejemplo del cuerpo de la petición:

```json
{
  "nombre_completo": "Juan Pérez",
  "email": "juan@email.com",
  "telefono": "3312345678",
  "empresa": "Empresa Demo"
}
```

---

## Actualizar un cliente

```http
PUT /clientes/:id
```

Ejemplo:

```text
PUT http://localhost:5000/clientes/1
```

Ejemplo del cuerpo de la petición:

```json
{
  "nombre_completo": "Juan Pérez López",
  "email": "juan@email.com",
  "telefono": "3398765432",
  "empresa": "Empresa Actualizada"
}
```

---

## Eliminar un cliente

```http
DELETE /clientes/:id
```

Ejemplo:

```text
DELETE http://localhost:5000/clientes/1
```

---

# Validaciones

La aplicación incluye validaciones para garantizar que la información enviada sea correcta.

### Nombre

El nombre es obligatorio.

### Apellidos

Los apellidos son obligatorios en el formulario del frontend.

El nombre y los apellidos se combinan antes de enviar la información al backend como `nombre_completo`.

### Correo electrónico

El correo electrónico es obligatorio y debe tener un formato válido.

Además, cada correo electrónico debe ser único.

Si se intenta registrar un cliente utilizando un correo electrónico que ya existe, la aplicación mostrará un mensaje de error.

### Teléfono

El teléfono es opcional.

### Empresa

La empresa es obligatoria.

---

# Manejo de errores

La aplicación contempla distintos escenarios de error, entre ellos:

- Campos obligatorios vacíos.
- Formato de correo electrónico inválido.
- Correo electrónico duplicado.
- Cliente no encontrado.
- Error al cargar los clientes.
- Error al crear un cliente.
- Error al actualizar un cliente.
- Error al eliminar un cliente.
- Errores de comunicación con el backend.

Los mensajes correspondientes se muestran visualmente en la interfaz.

---

# Arquitectura del Backend

El backend está organizado separando responsabilidades:

```text
Route
↓
Controller
↓
Service
↓
Model
↓
SQLite
```

### Routes

Definen los endpoints disponibles en la API.

### Controllers

Reciben las peticiones HTTP y gestionan las respuestas correspondientes.

### Services

Contienen la lógica relacionada con las operaciones CRUD de los clientes.

### Models

Representan las entidades utilizadas por Sequelize para interactuar con la base de datos.

### SQLite

Se utiliza como sistema de persistencia de datos local.

---

# Arquitectura del Frontend

El frontend está organizado mediante componentes, servicios y composables.

El flujo principal es:

```text
Vue Components
↓
useClientes
↓
cliente.service
↓
Axios
↓
API REST
```

### Components

Contienen los elementos visuales y reutilizables de la aplicación, como:

- Formulario de clientes.
- Tabla de clientes.
- Encabezado.
- Mensajes visuales.
- Modal de confirmación.

### useClientes

Composable encargado de centralizar el estado y la lógica relacionada con las operaciones CRUD.

### cliente.service

Servicio encargado de realizar las peticiones HTTP al backend mediante Axios.

---

# Scripts disponibles

## Backend

### Ejecutar el servidor en modo desarrollo

```bash
npm run dev
```

### Compilar TypeScript

```bash
npm run build
```

### Ejecutar la versión compilada

```bash
npm start
```

### Ejecutar las migraciones pendientes

```bash
npm run db:migrate
```

### Revertir la última migración

```bash
npm run db:migrate:undo
```

---

## Frontend

### Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### Generar el build de producción

```bash
npm run build
```

### Previsualizar el build de producción

```bash
npm run preview
```

---

# Notas importantes

- El backend utiliza el puerto `5000`.
- El frontend utiliza normalmente el puerto `5173`.
- El backend y el frontend deben estar ejecutándose al mismo tiempo.
- La base de datos SQLite se genera localmente mediante las migraciones.
- La carpeta `node_modules` no está incluida en el repositorio.
- El archivo local de la base de datos SQLite no está incluido en el repositorio.
- Después de clonar el proyecto es necesario ejecutar `npm install` tanto en `backend` como en `frontend`.
- Antes de utilizar la aplicación por primera vez es necesario ejecutar `npm run db:migrate` dentro de la carpeta `backend`.

---

## Autor

Carlos Quezada
