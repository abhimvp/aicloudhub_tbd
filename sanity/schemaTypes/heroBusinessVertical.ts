import { defineType, defineField } from 'sanity'

const heroBusinessVertical = defineType({
  name: 'heroBusinessVertical',
  title: 'Hero Business Vertical',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main heading shown in the hero card (e.g. IT Staffing).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short sub-heading shown under the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description (1–2 sentences) for the hero card.',
      validation: (Rule) => Rule.required().max(260),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      description: 'Background / thumbnail image used in the hero business-vertical card.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Destination Link',
      type: 'string',
      description: 'Path for “Learn more” (e.g. /services/staffing).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to include/exclude this vertical from the hero carousel.',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. If empty, defaults to creation order.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'image',
    },
  },
})

export default heroBusinessVertical


