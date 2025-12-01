import { defineType, defineField } from 'sanity'
import { CodeIcon } from '@sanity/icons'

export default defineType({
  name: 'serviceOffering',
  title: 'Service Offering',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'id',
      title: 'Service ID (Slug)',
      type: 'slug',
      description: 'Unique identifier used in the URL (e.g., ai-ml, cloud, applications). Used to generate the slug for /services/[slug]',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'Main title of the service (e.g., "AI & Machine Learning")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short tagline/subtitle for the service',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Array of description paragraphs',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the Lucide icon (e.g., BrainCircuit, CloudCog, AppWindow, BarChart3, UserCheck)',
      options: {
        list: [
          { title: 'BrainCircuit', value: 'BrainCircuit' },
          { title: 'CloudCog', value: 'CloudCog' },
          { title: 'AppWindow', value: 'AppWindow' },
          { title: 'BarChart3', value: 'BarChart3' },
          { title: 'UserCheck', value: 'UserCheck' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      description: 'Image used in service listings/sections',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading in the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Description text shown in the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Large hero image displayed on the service page',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCTA',
      title: 'Hero Call-to-Action',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary CTA Text',
          type: 'string',
          description: 'Text for the primary button (e.g., "Book a Discovery")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary CTA Text',
          type: 'string',
          description: 'Text for the secondary button (e.g., "Explore Offerings")',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offerings',
      title: 'Service Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      description: 'List of service offerings displayed in the offerings section',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'capabilities',
      title: 'Capabilities & Technologies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      description: 'Key capabilities and technologies',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'solutions',
      title: 'Tailored Solutions (Optional)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link (Optional)',
              type: 'url',
              description: 'Optional link for the solution',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      description: 'Optional tailored solutions section',
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              step: 'step',
            },
            prepare({ title, step }) {
              return {
                title: `${step}. ${title}`,
              }
            },
          },
        },
      ],
      description: 'Process steps displayed in the "How We Work" section',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'industries',
      title: 'Industries We Serve',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of industries served by this service',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'whyChoose',
      title: 'Why Choose Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main heading for the "Why Choose" section',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'List of reasons why to choose this service',
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: 'image',
          title: 'Why Choose Image',
          type: 'image',
          description: 'Image displayed in the "Why Choose" section',
          options: {
            hotspot: true,
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'finalCTA',
      title: 'Final Call-to-Action',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Main heading for the final CTA section',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          description: 'Description text for the final CTA',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text displayed on the CTA button',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
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

