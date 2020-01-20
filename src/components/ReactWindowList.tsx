import React, { FC } from 'react';
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface DropdownReactProps {
  options: string[]
}

const ReactWindowList: FC<DropdownReactProps> = (props: any) => {
  const { options } = props

  const Row = (index: any, style: any): JSX.Element => {
    console.log(index.index)
    return (
      <div key={index.index} style={style}>
        {options[index.index]}
      </div>
    );
  };


  return (

    <FixedSizeList
      className="List"
      height={500}
      itemCount={options.length}
      itemSize={35}
      width={500}
    >
      {Row}
    </FixedSizeList>
  )
}

export default ReactWindowList;