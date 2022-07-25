import type { FC, PropsWithChildren } from 'react'

import loadable from '@loadable/component'

import { DefaultLayout } from '~/layout/DefaultLayout'

const Footer = loadable(() => import('../components/Footer'))
const NavigationBar = loadable(() => import('../components/NavigationBar'))

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <DefaultLayout>
      <NavigationBar />
      {children}
      <Footer />
    </DefaultLayout>
  )
}
