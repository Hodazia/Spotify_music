import React,{useContext} from 'react'
import { PlayerContext } from '../Context/PlayerContext'

// each song has an image, name , desc, id use it as a prop
function SongItem({image,name,desc,id}) {
  const {playWithId} = useContext(PlayerContext)

  // a card with img,p,p  ,   transform => sclae -105
  return (
    <div onClick={()=>playWithId(id)} className='min-w-[180px] max-w-[200px] p-3 rounded-xl cursor-pointer bg-[#181818] 
    hover:shadow-2xl hover:scale-105 hover:border hover:border-green-500 transition-all duration-200 
    flex flex-col items-center mr-4'>
      <img className='rounded-lg w-full aspect-square object-cover mb-3 shadow' src={image} alt="" />
      <p className='font-bold mt-2 mb-1 text-white text-center truncate w-full'>{name}</p>
      <p className='text-slate-300 text-sm text-center truncate w-full'>{desc}</p>
    </div>
  )
}

export default SongItem