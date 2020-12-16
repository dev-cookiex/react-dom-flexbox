import forwardComponent from '@cookiex-react/forward-component'

import React, { createContext, PropsWithChildren, useMemo } from 'react'

import useNextClosestSizeInProps from '../hooks/useNextClosestSizeInProps'
import useOmitSizeProps from '../hooks/useOmitSizeProps'

const Context = createContext( { cols: 12 } )

const RowComponent = forwardComponent<PropsWithChildren<Row.Props>>(
  ( { cols: colsProp = 12, ...props }, Component ) => {
    const cols = useNextClosestSizeInProps( props ) ?? colsProp
    const { style: propStyle, ...realProps } = useOmitSizeProps( props ) as any
    const style = useMemo( () => ( {
      display: 'flex',
      flexWrap: 'wrap',
      ...propStyle
    } ), [ propStyle ] )

    return (
      <Context.Provider value={ { cols } }>
        <Component {...realProps} style={style}/>
      </Context.Provider>
    )
  }
)

RowComponent.displayName = 'Row'

const Row = Object.assign( RowComponent, { Context } )

namespace Row {
  export type Props = { cols?: number } & { [K in globalThis.FlexBox.Sizes]?: number }
}

export = Row
