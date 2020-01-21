import React, { FC } from 'react';
import ReactWindowComponent from './react-window-list-component'
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


const ReactWindowList: FC<LargeDataProps> = (props: any) => {
  
  return (
    <div style={{height:"700px", width:"100%"}}>
      <ReactWindowComponent options={generateOption()}/>
    </div>
  )
}

export default ReactWindowList;