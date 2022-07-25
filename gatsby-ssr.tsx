import type { GatsbySSR } from 'gatsby'

import { PageElement, RootElement } from './src/root/RootElement'

import './src/styles/tailwind-generated.css'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = RootElement

export const wrapPageElement: GatsbySSR['wrapPageElement'] = PageElement
