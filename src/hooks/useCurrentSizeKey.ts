import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import System from '../components/System'
import compareQueryResolution from '../tools/compareQueryResolution'
import getkeys from '../tools/getKeys'
import getWindowWidth from '../tools/getWindowWidth'

const findCompareCallback = ( sizes: any ) =>
  ( size: any ) => compareQueryResolution( sizes[size], getWindowWidth() )

const useCurrentSizeKey = () => {
  const { sizes } = useContext( System.Context )
  const keys = useMemo( () => getkeys( sizes ), [ sizes ] )
  const calc = useCallback( () => keys.find( findCompareCallback( sizes ) ), [ sizes, keys ] )

  const initialSize = useMemo( () => calc(), [ calc ] )

  const [ key, setKey ] = useState( initialSize )

  useEffect( () => {
    const nkey = calc()
    if ( key !== nkey ) setKey( nkey )
  }, [ key, calc ] )

  useEffect( () => {
    const handler = () => {
      const nkey = calc()
      if ( key !== nkey ) setKey( nkey )
    }
    window.addEventListener( 'resize', handler )
    return () => {
      window.removeEventListener( 'resize', handler )
    }
  }, [ calc, key ] )

  return key
}

export default useCurrentSizeKey
