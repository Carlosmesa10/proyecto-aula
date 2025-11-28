# CRM – Sistema de Gestión de Clientes
#Presentado por: Carlos Mesa

## Descripción general

Aplicación web full stack para la gestión de clientes (CRM) orientada a pequeñas y medianas empresas. Permite registrar usuarios, autenticar mediante JWT y administrar el ciclo de vida de los clientes a través de una API REST desarrollada con NestJS y una interfaz web estática publicada en GitHub Pages.

El proyecto forma parte de un trabajo académico de desarrollo de software y demuestra el uso integrado de arquitectura cliente-servidor, ORM, base de datos relacional y despliegue en la nube.

## URLs

- Frontend: https://carlosmesa10.github.io/proyecto-aula/
- Backend API: https://proyecto-aula-production.up.railway.app
- Repositorio: https://github.com/Carlosmesa10/proyecto-aula

##Credenciales para probar funcionalidades:

Administrador:[ email: admin@test.com ----- Password: 123456 ]

Usuario normal: [ email: talcual@cuc.co ------ Password: 123456]


## Arquitectura y tecnologías

- **Backend**
  - NestJS (TypeScript) para la construcción de la API REST.
  - Prisma ORM para el acceso a datos.
  - PostgreSQL (Supabase) como base de datos relacional.
  - Autenticación y autorización mediante JSON Web Tokens (JWT).
  - Despliegue en Railway (`https://proyecto-aula-production.up.railway.app`).

- **Frontend**
  - HTML5, CSS3 y JavaScript ES6+ sin framework.
  - Consumo de la API REST mediante Fetch.
  - Despliegue estático en GitHub Pages:
    - `https://carlosmesa10.github.io/proyecto-aula/`.

- **Infraestructura y control de versiones**
  - Git y GitHub para control de versiones.
  - GitHub Pages para hosting del frontend.
  - Railway para hosting del backend y conexión con Supabase.

## Funcionalidades principales

- Registro y autenticación de usuarios.
- Gestión de clientes:
  - Creación, consulta, actualización y eliminación (CRUD).
  - Listado de clientes asociados al usuario autenticado.
- Control de acceso basado en roles:
  - Rol administrador con capacidades ampliadas (gestión de usuarios y clientes).
  - Rol usuario estándar con acceso restringido.
- Interfaz web responsiva e intuitiva para interacción con la API.

## Endpoints principales de la API

- Autenticación
  - `POST /auth/register` – Registro de nuevos usuarios.
  - `POST /auth/login` – Inicio de sesión y emisión de token JWT.
- Clientes
  - `GET /clients` – Listado de clientes del usuario autenticado.
  - `POST /clients` – Creación de un nuevo cliente.
  - `PATCH /clients/:id` – Actualización de datos de un cliente.
  - `DELETE /clients/:id` – Eliminación de un cliente.
- Usuarios (solo administrador)
  - `GET /users` – Listado de usuarios del sistema.


- **Backend en Railway**
- Despliegue automático a partir de los cambios en la rama `main`.
- Configuración de variables de entorno:
 - `DATABASE_URL` (cadena de conexión de Supabase).
 - `JWT_SECRET`.
 - `NODE_ENV=production`.

- **Frontend en GitHub Pages**
- El contenido estático del frontend se encuentra en la carpeta `docs/`.
- GitHub Pages publica automáticamente la rama `main` apuntando a `/docs`.

## Uso previsto y contexto académico

Este proyecto se desarrolló como evidencia de competencias en:

- Diseño e implementación de APIs REST seguras.
- Uso de NestJS, Prisma y PostgreSQL en un entorno de producción.
- Integración de frontend estático con backend desplegado en la nube.
- Aplicación de buenas prácticas de ingeniería de software y control de versiones.


- **Anexos de pruebas en mobile como administrador**
![anexo 1](https://github.com/user-attachments/assets/c144d60d-7df3-4a69-8303-d2683b14af63)
![anexo 2](https://github.com/user-attachments/assets/bcf24973-c1a5-467c-8270-5ec8eedbf037)
![anexo 3](https://github.com/user-attachments/assets/f3ecbe77-1ec8-4adc-ab8d-87d3a38ce704)


- **Anexos de pruebas en pc como administrador**
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f51c969a-d90c-4b24-b898-bf21b12cce2d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e9726ad8-d2c2-44fb-8e55-89d19997a4a4" />




