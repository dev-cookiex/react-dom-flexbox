import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import System from '../components/System'
import compareQueryResolution from '../tools/compareQueryResolution'
import getkeys from '../tools/getKeys'

const useCurrentSizeKey = () => {
  const { sizes } = useContext( System.Context )
  const calc = useCallback( () => {
    return getkeys( sizes ).find( size => compareQueryResolution( sizes[size], window.innerWidth ) )
  }, [] )
  const initialSize = useMemo( () => calc(), [ calc ] )
  const [ key, setKey ] = useState( initialSize )

  useEffect( () => {
    const handler = () => {
      const nkey = calc()
      console.log( window.innerWidth, nkey )
      if ( key !== nkey ) setKey( nkey )
    }
    window.addEventListener( 'resize', handler )
    return () => {
      window.removeEventListener( 'resize', handler )
    }
  }, [] )

  return key
}

export default useCurrentSizeKey
