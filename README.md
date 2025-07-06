# 🛒 Node.js E-commerce API

Este es un proyecto de backend para una plataforma de comercio electrónico, construido con **Node.js**, **Express**, y **MySQL**. Ofrece una API RESTful para gestionar productos, usuarios, pedidos y autenticación.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MySQL
- Sequelize (opcional como ORM)
- JSON Web Tokens (JWT)
- bcrypt (para encriptar contraseñas)
- dotenv

---

## 📁 Estructura del proyecto

├── config/ # Configuración de la base de datos
├── controllers/ # Lógica de negocio (productos, usuarios, etc.)
├── models/ # Modelos de base de datos
├── routes/ # Definición de rutas de la API
├── middleware/ # Middlewares (auth, validaciones, etc.)
├── .env # Variables de entorno
├── app.js # Archivo principal del servidor
└── package.json

## ⚙️ Configuración inicial

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala las dependencias:

npm install

3. Configura las variables de entorno en un archivo .env:
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=ecommerce
   JWT_SECRET=tu_clave_secreta
   PORT=3000
