import React from 'react';

function generateOption(): any {
  let options = []
  for (let i = 0; i < 1000000; i++) {
    options.push('Options ' +  (i + 1))
  }
  return options
}

const NormalListBroken = () => {
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

export default NormalListBroken;