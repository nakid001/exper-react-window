import React, { FC } from 'react';
import ReactWindowColumnComponent from './react-window-column-component'
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


const ReactWindowColumn: FC<LargeDataProps> = (props: any) => {
  
  return (
    <div style={{height:"700px", width:"700px"}}>
      <ReactWindowColumnComponent options={generateOption()}/>
    </div>
  )
}

export default ReactWindowColumn;