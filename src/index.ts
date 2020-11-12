import FlexboxSystem from './components/System'
import FlexboxCol from './components/Col'
import FlexboxRow from './components/Row'
import { ComponentType } from 'react'

namespace FlexBox {
  export import System = FlexboxSystem
  export import Col = FlexboxCol
  export import Row = FlexboxRow
}

declare global {
  namespace FlexBox {
    export interface Configuration {
      defaultDynamicComponent: null
    }
    export type DefaultDynamicComponent =
      Configuration['defaultDynamicComponent'] extends null ? 'div' : Configuration['defaultDynamicComponent']

    export type Boostrap = true
    export type DefaultSizes = []
    export type AllSizes = Boostrap extends true ? [ 'xs', 'sm', 'md', 'lg', 'xl', ...DefaultSizes ] : DefaultSizes
    export type Sizes = AllSizes extends ( infer S )[] ? S : never
  }
}

export = FlexBox
