import { type SchemaTypeDefinition } from 'sanity'
import blogCategory from './blogCategory'
import blogPost from './blogPost'
import jobLocation from './jobLocation'
import jobPosting from './jobPosting'
import heroBusinessVertical from './heroBusinessVertical'
import servicesSettings from './servicesSettings'
import homepageTechnologyService from './homepageTechnologyService'
import technologyServicesSettings from './technologyServicesSettings'
import itStaffingService from './itStaffingService'
import corporateTrainingService from './corporateTrainingService'
import itServicesService from './itServicesService'
import serviceOffering from './serviceOffering'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogCategory,
    blogPost,
    jobLocation,
    jobPosting,
    heroBusinessVertical,
    servicesSettings,
    homepageTechnologyService,
    technologyServicesSettings,
    itStaffingService,
    corporateTrainingService,
    itServicesService,
    serviceOffering,
  ],
}

