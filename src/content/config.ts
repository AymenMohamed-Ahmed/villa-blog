import { defineCollection, z } from 'astro:content';

// Helper for multilingual string properties
const multilingualString = z.object({
  en: z.string(),
  fr: z.string(),
  es: z.string(),
  ar: z.string(),
});

// 1. Schema for the main page content (specs.json)
const mainContentCollection = defineCollection({
  type: 'data',
  schema: z.object({
    introduction: z.object({
      title: multilingualString,
      body: multilingualString,
    }),
    accomodation: z.object({
      title: multilingualString,
      body: multilingualString,
      images: z.array(z.string()).optional(),
    }),
    restaurants_intro: z.object({
      title: multilingualString,
      body: multilingualString,
    }),
    meetings_intro: z.object({
      title: multilingualString,
      body: multilingualString,
    }),
    leisure_intro: z.object({
      title: multilingualString,
      body: multilingualString,
      images: z.array(z.string()).optional(),
    }),
    wellness_intro: z.object({
      title: multilingualString,
      body: multilingualString,
    }),
    sports_intro: z.object({
      title: multilingualString,
      body: multilingualString,
    }),
  }),
});

// 2. Schema for the Restaurants
const restaurantsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: multilingualString,
    description: multilingualString,
    capacity: z.number().optional().nullable(),
    url: z.string().optional().nullable(),
  }),
});

// 3. Schema for the Meeting Rooms
const meetingRoomsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: multilingualString,
    location: multilingualString,
    theater: z.number().optional().nullable(),
    u_shape: z.number().optional().nullable(),
    cocktail: z.number().optional().nullable(),
    dancing_dinner: z.number().optional().nullable(),
    lunch_diner_served: z.number().optional().nullable(),
    lunch_diner_buffet: z.number().optional().nullable(),
    length_m: z.number().optional().nullable(),
    width_m: z.number().optional().nullable(),
    height_m: z.number().optional().nullable(),
  }),
});

// Export all collections
export const collections = {
  'main-content': mainContentCollection,
  'restaurants': restaurantsCollection,
  'meeting-rooms': meetingRoomsCollection,
};
