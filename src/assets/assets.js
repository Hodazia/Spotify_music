import arrow_left from './Navbar/left_arrow.png'
import arrow_right from './Navbar/right_arrow.png'
import home_icon from './Sidebar/home.png'
import search_icon from './Sidebar/search.jpg'
import bell_icon from './bell.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import top50indiaimg from './AlbumsData/top50india.jpeg'
import topsongsglobalimg from './AlbumsData/topsongsglobal.jpeg';
import viral50globalimg from './AlbumsData/viral50global.jpeg'
import viral50indiaimg from './AlbumsData/viral50india.jpeg';
import topsongsindiaimg from './AlbumsData/topsongsindia.jpeg'
import img1 from './SONGSDATA/edsheran1.jpeg'
import img2 from './SONGSDATA/skyfullofstars2.jpeg'
import img3 from './SONGSDATA/img3.jpeg'
import img4 from './SONGSDATA/paradise4.jpeg'
import img5 from './SONGSDATA/kosandra5.jpeg'
import img6 from './SONGSDATA/cheques5.jpg'
import img7 from './SONGSDATA/hislerin7.jpeg'
import img8 from './SONGSDATA/img8slowed.jpeg';
import song1 from './song1perfect.mp3'
import song2 from './song2jb.mp3'
import song3 from './song3ddanzokudro.mp3'

export const assets = {
    arrow_left,
    arrow_right,
    home_icon,
    search_icon,
    bell_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id:0,
        name:"Top Songs Global",
        image:topsongsglobalimg,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {
        id:1,
        name:"Top Songs India",
        image:topsongsindiaimg,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {
        id:2,
        name:"Top 50 India",
        image:top50indiaimg,
        desc:"Your daily update of the most played tracks",
        bgColor:"#22543d"
    },
    {
        id:3,
        name:"Viral 50 global",
        image:viral50globalimg,
        desc:"Your daily update of the most played tracks",
        bgColor:"#44337a"
    },
    {
        id:4,
        name:"Viral 50 India",
        image:viral50indiaimg,
        desc:"Your daily update of the most played tracks",
        bgColor:"#744210"
    },
]


export const songsData = [
    {
        id:0,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Song Four",
        image: img4,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Song Five",
        image: img5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Song Six",
        image: img6    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img8,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]