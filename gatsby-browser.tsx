import type { GatsbyBrowser } from 'gatsby'

import { PageElement, RootElement } from './src/Root/RootElement'

import './src/styles/tailwind-generated.css'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = RootElement

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = PageElement
