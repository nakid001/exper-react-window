import React from 'react'
const Home = () => {

  return (
    <div>
      <div>
        <button> <a href="/normal"> Normal list</a></button>
        <button> <a href="/react-window"> React window list</a></button>
      </div>
      <div id="content">
        <button> <a href="/react-window-column">React window Column</a></button>
        <button disabled> <a href="/react-window-grid"> React window Grid</a></button>
      </div>
    </div>
  )
}

export default Home