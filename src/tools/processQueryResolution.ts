const queryRegExp = /^(?<operation>(<|>)=?)(?<resolution>[0-9]{1,})(?<unit>(px))$/

const processQueryResolution = ( query: string ) => {
  const result = queryRegExp.exec( query )
  if ( !result || !result.groups ) throw new Error( '' )
  const { operation, resolution: resolutionString, unit } = result.groups
  const resolution = parseInt( resolutionString )

  return { operation, resolution, unit }
}

export default processQueryResolution
