import React from 'react'

import { RootLayout } from './RootLayout'

import type { GatsbyElementType } from '~/types/GatsbyElementTypes'

export const RootElement: GatsbyElementType = ({ element }) => {
  return <React.Fragment>{element}</React.Fragment>
}

export const PageElement: GatsbyElementType = ({ element }) => {
  return <RootLayout>{element}</RootLayout>
}
