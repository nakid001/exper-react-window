import React, { FC } from 'react';
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface DropdownReactProps {
  options: string[]
}

const NormalList: FC<DropdownReactProps> = (props: any) => {
  const { options } = props
  let normalOutputList:any = []
  console.log(options)
  options.forEach((option:any, index:number) => {
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