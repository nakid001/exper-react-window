import React from 'react'
const Home = () => {

  return (
    <div>
      <div>
        <div style={{color:"red"}}>
          WARNING This function might break your browser! ->
          <button> <a href="/normal-broken"> Normal very large list</a></button>
        </div>
        <button> <a href="/normal"> Normal large list</a></button>
        <button> <a href="/react-window"> React window list</a></button>
      </div>
      <div id="content">
        <button> <a href="/react-window-column">React window Column</a></button>
        <button> <a href="/react-window-grid"> React window Grid</a></button>
        <button> <a href="/react-window-infinite"> React window Infinite</a></button>
      </div>
    </div>
  )
}

export default Home