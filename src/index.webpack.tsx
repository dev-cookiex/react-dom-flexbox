import Animated from '@cookiex-react/dom-animated'

import React from 'react'
import ReactDOM from 'react-dom'

import randomcolor from 'randomcolor'

import FlexBox from './index'
import forwardDynamicTag from './tools/forwardDynamicTag'

forwardDynamicTag.setDefaultDynamicComponent( 'div' )

ReactDOM.render( 
  <React.StrictMode>
    <FlexBox.Row xl={12} lg={10} md={6} sm={4} as={Animated.Animation} style={ {} }>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col size={2} style={ { backgroundColor: randomcolor(), height: 100 } }/>
    </FlexBox.Row>
  </React.StrictMode>
  , document.body )

// declare global {
//   export namespace FlexBox {
//     export interface Configuration {
//       defaultDynamicComponent: 'img'
//     }
//   }
// }
