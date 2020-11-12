import { useContext, useMemo } from 'react'

import System from '../components/System'
import getkeys from '../tools/getKeys'
import omit from '../tools/omit'

const useOmitSizeProps = <P>( props: P ) => {
  const { sizes } = useContext( System.Context )

  const newProps = useMemo( () => {
    return omit( props, ...getkeys( sizes ) as any )
  }, [ props, sizes ] )

  return newProps as Omit<P, globalThis.FlexBox.Sizes>
}

export default useOmitSizeProps
