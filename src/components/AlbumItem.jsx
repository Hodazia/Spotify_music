import React from "react"
import { useNavigate } from "react-router-dom"

//pass the props into albumitems it can be, image, description, name and id,
// all the data will be stored in an object in assets.js file , and then we will map through it
const AlbumItem = ({image, name, description, id}) => {
    const navigate = useNavigate();

    return (
        <div className='min-w-[200px] max-w-[220px] p-3 rounded-xl cursor-pointer bg-[#181818] 
        hover:shadow-2xl hover:scale-105 hover:border hover:border-green-500 transition-all duration-200 
        flex flex-col items-center mr-4' onClick={ () => navigate(`/album/${id}`)}>
            <img className="rounded-lg w-full aspect-square object-cover mb-3 shadow" src={image}/>
            <p className="font-bold mt-2 mb-1 text-white text-center truncate w-full">{name}</p>
            <p className="text-slate-300 text-sm text-center truncate w-full">{description}</p>
        </div>
    )

}

export default AlbumItem