import { useContext, useMemo } from 'react'
import System from '../components/System'
import getkeys from '../tools/getKeys'
import useCurrentSizeKey from './useCurrentSizeKey'

const useNextClosestSizeInProps = ( props: any, prefix = '', sufix = '' ) => {
  const { sizes } = useContext( System.Context )
  const keys = useMemo( () => getkeys( sizes ), [ sizes ] )
  const current = useCurrentSizeKey()
  
  return useMemo( () => {
    let value = props[current]
    let index = keys.indexOf( current )

    while( !value && index ) {
      value = props[`${prefix}${keys[--index]}${sufix}`]
    }

    return value
  }, [ keys, current, props ] )
}

export default useNextClosestSizeInProps
