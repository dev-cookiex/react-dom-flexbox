const getWindowWidth = () => {
  if ( getWindowWidth.customGetter ) return getWindowWidth.customGetter()
  if ( typeof window !== 'undefined' ) return window.innerWidth
  return 0
}

getWindowWidth.customGetter = null as null | ( () => number )

export default getWindowWidth
