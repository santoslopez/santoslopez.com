// importamos z o zod para validar el frontmatter los datos o fecha del
// markdown
import { defineCollection } from "astro:content";
// nos proporciona el cargador
import { glob } from "astro/loaders";
import { z } from "astro/zod";


// definir la coleccion
const blog = defineCollection({

    // buscar los archivos markdown y cargarlos como entrada de coleccion
    loader: glob({
        base: "./src/content/blog",
        pattern: "**/*.md",
    }),

    
    // espero recibir un objecto con determinados campos
    schema: ({image }) => z.object({
        tituloTema: z.string(),
        fechaPublicacion: z.coerce.date(),
        descripcionPrevia: z.string(),
        //imagenPrevia:z.string() FUNCIONA PARA TODAS LAS IMAGENES MARKDOWN
        imagenPrevia:image()

    }),
});

const software = defineCollection({
    loader: glob({
        base: "./src/content/software",
        pattern: "**/*.md",
    }),

    schema: ({image}) => z.object({
        tituloTema: z.string(),
        fechaPublicacion: z.coerce.date(),
        descripcionPrevia: z.string(),
        imagenPrevia: image(),

        tecnologias: z.array(
            z.object({
                nombre: z.string(),
                icono: z.string()
            })
        ).default([]),

        enlace: z.string().default(""),
        mostrarEnlaceGitHub: z.boolean().default(true)
    }),
});

// hacer que astro reconozca la coleccion
export const collections = {
    blog,
    software
}