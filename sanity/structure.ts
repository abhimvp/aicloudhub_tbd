import type { StructureResolver } from 'sanity/structure'
import {
  DocumentsIcon,
  DocumentTextIcon,
  TagIcon,
  CaseIcon,
  CodeIcon,
} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Blog Section
      S.listItem()
        .title('Blog')
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .icon(DocumentsIcon)
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('Blog Posts')),
              S.listItem()
                .title('Categories')
                .icon(TagIcon)
                .schemaType('blogCategory')
                .child(S.documentTypeList('blogCategory').title('Blog Categories')),
            ])
        ),

      // Divider
      S.divider(),

      // Careers Section
      S.listItem()
        .title('Careers')
        .icon(CaseIcon)
        .child(
          S.list()
            .title('Careers')
            .items([
              S.listItem()
                .title('Job Postings')
                .icon(CaseIcon)
                .schemaType('jobPosting')
                .child(S.documentTypeList('jobPosting').title('Job Postings')),
              S.listItem()
                .title('Locations')
                .icon(TagIcon)
                .schemaType('jobLocation')
                .child(S.documentTypeList('jobLocation').title('Job Locations')),
            ])
        ),

      // Divider
      S.divider(),

      // Services Section
      S.listItem()
        .title('Services')
        .icon(CodeIcon)
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Services')
                .icon(CodeIcon)
                .schemaType('service')
                .child(
                  S.documentTypeList('service').title('All Services'),
                ),
            ]),
        ),
    ])
