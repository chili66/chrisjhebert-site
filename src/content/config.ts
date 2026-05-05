import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  type: 'data',
  schema: z.object({
    photos: z.array(
      z.object({
        image: z.string(),
        series: z.string(),
        alt: z.string().optional().default(''),
      })
    ),
  }),
});

const series = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    images: z.array(
      z.object({
        image: z.string(),
        alt: z.string().optional().default(''),
      })
    ),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.number(),
    videoUrl: z.string(),
    description: z.string(),
    order: z.number().optional().default(99),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    linkedin: z.string(),
    imdb: z.string(),
  }),
});

export const collections = { homepage, series, projects, about };
