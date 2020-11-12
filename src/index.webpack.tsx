import React from 'react'
import ReactDOM from 'react-dom'
import FlexBox from './index'
import forwardDynamicTag from './tools/forwardDynamicTag'
import randomcolor from 'randomcolor'

console.log( randomcolor )

forwardDynamicTag.setDefaultDynamicComponent( 'div' )

ReactDOM.render( 
  <React.StrictMode>
    <FlexBox.Row cols={50} sm={20}>
      <FlexBox.Col sm={12} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={20} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={12} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={8} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={12} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={8} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={1} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={1} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={1} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
      <FlexBox.Col sm={1} md={6} lg={4} xl={3} className='test' style={ { backgroundColor: randomcolor(), height: 100 } }/>
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
