import processQueryResolution from "./processQueryResolution"

const compare = ( left: number, query: string, right: number ) => {
  switch ( query ) {
    case '<': return left < right
    case '>': return left > right
    case '<=': return left <= right
    case '>=': return left >= right
    default: return false
  }
}

const compareQueryResolution = ( query: string, currentResolution: number ) => {
  const { operation, resolution, unit } = processQueryResolution( query )

  return compare( currentResolution, operation, resolution )
}

export default compareQueryResolution
