import forwardComponent from '@cookiex-react/forward-component'

import React, { CSSProperties, useContext, useMemo } from 'react'

import useNextClosestSizeInProps from '../hooks/useNextClosestSizeInProps'
import useOmitSizeProps from '../hooks/useOmitSizeProps'
import { useInitialSystemNull } from './Configure'
import Row from './Row'

const ColDefaultStyle = {
  position: 'relative',
  width: '100%'
}

const Col = forwardComponent<Col.Props>( ( { size, ...props }: Col.Props & { style?: any }, Component ) => {
  const newProps = useOmitSizeProps( props )
  const csize = useNextClosestSizeInProps( props ) ?? size
  const { cols } = useContext( Row.Context )

  const dsize = useMemo( () => {
    if ( typeof csize === 'string' ) return csize

    if ( !csize ) return '100%'

    return `${( csize / cols * 100 ).toFixed( 8 )}%`
  }, [ csize, cols ] )

  const maxWidth = useMemo( () => dsize, [ dsize ] )

  const flexBasis = useMemo( () => csize ? dsize : 0, [ dsize, csize ] )

  const flexGrow = useMemo( () => csize ? 0 : 1, [ csize ] )

  const flexShrink = useMemo( () => 0, [] )

  const flex = useMemo( () => ( { flexGrow, flexBasis, flexShrink } ), [ flexGrow, flexBasis, flexShrink ] )

  const initialSystemNull = useInitialSystemNull()

  const style = useMemo( (): CSSProperties => {

    if ( initialSystemNull ) return {}
    
    return { ...flex, maxWidth, ...ColDefaultStyle, ...props.style }
  }, [ flex, maxWidth, props.style, initialSystemNull ] )

  return <Component {...newProps} style={style}/>
} )

Col.displayName = 'Col'

namespace Col {
  export type Props = { size?: number | 'auto' } & { [K in globalThis.FlexBox.Sizes]?: number | 'auto' }
}

export = Col
