import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext';

function DisplayAlbum() {
  const {id} = useParams();
  const albumData = albumsData[id];
  const {playWithId} = useContext(PlayerContext)
  return (
    <div>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img src={albumData.image} alt="album" className="w-48 rounded" />
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4 className="text-lg">{albumData.desc}</h4>
          <p className="mt-1">
            <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
            <b>Spotify </b>
            • 1,323,154 likes 
            • <b>50 songs </b>
            about 2hr 30mins
          </p>
      </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 mb-4 pl-2 mt-10 text-[#a7a7a7]">
      <p><b className='mr-4'>#</b>Title</p>
      <p>Album</p>
      <p className="hidden sm:block">Date Added</p>
      <img src={assets.clock_icon} alt="" className="m-auto w-4" />
    </div>
    <br />
    {songsData.map((item,index)=>(
      <div onClick={()=>playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] rounded-lg hover:bg-[#232323] hover:text-white hover:shadow transition-all duration-150 cursor-pointer mb-2">
        <p className="text-white flex items-center gap-3">
          <b className="mr-2 text-[#a7a7a7]">{index+1}</b>
          <img className='inline w-10 mr-3 rounded' src={item.image} alt="" />
          <span className="truncate max-w-[120px]">{item.name}</span>
        </p>
        <p className="text-[15px] truncate max-w-[120px]">{albumData.name}</p>
        <p className="text-[15px] hidden sm:block">5 days ago</p>
        <p className="text-[15px] text-center">{item.duration}</p>
      </div>
    ))}
    </div>
  )
}

export default DisplayAlbum