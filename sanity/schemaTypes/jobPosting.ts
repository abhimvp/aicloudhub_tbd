import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      description: 'Job title (e.g., "Azure Data Engineer", "AI Experience Designer")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'jobLocation'}]}],
      description: 'One or more locations for this role',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('Select at least one location for this role'),
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      description: 'Type of employment',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Hybrid', value: 'Hybrid' },
          { title: 'Remote', value: 'Remote' },
          { title: 'On-site', value: 'On-site' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experienceLevel',
      title: 'Experience Level',
      type: 'string',
      description: 'Required experience level',
      options: {
        list: [
          { title: 'Entry (0-3 years)', value: 'Entry (0-3 years)' },
          { title: 'Mid (3-7 years)', value: 'Mid (3-7 years)' },
          { title: 'Senior (7+ years)', value: 'Senior (7+ years)' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'snippet',
      title: 'Snippet',
      type: 'text',
      description: 'Short description shown in job listings (1-2 sentences)',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'descriptionMarkdown',
      title: 'Job Description (Markdown)',
      type: 'text',
      description:
        'Optional: main job description written in Markdown, used by the website when present.',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Show this job posting on the careers page',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Date and time when the job was published',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'applicationEmail',
      title: 'Application Email',
      type: 'string',
      description: 'Optional: Custom email address to receive applications for this job. Leave empty to use default.',
      validation: (Rule) => Rule.email(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      locations: 'locations',
      isActive: 'isActive',
    },
    prepare({ title, locations = [], isActive }) {
      const locationNames =
        Array.isArray(locations) && locations.length > 0
          ? locations
              .map((loc: any) => loc?.name || loc?._ref || 'Unnamed')
              .join(' • ')
          : 'No locations';
      return {
        title: title || 'Untitled Job',
        subtitle: `${locationNames}${isActive ? '' : ' (Inactive)'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, Newest',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date, Oldest',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
})

