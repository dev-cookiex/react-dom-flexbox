import React, { createContext, PropsWithChildren } from 'react'

import useNextClosestSizeInProps from '../hooks/useNextClosestSizeInProps'
import forwardDynamicTag from '../tools/forwardDynamicTag'

const Context = createContext( { cols: 12 } )

const Row = forwardDynamicTag<null, Row.Props, Row.Assing>(
  null,
  ( { cols: _cols, ...props } ) => {
    return {
      ...props,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        ...props.style
      }
    }
  },
  ( { children, cols: colsProp = 12, ...props }: PropsWithChildren<Row.Props> ) => {
    const cols = useNextClosestSizeInProps( props ) ?? colsProp
    return (
      <Row.Context.Provider value={ { cols } }>
        {children}
      </Row.Context.Provider>
    )
  },
  { Context }
)

namespace Row {
  export interface Assing {
    Context: typeof Context
  }
  export type Props = { cols?: number } & { [K in globalThis.FlexBox.Sizes]?: number }
}

export = Row
