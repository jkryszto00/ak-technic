import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/content/baza-wiedzy' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'grafit-edm',
      'obrobka-cnc',
      'materialy-eksploatacyjne',
      'poradniki',
      'technologie',
    ]),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('AK Technic'),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
