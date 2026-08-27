---

title: "Software para aprender idiomas utilizando gamificación"
#permalink: /idiomas-mayas-guatemala-software
imagenPrincipal: /img/perseverancia/15.webp
description: "Desarrollé desde cero un software educativo gamificado para el aprendizaje de idiomas mayas de Guatemala (sin embargo se adapta a cualquier idioma). La plataforma incluye desbloqueo progresivo de contenido, recompensas dinámicas y desafíos interactivos, maximizando la motivación de los usuarios. Ofrece una experiencia de aprendizaje efectiva y culturalmente enriquecedora."
og_description: "Desarrollé desde cero un software educativo gamificado para el aprendizaje de idiomas mayas de Guatemala (sin embargo se adapta a cualquier idioma). La plataforma incluye desbloqueo progresivo de contenido, recompensas dinámicas y desafíos interactivos, maximizando la motivación de los usuarios. Ofrece una experiencia de aprendizaje efectiva y culturalmente enriquecedora."
tituloTema: "Software para aprender idiomas utilizando gamificación"
fechaPublicacion: 2025-03-23
descripcionPrevia: "..."
imagenPrevia: "./img/perseverancia/15.webp"
mostrarEnlaceGitHub: false
tecnologias:
  - nombre: "PHP"
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"

  - nombre: "MySQL"
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"

  - nombre: "JavaScript"
    icono: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
enlace: ""
---
## **PERSEVERANCIA ¿Qué es perseverancia?**
Es un software para el aprendizaje de idiomas mayas de Guatemala. Utiliza gamificación para tener a los estudiantes
interesados en el aprendizaje de los idiomas Quiché y Kaqchikel. El objetivo del software es ayudar a los estudiantes en sus cursos que reciben en las escuelas y apoyar a preservar las lenguas de Guatemala, los alumnos pueden ser premiados en su progreso por medio de puntos, desbloqueo de nuevos contenidos y más premios.
<!--more-->
El software está desarrollado en Php y PostgreSQL y tiene las siguientes funcionalidades:

### <code>Administrador</code>
### Listado de juego
Del lado del administrador se selecciona el curso y puede verse los temas principales disponibles para cada idioma. El objetivo es que el administrador pruebe el contenido antes de publicarlo en el perfil del usuario normal.
[![Listado de juego modo administrador](img/perseverancia/1.webp)](img/perseverancia/1.webp)

### Accediendo al tema
El administrador selecciona el tema principal y dentro de cada tema hay subtemas. 
Básicamente está interfaz es la que se muestra al usuario. 
[![Listado de subtemas modo administrador](img/perseverancia/2.webp)](img/perseverancia/2.webp)

### Probando contenido del subtema
El sitio web generá por medio de imágenes, textos, sonidos, etc. El administrador puede ver todas las respuestas. La finalidad de tener está interfaz del lado del administrador es para que pueda probar todo el contenido que será publicado al usuario.
[![Seleccionar por medio de imagen la traducción de idioma maya](img/perseverancia/3.webp)](img/perseverancia/3.webp)

<code>Mostrar contenido con respuesta </code>
En está modalidad se muestra el texto al usuario con la respuesta. Esto debido que luego que el usuario le da en aceptar se le pregunta lo que se le acaba de mostrar. ¿Porque dice traduce esto al español y la palabra está en este idioma? En el usuario administrador se muestra la respuesta tal y como es, pero al usuario normal el texto cambia (Traducir del Quiché al español, traducir del español a Quiché, etc). 
[![Repaso de lección de idiomas Mayas](img/perseverancia/4.webp)](img/perseverancia/4.webp)

Del contenido mostrado al usuario es el que se le pregunta aquí. En donde debe traducir del texto en español al idioma Maya correspondiente.
[![Repaso de lección de idiomas Mayas](img/perseverancia/5.webp)](img/perseverancia/5.webp)

### Respuesta correcto y incorrecta
El usuario cuando selecciona una respuesta incorrecta se le muestra una venta que indica que su elección del contenido no es el correcto o caso contrario el mensaje es para indicar que la respuesta está bien y el usuario acumula puntos.

<code>Respuesta incorrecta</code>
[![Respuesta incorrecta](img/perseverancia/6.webp)](img/perseverancia/6.webp)

<code>Respuesta correcta</code>
[![Respuesta correcta](img/perseverancia/7.webp)](img/perseverancia/7.webp)

### Mensajes intermedios
Aparecen cuando el usuario está por completar 10 respuestas correctas. Las frases de los mensajes se generán de forma aleatorio.
[![Respuesta intermedio](img/perseverancia/8.webp)](img/perseverancia/8.webp)

### <code>Usuario normal</code>
### Iniciar sesión y registrar cuenta
<code>Iniciar sesión</code>
[![Iniciar sesión](img/perseverancia/9.webp)](img/perseverancia/9.webp)

<code>Registrar cuenta</code>
[![Registrar cuenta](img/perseverancia/10.webp)](img/perseverancia/10.webp)

### Mensaje registrarse a curso
Cuando inicia sesión el usuario se muestra un mensaje para que se inscriba a algún curso de idioma maya.
[![Matricularse a cursos o idiomas mayas disponibles](img/perseverancia/11.webp)](img/perseverancia/11.webp)

### Inscribirse a cursos disponibles
[![Listado de cursos disponibles](img/perseverancia/12.webp)](img/perseverancia/12.webp)

[![Registro exitoso](img/perseverancia/13.webp)](img/perseverancia/13.webp)

[![Registro exitoso](img/perseverancia/14.webp)](img/perseverancia/14.webp)

### Contenido de cursos inscritos
[![Contenido de cursos inscritos](img/perseverancia/15.webp)](img/perseverancia/15.webp)

<code>Contenido bloqueado</code>
Esto es porque el usuario debe completar todos el contenido de cada tema para avanzar al siguiente módulo o tema.
[![Contenido de cursos inscritos](img/perseverancia/16.webp)](img/perseverancia/16.webp)

### Diploma no disponible
Al tener completo todo el contenido, el usuario puede descargar su diploma de lo contrario el botón estará bloqueado.
[![Diploma no disponible](img/perseverancia/17.webp)](img/perseverancia/17.webp)

### Lección actual
En la parte verde corresponde a la lección que el estudiante debe realizar para avanzar de nivel.
[![Diploma no disponible](img/perseverancia/18.webp)](img/perseverancia/18.webp)

### Reporte de lección aprendido
Este reporte se desbloquea cada vez que el usuario avanza de lección.
<code>En el reporte aparece 2 tipos de imágenes de sonido. El de la imagen de la persona con bocina corresponde a audio que una persona grabo. Y la imagen solo de la bocina corresponde a audio utilizando una librería</code>
[![Reporte de lección](img/perseverancia/19.webp)](img/perseverancia/19.webp)

### Completando lección
[![Lección](img/perseverancia/20.webp)](img/perseverancia/20.webp)

[![Lección](img/perseverancia/21.webp)](img/perseverancia/21.webp)

### Premios 
Menú para desbloquear premios y más.
[![Desbloquear premios](img/perseverancia/22.webp)](img/perseverancia/22.webp)

<!--{% include youtube.html title="Aprendizaje de idiomas Mayas de Guatemala" url="https://www.youtube.com/embed/WePk4ObeST8?start=1321" width="70%" height="100%" %}-->
