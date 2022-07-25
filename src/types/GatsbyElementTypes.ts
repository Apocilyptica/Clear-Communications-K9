import type { PageProps } from 'gatsby'

import type { DivElementProps } from './IntrinsicElements/DivElementProps'

import type { PagesStaticDataTypes } from '~/staticData'

export type ElementProps = {
  element?: React.ReactElement
}

export type GatsbyElementType = (props: ElementProps) => React.ReactElement

export type ElementPageProps = PageProps<GatsbyElementType>

export interface IndexPageProps {
  path: string
  pageMetaData: PagesStaticDataTypes
}

export interface RootLayoutProps extends DivElementProps {
  props: IndexPageProps
}
