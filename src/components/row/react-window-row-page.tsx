import React, { FC, useState } from "react";
import ReactWindowComponent from './react-window-row-component'

const ReactWindowList: FC = () => {
  function generateOption(): any {
    let options = []
    for (let i = 0; i < 1000000; i++) {
      options.push('Options ' + (i + 1))
    }
    return options
  }
  const listRef: any = React.createRef();
  const [rownNumber, setRownumber] = useState(0)

  function scrollToSpecific() {
    listRef.current.scrollToItem(rownNumber, 'center');
  };

  function handleOnSelectRowChange(event: any) {
    setRownumber(event.target.value.replace(/[^0-9]/g, ''))
  }
  return (
    <div style={{ overflowX: "hidden" }}>

      {/* This part is OPTIONAL used for navigate to specific row */}
      <div style={{ width: "auto", height: "auto" }}>
        <span>Specific row number: </span>
        <input type="text" onChange={handleOnSelectRowChange} />
        <button onClick={scrollToSpecific} >Go</button>
      </div>
      {/* This part is OPTIONAL used for navigate to specific row */}

      <div style={{ width: "100%", height: "700px", }}>{/* require specific width and height */}
        <ReactWindowComponent options={generateOption()} listRef={listRef} />
      </div>
    </div>
  )
}

export default ReactWindowList;