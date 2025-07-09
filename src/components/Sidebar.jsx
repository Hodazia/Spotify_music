import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    // Sidebar content as a function for reuse
    const sidebarContent = (
      <div className="h-full flex flex-col gap-4 text-white bg-[#121212] rounded-xl shadow-lg min-w-[200px] max-w-[280px] p-4">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-6 pl-2">
          <img src={assets.spotify_logo} alt="Spotify" className="w-8 h-8" />
          <span className="text-2xl font-bold tracking-tight text-white">Spotify</span>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <div onClick={()=>{navigate("/"); setOpen(false);}} className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#232323] transition group">
            <span className="bg-white bg-opacity-90 p-1.5 rounded-full flex items-center justify-center">
              <img  className='w-5' src={assets.home_icon} alt="" />
            </span>
            <p className="font-bold group-hover:text-green-500 transition">Home</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#232323] transition group">
            <span className="bg-white bg-opacity-90 p-1.5 rounded-full flex items-center justify-center">
              <img className='w-5' src={assets.search_icon} alt="" />
            </span>
            <p className="font-bold group-hover:text-green-500 transition">Search</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#232323] transition group">
              <img className='w-5' src={assets.stack_icon} alt="" />
              <p className="font-semibold group-hover:text-green-500 transition">Your Library</p>
          </div>
        </div>
        {/* Playlists & Promos */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="p-4 bg-[#242424] rounded-lg font-semibold flex flex-col items-start gap-1 shadow">
            <h1 className="text-base">Create Your First Playlist</h1>
            <p className='font-light text-sm'>It's easy, we'll help you</p>
            <button className='px-4 py-1.5 bg-green-500 text-[15px] text-black rounded-full mt-4 font-bold hover:bg-green-400 transition'>Create Playlist</button>
          </div>
          <div className="p-4 bg-[#242424] rounded-lg font-semibold flex flex-col items-start gap-1 shadow">
            <h1 className="text-base">Let's Find Some Podcasts To Follow</h1>
            <p className='font-light text-sm'>We'll keep you updated on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 font-bold hover:bg-gray-200 transition'>Explore Podcasts</button>
          </div>
        </div>
      </div>
    );

    return (
      <>
        {/* Hamburger for mobile */}
        <button className="fixed top-4 left-4 z-30 bg-[#181818] p-2 rounded-full shadow-lg lg:hidden" onClick={()=>setOpen(true)}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Sidebar drawer for mobile */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60 flex">
            <div className="w-64 h-full bg-[#121212] p-4 shadow-2xl animate-slideInLeft">
              <button className="mb-4 text-white" onClick={()=>setOpen(false)}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {sidebarContent}
            </div>
            <div className="flex-1" onClick={()=>setOpen(false)}></div>
          </div>
        )}
        {/* Sidebar for desktop */}
        <div className="hidden lg:flex h-full">
          {sidebarContent}
        </div>
      </>
    );
}

export default Sidebar