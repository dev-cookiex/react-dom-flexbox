import React, { createContext, PropsWithChildren, ReactNode } from 'react'
import sortObjectSizes from '../tools/sortObjectSizes'

const Context = createContext<System.Context>( {
  sizes: sortObjectSizes( { xs: '<576px', sm: '>=576px', md: '>=768px', lg: '>=992px', xl: '>=1200px' } )
} )

const System: System = ( { sizes, children } ) => {
  return (
    <Context.Provider value={ { sizes } }>
      {children}
    </Context.Provider>
  )
}

System.Context = Context

interface System {
  ( props: System.Props ): JSX.Element
  Context: typeof Context
}

namespace System {
  export interface Context {
    sizes: { [K in FlexBox.Sizes]: string }
  }
  export type Props = PropsWithChildren<{
    sizes: { [K in FlexBox.Sizes]: string }
  }>
}

export = System
