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
    schema: z.object({
        tituloTema: z.string(),
        fechaPublicacion: z.coerce.date(),
        descripcionPrevia: z.string(),
        imagenPrevia:z.string()
    }),
});

// hacer que astro reconozca la coleccion
export const collections = {
    blog,
}