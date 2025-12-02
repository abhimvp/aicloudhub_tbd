import { defineField, defineType } from 'sanity'
import { Layers, Monitor, LayoutTemplate, Type, Image as ImageIcon, Grid, List } from 'lucide-react'


export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    icon: Layers,
    groups: [
        { name: 'main', title: 'Main Info' },
        { name: 'homepage', title: 'Homepage Display' },
        { name: 'content', title: 'Page Content' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        // Main Info
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            group: 'main',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'main',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'main',
            options: {
                list: [
                    { title: 'Business Vertical', value: 'Business Vertical' },
                    { title: 'Offering Service', value: 'Offering Service' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),

        // Homepage Display Info
        defineField({
            name: 'homepageInfo',
            title: 'Homepage Display Info',
            type: 'object',
            group: 'homepage',
            fields: [
                defineField({
                    name: 'tagline',
                    title: 'Tagline',
                    type: 'string',
                    description: 'Subtitle shown on Homepage cards/tabs (e.g., "AI & Machine Learning")',
                }),
                defineField({
                    name: 'summary',
                    title: 'Summary',
                    type: 'text',
                    rows: 3,
                    description: 'Short description for Homepage cards/tabs.',
                }),
                defineField({
                    name: 'previewImage',
                    title: 'Preview Image',
                    type: 'image',
                    options: { hotspot: true },
                    description: 'Image used on Homepage cards/tabs.',
                }),
            ],
        }),

        // Technology Tabs Specific Display
        defineField({
            name: 'technologyTabsInfo',
            title: 'Technology Tabs Display',
            type: 'object',
            group: 'homepage',
            description: 'Specific content for the "Technology Services" tabs section on the homepage.',
            fields: [
                defineField({
                    name: 'tabLabel',
                    title: 'Tab Label',
                    type: 'string',
                    description: 'Small label above the heading (e.g., "IT STAFFING"). Defaults to Service Title if empty.',
                }),
                defineField({
                    name: 'tabHeading',
                    title: 'Tab Heading',
                    type: 'string',
                    description: 'Main heading for the tab content (e.g., "Access top-tier tech talent...").',
                }),
                defineField({
                    name: 'tabDescription',
                    title: 'Tab Description',
                    type: 'text',
                    rows: 3,
                    description: 'Primary description paragraph.',
                }),
                defineField({
                    name: 'tabHighlight',
                    title: 'Tab Highlight / Sub-description',
                    type: 'text',
                    rows: 2,
                    description: 'Secondary highlight text (e.g., "Our IT staffing solutions...").',
                }),
                defineField({
                    name: 'tabButtonLabel',
                    title: 'Button Label',
                    type: 'string',
                    description: 'Label for the CTA button (e.g., "Explore IT Staffing").',
                }),
                defineField({
                    name: 'tabImage',
                    title: 'Tab Image',
                    type: 'image',
                    options: { hotspot: true },
                    description: 'Large image displayed on the left side of the tab panel.',
                }),
            ],
        }),

        // Page Builder Content
        defineField({
            name: 'content',
            title: 'Page Content',
            type: 'array',
            group: 'content',
            of: [
                // Hero Section Block
                {
                    type: 'object',
                    name: 'heroSection',
                    title: 'Hero Section',
                    icon: LayoutTemplate,
                    fields: [
                        defineField({ name: 'title', type: 'string', title: 'Title' }),
                        defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
                        defineField({ name: 'description', type: 'text', title: 'Description' }),
                        defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
                        defineField({
                            name: 'ctas',
                            title: 'Call to Actions',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'label', type: 'string', title: 'Label' }),
                                        defineField({ name: 'link', type: 'string', title: 'Link' }),
                                        defineField({ name: 'variant', type: 'string', options: { list: ['primary', 'secondary'] }, title: 'Variant' }),
                                    ],
                                },
                            ],
                        }),
                    ],
                    preview: {
                    },
                },
                // 2. Rich Text (Full Width)
                {
                    name: 'richText',
                    type: 'object',
                    title: 'Rich Text Content',
                    fields: [
                        {
                            name: 'content',
                            type: 'array',
                            title: 'Content',
                            of: [{ type: 'block' }],
                        },
                    ],
                    preview: {
                        select: {
                            content: 'content',
                        },
                        prepare(selection) {
                            return {
                                title: 'Rich Text Section',
                            };
                        },
                    },
                },
                // 3. Text With Image
                {
                    name: 'textWithImage',
                    type: 'object',
                    title: 'Text With Image',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Heading',
                        },
                        {
                            name: 'text',
                            type: 'array',
                            title: 'Text Content',
                            of: [{ type: 'block' }],
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: { hotspot: true },
                        },
                        {
                            name: 'imagePosition',
                            type: 'string',
                            title: 'Image Position',
                            options: {
                                list: [
                                    { title: 'Left', value: 'left' },
                                    { title: 'Right', value: 'right' },
                                ],
                            },
                            initialValue: 'right',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            media: 'image',
                        },
                        prepare(selection) {
                            return {
                                title: selection.title || 'Text With Image',
                                media: selection.media,
                            }
                        },
                    },
                },
                // 4. Features Grid
                {
                    name: 'featuresGrid',
                    type: 'object',
                    title: 'Features Grid',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Section Heading',
                        },
                        {
                            name: 'features',
                            type: 'array',
                            title: 'Features',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Title' },
                                        { name: 'description', type: 'text', title: 'Description' },
                                        { name: 'link', type: 'string', title: 'Link URL (Optional)' },
                                        { name: 'linkLabel', type: 'string', title: 'Link Label (e.g., Learn More)' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                // 5. Accordion (FAQ)
                {
                    name: 'accordionSection',
                    type: 'object',
                    title: 'Accordion / FAQ',
                    fields: [
                        {
                            name: 'heading',
                            type: 'string',
                            title: 'Section Heading',
                        },
                        {
                            name: 'items',
                            type: 'array',
                            title: 'Accordion Items',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Title' },
                                        { name: 'content', type: 'text', title: 'Content' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                // 6. Detailed Cards (for Core Offerings/Categories)
                {
                    name: 'detailedCards',
                    type: 'object',
                    title: 'Detailed Cards Grid',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Section Heading' },
                        {
                            name: 'cards',
                            type: 'array',
                            title: 'Cards',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Title' },
                                        { name: 'description', type: 'text', title: 'Description' },
                                        {
                                            name: 'listTitle',
                                            type: 'string',
                                            title: 'List Title (e.g., "Topics Include")',
                                        },
                                        {
                                            name: 'listItems',
                                            type: 'array',
                                            title: 'List Items',
                                            of: [{ type: 'string' }],
                                        },
                                        {
                                            name: 'footerText',
                                            type: 'string',
                                            title: 'Footer/Highlight Text (e.g., "Why it matters")',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                // 7. List Section (for Industries, Roles, etc.)
                {
                    name: 'listSection',
                    type: 'object',
                    title: 'List Section',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Section Heading' },
                        { name: 'description', type: 'text', title: 'Section Description' },
                        {
                            name: 'layout',
                            type: 'string',
                            title: 'Layout Style',
                            options: {
                                list: [
                                    { title: 'Grid (Cards)', value: 'grid' },
                                    { title: 'Simple List (Bullets)', value: 'list' },
                                    { title: 'Two Columns', value: 'columns' },
                                ],
                            },
                            initialValue: 'list',
                        },
                        {
                            name: 'items',
                            type: 'array',
                            title: 'List Items',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Title (Optional)' },
                                        { name: 'description', type: 'text', title: 'Description (Optional)' },
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                            subtitle: 'description',
                                        },
                                        prepare({ title, subtitle }) {
                                            return {
                                                title: title || subtitle || 'List Item',
                                            };
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                // 8. Process Steps (for Staffing Approach)
                {
                    name: 'processSteps',
                    type: 'object',
                    title: 'Process Steps',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Section Heading' },
                        {
                            name: 'steps',
                            type: 'array',
                            title: 'Steps',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Step Title' },
                                        { name: 'description', type: 'text', title: 'Step Description' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                // 9. CTA Section
                {
                    name: 'ctaSection',
                    type: 'object',
                    title: 'CTA Section',
                    fields: [
                        { name: 'heading', type: 'string', title: 'Heading' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'buttonText', type: 'string', title: 'Button Text' },
                        { name: 'buttonLink', type: 'string', title: 'Button Link' },
                    ],
                },
            ],
        }),

        // SEO
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            group: 'seo',
            fields: [
                defineField({ name: 'metaTitle', type: 'string', title: 'Meta Title' }),
                defineField({ name: 'metaDescription', type: 'text', title: 'Meta Description' }),
                defineField({ name: 'ogImage', type: 'image', title: 'Open Graph Image' }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'homepageInfo.previewImage',
        },
    },
})
