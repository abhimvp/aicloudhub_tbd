import { defineType, defineField } from 'sanity'
import { CodeIcon } from '@sanity/icons'

const technologyServicesSettings = defineType({
  name: 'technologyServicesSettings',
  title: 'Technology Services Settings',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'businessVerticals',
      title: 'Business Vertical Services (Hero Tabs Row 1)',
      type: 'array',
      of: [{ type: 'homepageTechnologyService' }],
      description:
        'Core business vertical services that appear as the first row of tabs (e.g. Staffing, Corporate Training, IT Services).',
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: 'offerings',
      title: 'Other Technology Offerings (Hero Tabs Row 2)',
      type: 'array',
      of: [{ type: 'homepageTechnologyService' }],
      description:
        'Additional technology offerings that appear as the second row of tabs (e.g. AI/ML, Cloud, Applications, Data & Analytics).',
      validation: (Rule) => Rule.min(1).max(8),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Technology Services Settings',
        subtitle: 'Business Verticals & Offerings (Homepage Tabs)',
      }
    },
  },
})

export default technologyServicesSettings


