Proyecto de Aula – Sistema de Gestión de Usuarios
Presentado por: Carlos Mesa
Este proyecto forma parte del Proyecto de Aula de desarrollo web y representa el avance del 20% del trabajo final.
El propósito del sistema es desarrollar la base del backend de una aplicación de gestión de usuarios, que servirá como punto de partida para un sistema más completo en etapas posteriores del curso.

El sistema está construido con NestJS (framework de Node.js orientado a arquitectura modular), Prisma ORM para la interacción con la base de datos, y Supabase como servicio gratuito de base de datos PostgreSQL alojado en la nube.
En esta primera entrega, se implementa la estructura base del proyecto, la conexión a la base de datos y el módulo principal de usuarios.

El objetivo principal es establecer la arquitectura backend del sistema, garantizando una conexión segura y estable con la base de datos, además de permitir operaciones básicas sobre usuarios (creación y consulta).
Esto sienta las bases para las siguientes fases, donde se integrarán módulos de autenticación, permisos y otras funcionalidades del sistema.

Tecnologías utilizadas

NestJS – Framework backend modular y escalable.

Prisma ORM – Herramienta para la gestión y consulta de bases de datos.

Supabase – Plataforma gratuita que ofrece PostgreSQL como servicio.

TypeScript – Lenguaje base del proyecto.

Dotenv – Gestión de variables de entorno.

Acciones y partes del proyecto

1. Login y Autenticación (en desarrollo)

Se integrará Supabase Auth para la gestión de sesiones, registro y recuperación de contraseñas.

Permitirá validar usuarios mediante tokens JWT.

2. Vista Principal (planeada para la siguiente fase)

Mostrará información general del usuario y accesos directos a los módulos principales del sistema.

3. Gestión de Usuarios (implementada)

GET /users: Devuelve la lista de todos los usuarios registrados.

POST /users: Permite crear un nuevo usuario con nombre, correo y contraseña.

Servirá como base para el manejo de clientes o empleados en versiones futuras.

4. Listado de Clientes (planeado)

Permitirá visualizar, registrar y editar información de clientes desde el frontend.

Se conectará con las tablas relacionadas en la base de datos.

5. Configuración de Roles (planeado)

Se agregarán niveles de acceso según el tipo de usuario (administrador, cliente, invitado).
