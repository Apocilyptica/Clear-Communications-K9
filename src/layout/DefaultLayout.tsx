import type React from 'react'

import type { DivElementProps } from '~/types/IntrinsicElements/DivElementProps'

export const DefaultLayout: React.FC<DivElementProps> = ({ children, ...divElementProps }) => {
  return <div {...divElementProps}>{children}</div>
}
