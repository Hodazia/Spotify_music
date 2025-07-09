import { useState , useContext} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';
import  {PlayerContext} from './Context/PlayerContext';

function App() {
    const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black flex flex-col'>
      <div className="flex-1 flex flex-col lg:flex-row h-full">
        <Sidebar />
        <div className="flex-1 w-full">
          <Display />
        </div>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
