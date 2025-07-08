import arrow_left from './Navbar/left_arrow.png'
import arrow_right from './Navbar/right_arrow.png'
import home_icon from './Sidebar/home.png'
import search_icon from './Sidebar/search.jpg'
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
import img6 from './SONGSDATA/cheque5.jpg'
import img7 from './SONGSDATA/hislerin7.jpeg'
import img8 from './SONGSDATA/img8slowed.jpeg';


export const assets = {
    arrow_left,
    arrow_right,
    home_icon,
    search_icon
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
        bgColor:""
    },
    {
        id:2,
        name:"Top 50 India",
        image:top50indiaimg,
        desc:"Your daily update of the most played tracks",
        bgColor:""
    },
    {
        id:3,
        name:"Viral 50 global",
        image:viral50globalimg,
        desc:"Your daily update of the most played tracks",
        bgColor:""
    },
    {
        id:4,
        name:"Viral 50 India",
        image:viral50indiaimg,
        desc:"Your daily update of the most played tracks",
        bgColor:""
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