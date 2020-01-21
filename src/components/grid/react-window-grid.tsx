import React from 'react'
import FixedSizeGridComponent from './react-window-grid-component'

const ReactWindowGrid = ((props:any) => {
  interface LargeDataProps {
    options: string[]
  }
  function generateOption(): any {
    let options = []
    for (let i = 0; i < 100000; i++) {
      options.push('Options ' + (i + 1))
    }
    return options
  }
  
  return (
    <div style={{height:"500px", width:"100%"}}>
      <FixedSizeGridComponent options={generateOption()}/>
    </div>
  )
})

export default ReactWindowGrid