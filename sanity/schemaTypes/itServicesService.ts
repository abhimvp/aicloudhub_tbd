import { defineType, defineField } from 'sanity'

const itServicesService = defineType({
  name: 'itServicesService',
  title: 'IT Services Service',
  type: 'document',
  fields: [
    // Hero / page identity
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeLabel',
          title: 'Badge Label',
          type: 'string',
          description: 'Short label in the pill (e.g. "IT Services").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'titlePrefix',
          title: 'Hero Title Prefix',
          type: 'string',
          description:
            'First line of the hero title (e.g. "Transforming Businesses with").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'titleHighlight',
          title: 'Hero Title Highlight',
          type: 'string',
          description:
            'Highlighted part of the hero title (e.g. "Modern and Intelligent IT Services").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          description:
            'Short paragraph describing the IT services offering shown under the title.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Main hero image shown on the right.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryCtaLabel',
          title: 'Primary CTA Label',
          type: 'string',
          initialValue: 'Get Started',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Primary CTA Link',
          type: 'string',
          initialValue: '/contact-us',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Secondary CTA Label',
          type: 'string',
          initialValue: 'Explore Solutions',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA Link',
          type: 'string',
          initialValue: '#offerings',
        }),
      ],
    }),

    // Overview
    defineField({
      name: 'overviewTitle',
      title: 'Overview Title',
      type: 'string',
      initialValue: 'IT Services — Overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overviewBody',
      title: 'Overview Body',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Paragraphs for the overview section.',
      validation: (Rule) => Rule.min(1),
    }),

    // Core services (accordion)
    defineField({
      name: 'coreServices',
      title: 'Core IT Service Offerings',
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
              title: 'Short Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name',
              type: 'string',
              description:
                'Optional Lucide icon name (e.g. "BrainCircuit", "CloudCog", "AppWindow", "BarChart3").',
            }),
            defineField({
              name: 'deliverables',
              title: 'Deliverables',
              type: 'array',
              of: [{ type: 'string' }],
              description:
                'List of what is delivered for this core service (left column of accordion details).',
              validation: (Rule) => Rule.min(1),
            }),
            defineField({
              name: 'businessImpact',
              title: 'Business Impact',
              type: 'array',
              of: [{ type: 'string' }],
              description:
                'Bullets describing the business impact (right column of accordion details).',
              validation: (Rule) => Rule.min(1),
            }),
          ],
        },
      ],
      description:
        'Configuration for "Our Core IT Service Offerings" section and its accordion.',
    }),

    // Industries
    defineField({
      name: 'industries',
      title: 'Industries We Support',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'List used in "Industries We Support" (e.g. Retail & E-Commerce, Telecom, Banking & FinTech, ...).',
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
          initialValue: 'Why Choose aicloudhub for IT Services?',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'reasons',
          title: 'Reasons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Reason Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'description',
                  title: 'Reason Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          description:
            'Cards shown under "Why Choose aicloudhub for IT Services?" section.',
        }),
      ],
    }),

    // Final CTA
    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Ready to Accelerate Your Digital Transformation?',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            "Let's discuss how our IT services can help you build, scale, and transform your business with smart, secure solutions.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Start Your Journey',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'buttonHref',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact-us',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.titleHighlight',
      subtitle: 'hero.badgeLabel',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'IT Services Service',
        subtitle: subtitle || 'Business Vertical',
      }
    },
  },
})

export default itServicesService


