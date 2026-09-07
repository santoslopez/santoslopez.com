# CARPETA LAYOUT: para evitar duplicacion de codigo


## estructura
src/
├── layouts/
│   └── Layout.astro
└── pages/
    ├── index.astro
    └── software.astro


## esto
<Layout TITULO_PAGINA ="Inicio">
sirve para pasarle el valor TITULO_PAGINA
a nuestra pagina de layout pagina 1, pagina 2, pagina 3

## ¿Dónde ponemos la imagen?
En Astro, para una imagen que simplemente queremos servir como archivo estático, una opción sencilla es utilizar public/.

### BlogCard.astro
Utilice <Image> debido a que me interesaba mostrar una imagen "previa"
en blog, es la imagen que aparece en /blog
- para eso se utilizo  import { Image } from "astro:assets" en el archivo.

### content.config.ts
Necesario para utilizar la imagen en /blog o /proyectos, usar schema: ({image }) 

### Carpeta styles: markdown.css
Para darle diseño a las imagenes de todos los archivos markdown
que se usan como blogs o proyectos.

### Carpeta pages, blog, archivo [slug].astro
Encargado de mostrar los archivos markdown