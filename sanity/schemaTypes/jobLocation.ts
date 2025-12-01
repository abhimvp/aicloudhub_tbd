import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobLocation',
  title: 'Job Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'e.g., "Hyderabad", "Bangalore (Hybrid)", "Remote - India"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for this location',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Ordering of locations in filters (lower numbers appear first)',
      initialValue: 0,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this location can be selected on job postings',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      isActive: 'isActive',
    },
    prepare({title, subtitle, isActive}) {
      return {
        title: title || 'Untitled Location',
        subtitle: `${subtitle || 'No slug'}${isActive ? '' : ' (Inactive)'}`,
      }
    },
  },
})


