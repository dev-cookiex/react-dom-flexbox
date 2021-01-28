import forwardComponent from '@cookiex-react/forward-component'

import React, { createContext, PropsWithChildren, useMemo } from 'react'

import useNextClosestSizeInProps from '../hooks/useNextClosestSizeInProps'
import useOmitSizeProps from '../hooks/useOmitSizeProps'

const Context = createContext( { cols: 12 } )

const RowComponent = forwardComponent<PropsWithChildren<Row.Props>>(
  ( Component, { cols: colsProp = 12, ...props }, ref ) => {
    const cols = useNextClosestSizeInProps( props ) ?? colsProp
    const { style: propStyle, ...realProps } = useOmitSizeProps( props ) as any
    const style = useMemo( () => ( {
      display: 'flex',
      flexWrap: 'wrap',
      ...propStyle
    } ), [ propStyle ] )

    return (
      <Context.Provider value={ { cols } }>
        <Component {...realProps} style={style} ref={ref}/>
      </Context.Provider>
    )
  }
)

const Row = Object.assign( RowComponent, { Context, displayName: 'Row' } )

namespace Row {
  export type Props = { cols?: number } & { [K in globalThis.FlexBox.Sizes]?: number }
}

export = Row
