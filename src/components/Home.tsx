import React from 'react'
import CustomDropDown from './dropDown/dropDown'
const Home = () => {

  return (
    <div>
      <CustomDropDown>
        <div>
          <button> <a href="/normal"> Normal list</a></button>
          <button> <a href="/react-window"> React window list</a></button>
          <button> <a href="/react-window-column">React window Column</a></button>
          <button> <a href="/react-window-grid"> React window Grid</a></button>
        </div>
      </CustomDropDown>
    </div>
  )
}

export default Home