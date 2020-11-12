import processQueryResolution from './processQueryResolution'

const already = Symbol( 'already' )

const sortObjectSizes = <T>( object: T ) => {
  if ( sortObjectSizes.already( object ) ) return object
  const sortedObjectSize = Object.fromEntries(
    Object.entries( object )
      .sort( ( [ , queryStringA ], [ , queryStringB ] ) => {
        const queryA = processQueryResolution( queryStringA )
        const queryB = processQueryResolution( queryStringB )
        if ( queryA.resolution < queryB.resolution ) return 1
        if ( queryA.resolution > queryB.resolution ) return -1
        return -1
      } )
  ) as T
  Object.defineProperty( sortedObjectSize, already, { enumerable: false, value: true, writable: false } )
  return sortedObjectSize
}

sortObjectSizes.already = ( object: any ) => already in object

export default sortObjectSizes
