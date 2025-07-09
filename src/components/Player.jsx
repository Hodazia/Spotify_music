import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import { useNavigate } from "react-router-dom";

function Player() {
  const { playWithId } = useContext(PlayerContext);
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
    track,
  } = useContext(PlayerContext);
  return (
    <div className="h-[10%] bg-[#181818] flex justify-between items-center text-white px-4 shadow-lg border-t border-[#232323]">
      {/* Left: Album Art & Info */}
      <div className="flex items-center gap-4 min-w-[180px]">
        <img src={track?.image || assets.spotify_logo} alt="Album Art" className="w-14 h-14 rounded shadow-md object-cover" />
        <div className="flex flex-col">
          <span className="font-semibold text-base truncate max-w-[120px]">{track?.name || 'Song Title'}</span>
          <span className="text-xs text-gray-400 truncate max-w-[120px]">{track?.artist || 'Artist Name'}</span>
        </div>
      </div>
      {/* Center: Controls & Seek Bar */}
      <div className="flex flex-col items-center gap-1 m-auto w-full max-w-[500px]">
        <div className="flex gap-4 items-center justify-center">
          <img src={assets.shuffle_icon} alt="" className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition" />
          <img onClick={previous} src={assets.prev_icon} alt="" className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition" />
          {playStatus ? (
            <img onClick={pause} src={assets.pause_icon} alt="" className="w-8 h-8 cursor-pointer bg-white rounded-full p-1 shadow-lg" />
          ) : (
            <img onClick={play} src={assets.play_icon} alt="" className="w-8 h-8 cursor-pointer bg-white rounded-full p-1 shadow-lg" />
          )}
          <img onClick={next} src={assets.next_icon} alt="" className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition" />
          <img src={assets.loop_icon} alt="" className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition" />
        </div>
        <div className="flex items-center gap-3 w-full">
          <span className="text-xs text-gray-400 min-w-[32px] text-right">{time.currentTime.minute}:{time.currentTime.second}</span>
          <div onClick={seekSong} ref={seekBg} className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer relative">
            <hr ref={seekBar} className="h-1 border-none bg-green-500 rounded-full absolute top-0 left-0" style={{width: 'var(--seek-width, 0%)'}} />
          </div>
          <span className="text-xs text-gray-400 min-w-[32px] text-left">{time.totalTime.minute}:{time.totalTime.second}</span>
        </div>
      </div>
      {/* Right: Volume */}
      <div className="flex items-center gap-2 min-w-[120px] justify-end">
        <img src={assets.speaker_icon} alt="Volume" className="w-5" />
        <input type="range" min="0" max="100" className="w-24 accent-green-500" />
      </div>
    </div>
  );
}

export default Player;