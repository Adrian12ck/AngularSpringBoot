# 🛠️ Proyecto de Reuniones y Personas con Spring Boot + Angular + JWT

Este es un proyecto fullstack que gestiona reuniones y personas utilizando **Spring Boot** en el backend, **Angular** en el frontend, y autenticación con **JWT**. Incluye una API REST funcional (probada con Postman) y una interfaz web en Angular que todavía está en desarrollo.

## 🚀 Tecnologías Utilizadas

### 🔙 Backend
- **Java 17+**
- **Spring Boot**
- **Spring Security con JWT**
- **Spring Data JPA**
- **H2 Database (en memoria)**

### 🔝 Frontend
- **Angular 17+**
- **HttpClient**
- **JWT para autenticación**

## ⚙️ Instalación y Ejecución

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tuusuario/nombre-del-repo.git
   cd nombre-del-repo
   ```

2. **Construye y ejecuta la aplicación**
   ```bash
   mvn spring-boot:run
   ```

3. **Levantar Angular**
   ```bash
   cd frontend
   npm install
   ng serve
   ```
   
4. **Accede a la aplicación**
   - Interfaz web: [http://localhost:8080](http://localhost:8080) (usuario: admin, contraseña: admin)
   - API REST: [http://localhost:8080/api/rest](http://localhost:8080/api/rest)
  
## 🔐 Autenticación JWT
- El backend expone endpoints de login y registro con JWT.

- El token se debe incluir en el header de las peticiones:
   ```mkfile
   Authorization: Bearer <tu-token-jwt>
   ```
## 🛠️ Funcionalidades

- Login/Registro con JWT ✔
- **Gestión de personas** (Frontend): ✔ Crear, ✔ Listar, ❌ Actualizar y ❌ Eliminar.
- **Gestión de reuniones**: Asignar personas a reuniones y visualizar información de las mismas.
- **API REST** Completa en backend ✔
- Protección de rutas con roles (en progreso)

## 🖥️ Vistas Disponibles

- Login ✔
- Registro ✔
- Listado de personas y reuniones ✔
- Formulario para crear ✔
- Editar personas ❌ (pendiente)

## 📦 Estructura del Proyecto
```
├── backend
│   ├── src/main/java/com/user/reuniones
│   │   ├── config
│   │   ├── controller
│   │   ├── model
│   │   ├── repository
│   │   ├── security
│   │   └── service
│   ├── resources
│   │   ├── application.yaml
│   │   └── ...
│   └── pom.xml
├── frontend
│   ├── src/app
│   │   ├── components
│   │   ├── services
│   │   └── guards
│   ├── angular.json
│   └── package.json
```

## 🔧 Configuración de la Base de Datos
La base de datos H2 está configurada en memoria y se accede desde:
- **Consola H2**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Usuario**: `sa`
- **Contraseña**: *(vacía por defecto)*



## 🧑‍💻 Autor
- **[Adrian](https://github.com/Adrian12ck)**

## ⚠️ Licencia
Este proyecto se distribuye bajo la licencia MIT. ¡Úsalo con libertad! 🎉

