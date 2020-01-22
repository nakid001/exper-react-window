import React, { FC, useState } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";



interface LargeDataProps {
  options: string[]
}

const ReactWindowInfiniteComponent: FC<LargeDataProps> = (props: any) => {
  const { options } = props
  const [rownNumber, setRownumber] = useState(0)
  const LOADING = 1;
  const LOADED = 2;
  let itemStatusMap:any = {};
  const isItemLoaded = ((index:number) => !!itemStatusMap[index]);
  const loadMoreItems = (startIndex:number, stopIndex:number) => {
    for (let index = startIndex; index <= stopIndex; index++) {
      itemStatusMap[index] = LOADING;
    }
    return new Promise(resolve =>
      setTimeout(() => {
        for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap[index] = LOADED;
        }
        resolve();
      }, 2500)
    );
  };

  const Row = ({ index, style }: ListChildComponentProps): JSX.Element => {
    let label;
    if (itemStatusMap[index] === LOADED) {
      label = options[index];
    } else {
      label = "Loading...";
    }

    return (
      <div key={index} style={style}>
        {label}
      </div>
    );
  };

  const listRef: any = React.createRef();

  function scrollToSpecific() {
    listRef.current.scrollToItem(rownNumber, 'center');
  };

  function handleOnSelectRowChange(event: any) {
    setRownumber(event.target.value.replace(/[^0-9]/g, ''))
  }
  return (
    <div style={{ height: "700px", width: "100%" }}>
      <span>Specific row number: </span>
      <input type="text" onChange={handleOnSelectRowChange} />
      <button onClick={scrollToSpecific}>Go</button>
      <AutoSizer >
        {({ height, width }) => (

          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={1000}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                ref={ref} {...props}
                className="List"
                itemCount={options.length} // number of item
                itemSize={35} // size between option
                height={height} // height of this list
                width={width}
                onItemsRendered={onItemsRendered}
              >
                {Row}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
}

export default ReactWindowInfiniteComponent