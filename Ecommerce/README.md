# Ecommerce

Aplicación desarrollada en el framework de Angular. Se trata de una página que simula un listado de productos dentro de un ecommerce.

Para la implementación de la aplicación se han utilizado las distintas características que ofrece angular, y que serían habituales en el desarrollo. Entre las funcionalidades implementadas se encuentra:

- **Formularios reactivos y dirigidos por template:** Utilizados para la creación de nuevos artículos.
- **Validaciones genéricas y personalizadas:** Aplicados a los distintos inputs que forman el formulario reactivo, controlan que los se han introducido correctamente.
- **Inyección de servicios:** Encargados de separar la lógica de la aplicación de la vista. Se ocupan de gestionar los datos de los artículos a mostrar y del inicio de sesión de los usuarios.
- **Obtención de datos con observables y RXJS:** A través de la biblioteca RxJS, se utilizarán los tipos de datos observables para obtener los datos de una manera asíncrona.
- **Conexión a backend y consumo de API REST:** Establece una conexión a través de HttpClient para realizar peticiones a una API REST, permitiendo así obtener los artículos a mostrar, subir nuevos artículos o modificar los existentes.
- **Sistema de rutas:** Se establece un sistema de rutas que permiten la navegación por los distintos componentes que forman la aplicación.
- **Login y Registro:**  Formularios reactivos que permiten registrar un nuevo usuario en la aplicación y posteriormente su inicio de sesión.
- **Protección de rutas con guards:**  Se impide el acceso a la ruta de creación de un nuevo artículo para aquellos usuarios que no tengan sesión iniciada a través del login. El guard comprueba que el sistema tenga almacenado un token de autenticación antes de permitir el acceso.
- **Lazy loading:** Utilizado para cargar las distintas partes que forman la aplicación en módulos, mejorando así el rendimiento de la página.