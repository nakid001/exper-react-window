import React, { FC } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";


interface DropdownReactProps {
  options: string[]
}

const ReactWindowList: FC<DropdownReactProps> = (props: any) => {
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
          height={height}
          itemCount={options.length}
          itemSize={35}
          width={width}
        >
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}

export default ReactWindowList