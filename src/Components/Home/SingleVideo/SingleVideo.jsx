import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

import "./singlevideo.style.css"

//Actions
import { handleAddFavDataActionVideo } from "../../../redux/actions/profile.action";

const SingleVideo = ({ data, isFavDataVideo }) => {
    //Redux hook
  const dispatch = useDispatch();

  //console.log(data)

  const handleAddFavDataVideo = () => {
    dispatch(handleAddFavDataActionVideo(data, isFavDataVideo));
  };
    return (
      <div className="flex flex-col flex-wrap my-5 shadow-xl p-4 bg-gray-100 rounded-xl tablet:w-2/3 tablet:justify-center tablet:flex-row">
        <video src={data?.video_files[2]?.link} alt="A windmill" controls/>
        <div className="flex justify-center font-bold my-3">
          <AiOutlineHeart
            //className="text-black cursor-pointer z-50"
            className={`text-${isFavDataVideo ? "red" : "black"} cursor-pointer z-50`}
            onClick={handleAddFavDataVideo}
          />

          <a href={data?.user?.url} target="_blank" rel="noreferrer" className="mx-1">
            {data?.user?.name}
          </a>
        </div>
      </div>
    )
}

export default SingleVideo
