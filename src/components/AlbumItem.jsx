import React from "react"
import { useNavigate } from "react-router-dom"

//pass the props into albumitems it can be, image, description, name and id,
// all the data will be stored in an object in assets.js file , and then we will map through it
const AlbumItem = ({image, name, description, id}) => {
    const navigate = useNavigate();

    return (
        // whenver we click on the albumitem it gets navigated to its album id , 
        <div className='min-w-[1080px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff]' onClick={ () => navigate(`/album/${id}`)}>
            <img className="rounded" src={image}/>
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="text-slate-200 text-sm">{description}</p>
        </div>
    )

}

export default AlbumItem