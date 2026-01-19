<div align="center">
  <img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Logo.png?raw=true" alt="Logo" width="300px" >
  
  <h3>Plataforma de reseñas y recomendaciones de películas</h3>

   <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18.2.0">
  <img src="https://img.shields.io/badge/Node.js-25.1.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js 25.1.0">


   <img src="https://img.shields.io/badge/MongoDB-8.2.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB 8.2.3">

   <img src="https://img.shields.io/badge/Versión-1.0.0-white?style=for-the-badge" alt="Versión">

  <p align="right"><br>Fecha: 5 de diciembre del 2025</p>
</div>

### Descripción
<div align=justify>

**CineStreaming** es una aplicación web pensada para los entusiastas del cine que constantemente están en busqueda de nuevos títulos que vayan relacionados con sus gustos personales, dejar reseñas para la comunidad y descubrir nuevos títulos que están en el "Top 10". La plataforma resuelve la falta de recomendaciones exclusiva a cada perfil mediante un sistema inteligente de sugerencias y clasificación basado en géneros favoritos. 
</div>

## Funcionalidades principales
- Registro e inicio de sesión 
- Cátalogo completo e información de películas
- Búsqueda por título y filtrado por género
- Sistema de rating automático que calcula el promedio de calificaciones
- Sistema de reseñas y calificación (1-5 estrellas)

## Interfaz del sistema
<div align="center">

|Login|Registro de usuario|Inicio|Información|
|:---:|:---:|:---:|:---:|
|<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Login.png?raw=true" width="165px" alt="Login"><br>| <img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Registro.png?raw=true" width="110px" alt="Registro" ><br> |<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Inicio.png?raw=true" width="290px" alt="Inicio" ><br> | <img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Informaci%C3%B3n.png?raw=true" width="290px" alt="Inicio" ><br>
|**Reseñas**|**Top 10**|**Recomendadas**|**Agregar Película**|
|<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Rese%C3%B1as.png?raw=true" width="270px" alt="AgregarPelícula"><br>|<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Top.png?raw=true" width="270px" alt="Top10"><br>|<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/Recomendadas.png?raw=true" width="270px" alt="Recomendadas"><br>|<img src="https://github.com/ErickMonroy/CineStreaming/blob/main/README%20img/AgregarPeli.png?raw=true" width="270px" alt="AgregarPelícula"><br>|

</div>

---
## Tecnologías utilizadas
- **Frontend:**

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/React_(CDN)-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18.2.0">
<img src="https://img.shields.io/badge/Tailwind_CSS_(CDN)-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.3.0">

- Backend:
<img src="https://img.shields.io/badge/Node.js-25.1.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js 25.1.0">
<img src="https://img.shields.io/badge/Express.js-4.18.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js 4.18.2">
<img src="https://img.shields.io/badge/MongoDB-8.2.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB 8.2.3">
<img src="https://img.shields.io/badge/Mongoose-7.5.0-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose 7.5.0">
<img src="https://img.shields.io/badge/CORS-2.8.5-999999?style=for-the-badge&logo=webpack&logoColor=white" alt="CORS 2.8.5">

---
## Configuración e Instalación

### **Paso 1: Instalar Node.js**

- Descargar e instalar desde el sitio oficial:
https://nodejs.org/

- Verificar instalación:<br>
    - `node --version` (Debe mostrar: v25.1.0 o superior) 
    - `npm --version`(Debe mostrar: 10.0.0 o superior)


### **Paso 2: Instalar MongoDB Community Server**
- Descargar e instalar desde su sitio oficial : https://www.mongodb.com/try/download/community

### **Paso 3 (opcional): Instalar MongoDB Compass **
- Interfaz gráfica para gestionar la base de datos:: https://www.mongodb.com/try/download/compass

### **Paso 4: Clonar repositorio con Git:**
- git clone https://github.com/ErickMonroy/CineStreaming.git
- verificar que existan los archivos `index.html`,  `server.js` y `package.json`

### **Paso 5: Instala las dependencias del backend**
- Desde la raíz del proyecto ejecutar en cmd: `npm install`

>Este comando instalará automáticamente todas las dependencias definidas en package.json, incluyendo Express, Mongoose y CORS.

### **Paso 6: Ejecutar el servidor** 
- Desde la raíz del proyecto ejecutar en cmd: `node server.js`

>El servidor se ejecuta por defecto en:
http://localhost:3001

### **Paso 7: Abrir la aplicación**
- Acceder a la carpeta `frontend`
- Abrir el archivo `index.html` directamente en el navegador