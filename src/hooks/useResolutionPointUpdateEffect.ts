import { useEffect, useState } from 'react'

import useCurrentSizeKey from './useCurrentSizeKey'

const useResoltionPointUpdateEffect = (
  callback: ( size: globalThis.FlexBox.Sizes ) => void | ( () => void )
) => {
  const [ saveCallback ] = useState( callback.bind( callback ) )
  const key = useCurrentSizeKey()

  useEffect( () => {
    return saveCallback( key )
  }, [ saveCallback, key ] )
}

export default useResoltionPointUpdateEffect
