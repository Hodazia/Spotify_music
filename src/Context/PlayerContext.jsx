import { createContext, useRef, useState,useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track,SetTrack] = useState(songsData[0]);
    const [playStatus,SetPlayStatus] = useState(false);
    const [time,SetTime] = useState({
        currentTime : {
            second : 0,
            minute : 0
        },
        totalTime : {
            second : 0,
            minute : 0
        }
    });
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
                SetTime({
                    currentTime : {
                        second : Math.floor(audioRef.current.currentTime % 60),
                        minute : Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime : {
                        second : Math.floor(audioRef.current.duration % 60),
                        minute : Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        },1000)
    },[audioRef])

    const play = () => {
        audioRef.current.play();
        SetPlayStatus(true);
    };
    const pause = () => {
        audioRef.current.pause();
        SetPlayStatus(false);
    };
    const playWithId = async (id) => {
        await SetTrack(songsData[id]);
        await audioRef.current.play();
        SetPlayStatus(true);
    }
    const previous = async () => {
        if(track.id>0){
            await SetTrack(songsData[track.id-1]);
            await audioRef.current.play();
            SetPlayStatus(true);
        }
    }
    const next = async () => {
        if(track.id<songsData.length-1){
            await SetTrack(songsData[track.id+1]);
            await audioRef.current.play();
            SetPlayStatus(true);
        }
    }
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, SetTrack,
        playStatus, SetPlayStatus,
        time,
        SetTrack,
        play,pause,
        playWithId,
        previous,
        next,
        seekSong,
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider