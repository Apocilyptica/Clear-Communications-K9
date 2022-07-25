import type { PageLinkType } from './GatsbyPageTypes/PageLinkType'
import type { TemplateType } from './GatsbyPageTypes/TemplateTypes'

export interface RootStaticDataTypes {
  key: string
  slug: PageLinkType
  templateType: TemplateType
}
