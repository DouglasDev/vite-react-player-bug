import ReactPlayer from 'react-player/lazy' //this doesn't work
// import ReactPlayer from 'react-player' //this works

//see: https://github.com/cookpete/react-player#readme

function App() {
  return (
    <div className="App">
      <ReactPlayer url={'https://www.youtube.com/watch?v=y8OnoxKotPQ&ab_channel=KRAZAM'}/>
    </div>
  )
}

export default App
