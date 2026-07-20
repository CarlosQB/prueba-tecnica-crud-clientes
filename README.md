# Gestor de Clientes

Aplicación web Full Stack para la gestión de clientes mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El proyecto fue desarrollado como prueba técnica utilizando Vue.js y TypeScript en el frontend, y Node.js, Express, Sequelize y SQLite en el backend.

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

- Listado de clientes registrados.
- Creación de nuevos clientes.
- Edición de clientes existentes.
- Eliminación de clientes con modal de confirmación.
- Búsqueda por nombre, correo electrónico o empresa.
- Validación de campos obligatorios.
- Validación de formato de correo electrónico.
- Validación de correo electrónico único.
- Manejo de errores del backend.
- Mensajes visuales según la operación realizada.
- Diseño responsive.
- Base de datos SQLite.
- Migraciones de base de datos con Sequelize CLI.

---

## Modelo Cliente

Cada cliente contiene los siguientes campos:

| Campo | Tipo | Descripción |
|---|---|---|
| id | Integer | Identificador único autoincremental |
| nombre_completo | String | Nombre completo del cliente |
| email | String | Correo electrónico único |
| telefono | String | Teléfono opcional |
| empresa | String | Empresa del cliente |

En el frontend, el formulario solicita el nombre y los apellidos por separado para mejorar la experiencia de usuario. Ambos valores son enviados al backend como `nombre_completo`.

---

## Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/CarlosQB/prueba-tecnica-crud-clientes.git
