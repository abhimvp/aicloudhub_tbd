import { type SchemaTypeDefinition } from 'sanity'
import blogCategory from './blogCategory'
import blogPost from './blogPost'
import jobLocation from './jobLocation'
import jobPosting from './jobPosting'
import service from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogCategory,
    blogPost,
    jobLocation,
    jobPosting,
    service,
  ],
}

