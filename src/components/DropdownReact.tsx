import React, { FC } from 'react';
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface DropdownReactProps {
  options: string[]
}

const Dropdownwindows: FC<DropdownReactProps> = (props: any) => {
  const { options } = props

  const Row = (index: any, style: any): JSX.Element => {
    console.log(index.index, options[index.index], options)
    return (
      <div key={index.index} style={style}>
        {options[index.index]}
      </div>
    );
  };


  return (
    <AutoSizer disableHeight>
      {({ width }) => (
        <FixedSizeList
          className="List"
          height={100}
          itemCount={options.length}
          itemSize={20}
          width={width}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>

  )
}

export default Dropdownwindows;