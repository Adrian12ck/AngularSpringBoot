<<<<<<< HEAD
# AngularReuniones

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# 🛠️ Proyecto de Reuniones y Personas con Spring Boot

Este es un proyecto simple pero funcional que gestiona reuniones y personas utilizando **Spring Boot**, una base de datos en memoria **H2** y **Thymeleaf** para la vista en HTML. Además, incluye una API REST básica disponible en la ruta `/api/rest`.

## 🚀 Tecnologías Utilizadas

- **Java 17+**
- **Spring Boot**
- **Spring Boot Starter Data REST**
- **H2 Database (en memoria)**
- **Thymeleaf**

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

3. **Accede a la aplicación**
   - Interfaz web: [http://localhost:8080](http://localhost:8080)
   - API REST: [http://localhost:8080/api/rest](http://localhost:8080/api/rest)

## 🛠️ Funcionalidades

- **Gestión de personas**:❌ Crear, ✔ listar, ❌actualizar y ❌eliminar.
- **Gestión de reuniones**: Asignar personas a reuniones y visualizar información de las mismas.
- **API REST**: Datos accesibles en formato JSON.

## 🖥️ Vistas Disponibles

- **Inicio**: Lista de reuniones y personas.
- **Formulario**: Agregar/editar personas y reuniones. ❌

## 📦 Estructura del Proyecto
```
.
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.adrian.reuniones
│   │   │       ├── controller
│   │   │       ├── model
│   │   │       └── ...
│   │   └── resources
│   │       ├── application.yaml
│   │       └── templates
│   └── test
├── pom.xml
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

>>>>>>> 8aca25802c40af40245b5126d703037cc9e0da4e
