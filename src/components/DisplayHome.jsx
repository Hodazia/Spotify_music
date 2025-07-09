import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      </div>
      <div className="mb-4">
      <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
      </div>
      </div>
    </>
  )
}

export default DisplayHome