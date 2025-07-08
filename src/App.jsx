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
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar />
      <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
