import React, { FC } from 'react';
import ReactWindowInfiniteComponent from './react-window-infinite-component'
interface LargeDataProps {
  options: string[]
}
function generateOption(): any {
  let options = []
  for (let i = 0; i < 1000000; i++) {
    options.push('Options ' + (i + 1))
  }
  return options
}


const ReactWindowInfinite: FC<LargeDataProps> = (props: any) => {
  
  return (
    <div style={{height:"700px", width:"100%"}}>
      <ReactWindowInfiniteComponent options={generateOption()}/>
    </div>
  )
}

export default ReactWindowInfinite;