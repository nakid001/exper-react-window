import React, { FC } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import './style.css'

interface LargeDataProps {
  options: string[],
  listRef: React.RefObject<unknown>,
}

const ReactWindowRow: FC<LargeDataProps> = (props: any) => {
  const { options, listRef } = props

  const Row = ({ index, style }: ListChildComponentProps): JSX.Element => {
    return (
      <div key={index} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
        {options[index]}
      </div>
    );
  };

  return (
    <AutoSizer >
      {({ height, width }) => (
        <FixedSizeList
          ref={listRef} // ref for navigate
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

export default ReactWindowRow