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
