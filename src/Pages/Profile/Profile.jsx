import React, {useState} from "react";

import { useSelector } from "react-redux";
import SinglePhoto from "../../Components/Home/SinglePhoto/SinglePhoto";
import SingleVideo from "../../Components/Home/SingleVideo/SingleVideo";

const Profile = () => {

  //Redux
  const { favData, favDataVideo } = useSelector(store => store.profile);
  // console.log(favData)
  // console.log(favDataVideo)
  return (
    <div className="flex mx-auto justify-center flex-wrap w-2/3">

       {favData?.map (item => (
         <SinglePhoto
            data={item}
         />
       ))}
       {favDataVideo?.map(data =>(
         <SingleVideo 
         data={data}

         />
       ))}
      
     
    </div>
  );
};

export default Profile;
