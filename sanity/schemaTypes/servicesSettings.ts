import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

const servicesSettings = defineType({
  name: 'servicesSettings',
  title: 'Services Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'heroSectionBusinessVerticals',
      title: 'Hero Section – Business Verticals',
      type: 'array',
      description:
        'Business vertical services shown in the homepage hero section (ideally 3).',
      of: [{ type: 'heroBusinessVertical' }],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Services Settings',
        subtitle: 'Hero Section Business Verticals',
      }
    },
  },
})

export default servicesSettings


