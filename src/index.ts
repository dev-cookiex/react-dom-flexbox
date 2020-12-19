/* eslint-disable @typescript-eslint/no-unused-vars */

import FlexBoxCol from './components/Col'
import FlexBoxConfigure from './components/Configure'
import FlexBoxRow from './components/Row'
import FlexBoxSystem from './components/System'

namespace FlexBox {
  export import System = FlexBoxSystem
  export import Col = FlexBoxCol
  export import Row = FlexBoxRow
  export import Configure = FlexBoxConfigure
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
