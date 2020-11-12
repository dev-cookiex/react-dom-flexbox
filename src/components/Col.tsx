import { useContext, useMemo } from 'react'
import Row from './Row'
import useNextClosestSizeInProps from '../hooks/useNextClosestSizeInProps'
import useOmitSizeProps from '../hooks/useOmitSizeProps'
import forwardDynamicTag from '../tools/forwardDynamicTag'

const Col = forwardDynamicTag<null, Col.Props>( null, ( { size, ...props } ) => {
  const newProps = useOmitSizeProps( props )
  const csize = useNextClosestSizeInProps( props ) ?? size
  const { cols } = useContext( Row.Context )

  const width = useMemo( () => {
    return `${( csize / cols * 100 ).toFixed( 8 )}%`
  }, [ csize, cols ] )

  return {
    ...newProps,
    style: { flex: '0 0 auto', width, ...props.style },
  }
} )

namespace Col {
  export type Props = { size?: number } & { [K in FlexBox.Sizes]?: number }
}

export = Col