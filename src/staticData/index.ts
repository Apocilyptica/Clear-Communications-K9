import { HomePageData } from './homePage'

import type { HomePageStaticDataTypes } from '~/types/StaticDataTypes/PageStaticData/HomePage'

export interface PagesStaticDataTypes {
  homePage?: HomePageStaticDataTypes
}

export const PagesStaticData = [HomePageData]

interface GatsbyCreateNodeDataType extends PagesStaticDataTypes {
  key: string
}

const data: GatsbyCreateNodeDataType = {
  key: '1d5fb806-b635-4ea0-9cb0-9b36533551c9',
}

PagesStaticData.map(staticData => {
  data[staticData.nodeName] = staticData
})

export const pageContentStaticData = data
