import { defineType, defineField } from 'sanity'

const homepageTechnologyService = defineType({
  name: 'homepageTechnologyService',
  title: 'Homepage Technology Service',
  type: 'object',
  fields: [
    defineField({
      name: 'serviceId',
      title: 'Service ID / Slug',
      type: 'string',
      description:
        'Identifier used in code (e.g. "staffing", "corporate-training", "ai-ml", "cloud").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Whether this appears as a business vertical or an additional offering.',
      options: {
        list: [
          { title: 'Business Vertical', value: 'business-vertical' },
          { title: 'Offering', value: 'offering' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title shown in the Technology Services tabs.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short supporting line under the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description: '1–2 short paragraphs shown in the detail panel.',
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      description: 'Image used in the right-hand panel for the active service.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      description: 'Button label (e.g. "Explore AI Services").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
      description: 'Path to navigate to (e.g. /services/ai-ml).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name (optional)',
      type: 'string',
      description:
        'Optional icon key to map to a Lucide icon in code (e.g. "BrainCircuit", "CloudCog").',
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to include/exclude this service from the homepage tabs.',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description:
        'Controls ordering inside its category; lower numbers appear first (used when building rows in the UI).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})

export default homepageTechnologyService


