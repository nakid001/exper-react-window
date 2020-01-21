import React from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

interface ReactWindowColumnProps {
  options: string[]
}

const ReactWindowColumnComponent: React.FC<ReactWindowColumnProps> = (props: any) => {
  const { options } = props


  const Column = ({ index, style }: ListChildComponentProps): JSX.Element => {
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
          height={height}
          itemCount={options.length}
          itemSize={100}
          layout="horizontal"
          width={width}
        >
          {Column}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
}

export default ReactWindowColumnComponent