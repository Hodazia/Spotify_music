import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () =>  {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold sticky top-0 z-20 bg-[#181818] py-3 px-6 shadow-md rounded-b-xl'>
        <div className="flex items-center gap-2">
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#232323] transition' src={assets.arrow_left} />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#232323] transition' src={assets.arrow_right} />
        </div>
        {/* Search Bar Placeholder */}
        <div className="hidden md:flex items-center bg-[#232323] rounded-full px-4 py-1 mx-4 w-72">
          <img src={assets.search_icon} alt="Search" className="w-4 mr-2 opacity-60" />
          <input type="text" placeholder="What do you want to listen to?" className="bg-transparent outline-none text-white w-full placeholder-gray-400 text-sm" />
        </div>
        <div className="flex items-center gap-4">
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-green-500 hover:text-white transition'>Explore Premium</p>
            <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer border border-gray-700 hover:bg-[#232323] transition"></p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center font-bold'>Z</p>
        </div>
    </div>
    <div className="flex items-center gap-2 mt-4 px-6">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-green-500 hover:text-white transition">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#232323] transition">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#232323] transition">Podcasts</p>
    </div>
    </>
  )
}

export default Navbar