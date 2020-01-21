import React, { FC } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


interface LargeDataProps {
  options: string[]
}

const ReactWindowList: FC<LargeDataProps> = (props: any) => {
  const { options } = props


  const Row = ({ index, style }: ListChildComponentProps): JSX.Element => {
    return (
      <div key={index} style={style}>
        {options[index]}
      </div>
    );
  };



  return (
    <AutoSizer >
      {({ height, width }) => (
        <FixedSizeList
          className="List"
          itemCount={options.length} // number of item
          itemSize={35} // size between option
          height={height} // height of this list
          width={width}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}

export default ReactWindowList