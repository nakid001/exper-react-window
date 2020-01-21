import React, { FC } from 'react';

interface LargeDataProps {
  options: string[]
}
function generateOption(): any {
  let options = []
  for (let i = 0; i < 100000; i++) {
    options.push('Options ' +  (i + 1))
  }
  return options
}


const NormalList: FC<LargeDataProps> = (props: any) => {
  let normalOutputList:any = []
  generateOption().forEach((option:any, index:number) => {
    normalOutputList.push(
      <div key={index}>
        {option}
      </div>

    )
    return normalOutputList
  });

  return (
    <div>
      {normalOutputList}
    </div>
  )
}

export default NormalList;