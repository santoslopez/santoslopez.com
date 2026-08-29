---
layout: post
title: "Sistema de gestión académica en Java Swing y MySQL"
permalink: /software-gestion-academica-java-swing-mysql
imagenPrincipal: ../img/sistema-gestion-academica/2.webp
description: Sistema de gestión académica desarrollado en Java Swing y MySQL, utilizando los patrones MVC y POO. Este software de gestión escolar facilita la inscripción de estudiantes en cursos de colegios y universidades, permitiendo la asignación de cursos, horarios, salones y profesores. Además, cuenta con un sistema de roles para un control eficiente de usuarios y recursos educativos.
og_description: Sistema de gestión académica desarrollado en Java Swing y MySQL, utilizando los patrones MVC y POO. Este software de gestión escolar facilita la inscripción de estudiantes en cursos de colegios y universidades, permitiendo la asignación de cursos, horarios, salones y profesores. Además, cuenta con un sistema de roles para un control eficiente de usuarios y recursos educativos.
tituloTema: "Sistema de Gestión de Inventario y Ventas"
fechaPublicacion: 2023-02-02
descripcionPrevia: Sistema web para la gestión de inventario, compras y ventas, desarrollado con PHP y PostgreSQL. Implementa transacciones para mantener la integridad de los datos, control de existencias, anulación de ventas con actualización automática del inventario, gestión de clientes y proveedores, reportes y medidas de seguridad contra inyección SQL y manejo inseguro de sesiones.
imagenPrevia: "./img/sistema-gestion-academica/2.webp"
enlace: "https://github.com/santoslopez/sistema-gestion-academica"
mostrarEnlaceGitHub: true
tecnologias:
    - nombre: "Java"
      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    - nombre: "MySQL"
      icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
---
## **Software para asignación horarios de estudiantes y profesores en universidades o colegios, etc.**
El software se hizo para mejorar las habilidades de programación orientada a objetos y reforzar los conocientos en MySQL.
<!--more-->
Básicamente el sistema tiene varias funcionalides como: agregar, modificar, eliminar y listar. Dependiendo del tipo de rol del sistema pueden tener restricciones los usuarios, ejemplo: el rol administrador es el encargado de asignar a los profesores a los respectivos cursos que deben impartir, etc. 

## Inicio de sesión
Si el usuario o password son incorrectos el sistema indica el error.
![Inicio de sesión](img/sistema-gestion-academica/1.webp)

### Modalidad administrador
La pantalla principal del sistema de la modalidad administrador es la que aparece en la siguiente imagen.
<code>Pantalla principal</code>

![Pantalla principal administrador](img/sistema-gestion-academica/2.webp)

#### Usuarios
En la opción de usuarios se puede registrar, listar los usuarios registrados y modificar sus datos.
![Opciones de usuarios](img/sistema-gestion-academica/3.webp)

**Validar registro de usuarios**
![Campos requeridos en registro de usuarios](img/sistema-gestion-academica/4.webp)

**Registro exitoso de usuarios (profesores, estudiantes)**
![Registro exitoso de usuarios (profesores, estudiantes)](img/sistema-gestion-academica/5.webp)

**Listado de usuarios**
![Registro exitoso de usuarios (profesores, estudiantes)](img/sistema-gestion-academica/6.webp)

#### Facultad
![Opciones de facultad](img/sistema-gestion-academica/7.webp)

Se realizan todas las validaciones adecuadas como **verificar que el nombre no exista** o que los datos no sean vacíos.
![Registrar facultad](img/sistema-gestion-academica/8.webp)

<div class="icon-text-wrapper">
    <a href="https://github.com/santoslopez/sistema-gestion-academica" class="enlacesSkills" title="Perfil de GitHub">
    Código en GitHub
    </a>
</div>


