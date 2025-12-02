import React from 'react'
import HeroBlock from '../blocks/HeroBlock'
import TextWithImageBlock from '../blocks/TextWithImageBlock'
import FeaturesGridBlock from '../blocks/FeaturesGridBlock'
import AccordionBlock from '../blocks/AccordionBlock'
import RichTextBlock from '../blocks/RichTextBlock'
import DetailedCardsBlock from '../blocks/DetailedCardsBlock'
import ListBlock from '../blocks/ListBlock'
import ProcessStepsBlock from '../blocks/ProcessStepsBlock'
import CTABlock from '../blocks/CTABlock'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ServiceComponents: Record<string, React.ComponentType<any>> = {
    heroSection: HeroBlock,
    textWithImage: TextWithImageBlock,
    featuresGrid: FeaturesGridBlock,
    accordionSection: AccordionBlock,
    richText: RichTextBlock,
    detailedCards: DetailedCardsBlock,
    listSection: ListBlock,
    processSteps: ProcessStepsBlock,
    ctaSection: CTABlock,
}
