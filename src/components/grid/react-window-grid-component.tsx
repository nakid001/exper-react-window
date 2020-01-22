import React from 'react'
import { FixedSizeGrid, GridChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import './style.css'

interface ReactWindowGridProps {
  options: string[]
}
const FixedSizeGridComponent: React.FC<ReactWindowGridProps> = ((props: any) => {

  const { options } = props
  const ItemRenderer = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    return (
      <div
        className={
          columnIndex % 2
            ? rowIndex % 2 === 0
              ? 'GridItemOdd'
              : 'GridItemEven'
            : rowIndex % 2
              ? 'GridItemOdd'
              : 'GridItemEven'
        }
        style={style}
      >
        {options[columnIndex + rowIndex*5]}
      </div>
    );
  };

  return (
    <AutoSizer >
      {({ height, width }) => (
        <FixedSizeGrid
          className="Grid"
          columnCount={5}
          columnWidth={100}
          height={height}
          rowCount={Math.ceil(options.length/5)}
          rowHeight={35}
          width={width}
        >
          {ItemRenderer}
        </FixedSizeGrid>
      )}
    </AutoSizer>
  )
})

export default FixedSizeGridComponent