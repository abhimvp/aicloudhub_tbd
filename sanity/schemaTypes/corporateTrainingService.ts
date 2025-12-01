import { defineType, defineField } from 'sanity'

const corporateTrainingService = defineType({
  name: 'corporateTrainingService',
  title: 'Corporate Training Service',
  type: 'document',
  fields: [
    // Basic meta / hero identity
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Primary name of the business vertical (e.g. "Corporate Training").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline shown in various places (e.g. "Empower Your Workforce with Future-Ready Skills").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Intro Description',
      type: 'array',
      of: [{ type: 'text' }],
      description: '1–3 intro paragraphs describing the vertical.',
      validation: (Rule) => Rule.min(1),
    }),

    // Hero content
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main page hero title (e.g. "Corporate Training by aiCloudHub").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Short hero paragraph under the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main hero image for the Corporate Training page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCTA',
      title: 'Hero Call-to-Action',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary CTA Label',
          type: 'string',
          description: 'Primary CTA button label (e.g. "Request a Training Proposal").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryHref',
          title: 'Primary CTA Link',
          type: 'string',
          description: 'Primary CTA link (e.g. "/contact-us").',
          initialValue: '/contact-us',
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary CTA Label',
          type: 'string',
          description: 'Secondary CTA button label (e.g. "Explore Training Categories").',
        }),
        defineField({
          name: 'secondaryHref',
          title: 'Secondary CTA Link',
          type: 'string',
          description: 'Secondary CTA link (e.g. "#categories").',
          initialValue: '#categories',
        }),
      ],
    }),

    // Training categories
    defineField({
      name: 'categories',
      title: 'Training Categories',
      type: 'array',
      of: [
        {
          name: 'trainingCategory',
          title: 'Training Category',
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
            defineField({
              name: 'topics',
              title: 'Topics',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Bullet points for the category topics.',
              validation: (Rule) => Rule.min(1),
            }),
            defineField({
              name: 'whyItMatters',
              title: 'Why It Matters',
              type: 'text',
              rows: 3,
              description: 'Explanation of why this category is important.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description:
                'Optional icon key to map to a Lucide icon in code (e.g. "BrainCircuit", "CloudCog", "GitBranch").',
            }),
          ],
        },
      ],
      description:
        'Core training categories (e.g. AI & Data Science, Cloud & Infrastructure, DevOps, Cybersecurity, Agile & Professional Skills).',
    }),

    // Why choose us
    defineField({
      name: 'whyChoose',
      title: 'Why Choose Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Section heading (e.g. "Why Corporate Training with aiCloudHub?").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Bullet points listed under "Why Choose" section.',
          validation: (Rule) => Rule.min(1),
        }),
      ],
    }),

    // Delivery models
    defineField({
      name: 'deliveryModels',
      title: 'Training Delivery Models',
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
            }),
          ],
        },
      ],
      description:
        'Delivery models (e.g. On-Premise Workshops, Virtual Instructor-Led Training, Hybrid, Bootcamps, Leadership Coaching).',
    }),

    // Process steps
    defineField({
      name: 'process',
      title: 'Training Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'number',
              validation: (Rule) => Rule.required(),
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
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      description:
        'End-to-end process (e.g. Discovery, Curriculum Design, Delivery, Assessment & Certification, Continuous Support).',
    }),

    // Final CTA
    defineField({
      name: 'finalCTA',
      title: 'Final CTA',
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
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonHref',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact-us',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'tagline',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Corporate Training Service',
        subtitle: subtitle || 'Business Vertical',
      }
    },
  },
})

export default corporateTrainingService


