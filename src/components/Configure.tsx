import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'

const Configure = ( { useInitialSystemNull = false, children }: PropsWithChildren<Configure.Props> ) => {
  const [ initialSystemNull, setInitialSystemNull ] = useState( useInitialSystemNull )

  useEffect( () => setInitialSystemNull( false ), [] )

  const value = useMemo( () => ( { useInitialSystemNull: initialSystemNull } ), [ initialSystemNull ] )

  return (
    <Configure.Context.Provider value={value}>
      {children}
    </Configure.Context.Provider>
  )
}

Configure.Context = createContext<Configure.Context>( {
  useInitialSystemNull: false
} )

Configure.displayName = 'FlexBoxConfigure'

const useInitialSystemNull = () => useContext( Configure.Context ).useInitialSystemNull

Configure.useInitialSystemNull = useInitialSystemNull

namespace Configure {
  export interface Context {
    useInitialSystemNull: boolean
  }
  export interface Props {
    useInitialSystemNull?: boolean
  }
}

export = Configure
