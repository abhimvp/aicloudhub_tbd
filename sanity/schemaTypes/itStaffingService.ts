import { defineType, defineField } from 'sanity'

const itStaffingService = defineType({
  name: 'itStaffingService',
  title: 'IT Staffing Service',
  type: 'document',
  fields: [
    // Hero section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'badgeLabel',
          title: 'Badge Label',
          type: 'string',
          description: 'Short label shown in the pill (e.g. "IT Staffing").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          description:
            'Main hero heading (e.g. "Build High-Performing Tech Teams with Confidence").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Hero Description',
          type: 'text',
          rows: 3,
          description:
            'Short paragraph under the hero title describing the staffing value proposition.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Hero image displayed on the right side.',
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
          initialValue: 'Learn More',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA Link',
          type: 'string',
          initialValue: '#why-choose',
        }),
      ],
    }),

    // Overview
    defineField({
      name: 'overviewTitle',
      title: 'Overview Title',
      type: 'string',
      initialValue: 'Overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overviewBody',
      title: 'Overview Body',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Paragraphs describing the overall IT staffing offering.',
      validation: (Rule) => Rule.min(1),
    }),

    // Why choose us cards
    defineField({
      name: 'whyChooseCards',
      title: 'Why Choose Our IT Staffing Services',
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
            defineField({
              name: 'iconName',
              title: 'Icon Name (optional)',
              type: 'string',
              description:
                'Optional Lucide icon name to map in code (e.g. "Award", "Zap").',
            }),
          ],
        },
      ],
      description: 'Cards shown in the "Why Choose Our IT Staffing Services?" section.',
    }),

    // Technology domains
    defineField({
      name: 'technologyDomains',
      title: 'Technology Domains',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'List used in "Expertise Across Key Technology Domains" (e.g. AI & Machine Learning, Cloud Architecture & Engineering, ...).',
    }),

    // Engagement models
    defineField({
      name: 'engagementModels',
      title: 'Engagement Models',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'List used in "Flexible Engagement Models" (e.g. Contract Staffing, Contract-to-Hire, ...).',
    }),

    // Staffing approach
    defineField({
      name: 'staffingApproach',
      title: 'Staffing Approach Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'step',
              title: 'Step Number',
              type: 'string',
              description: 'Display number (e.g. "1", "2").',
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
      description: 'Steps shown in the "Our Staffing Approach" section.',
    }),

    // Roles by category
    defineField({
      name: 'rolesByCategory',
      title: 'Roles by Category',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'iconName',
              title: 'Icon Name (optional)',
              type: 'string',
              description:
                'Optional Lucide icon name to map in code (e.g. "Code", "CloudCog").',
            }),
            defineField({
              name: 'roles',
              title: 'Roles',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.min(1),
            }),
          ],
        },
      ],
      description:
        'Categories and roles shown in the "Roles We Support" section.',
    }),

    // Industries
    defineField({
      name: 'industries',
      title: 'Industries We Serve',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of industries shown in the "Industries We Serve" section.',
    }),

    // Value proposition
    defineField({
      name: 'valueProposition',
      title: 'Value Proposition Bullets',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Bullets shown in the "Value Proposition" section (e.g. Reduce time-to-hire, Lower hiring overhead, ...).',
    }),

    // Final CTA
    defineField({
      name: 'finalCta',
      title: 'Final CTA Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Heading for the final CTA (e.g. "Ready to Build Your Dream Team?").',
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
          initialValue: 'Get in Touch',
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
      title: 'hero.title',
      subtitle: 'hero.badgeLabel',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: title || 'IT Staffing Service',
        subtitle: subtitle || 'Business Vertical',
      }
    },
  },
})

export default itStaffingService


