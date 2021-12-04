import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import SingleVideo from "../../Home/SingleVideo/SingleVideo";


const VideoContainer = ({info, handleFetchDataNextPage, nextPage, setNextPage, setData}) => {
    const data = info
    // console.log(data)

  //State
  const [isVisible, setIsVisible] = useState(false);

  //Ref
  const containerRef = useRef(null);

    //Redux hooks
  const { favDataVideo } = useSelector(store => store.profile);

  //Funciones
  const callbackFunction = entries => {
    // console.log(entries);
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  useEffect(() => {
    if (info?.length > 4) {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    }
  }, [containerRef, info]);

  useEffect(() => {
    if (isVisible) {
      const handleFetchDataNextPage = async () => {
        const request = await fetch(nextPage, {
          headers: {
            Authorization:
              "563492ad6f91700001000001ceee1d5fe1ad44f9b5e0f9291943a20d"
          }
        });
        const result = await request.json();
        setNextPage(result.next_page);
        setData([...data, ...result.photos]);
      }; handleFetchDataNextPage()
    }
  }, [isVisible, handleFetchDataNextPage, setData, setNextPage, data, nextPage]);
    
    return (
        <>
      <div className="flex flex-wrap justify-center">
        {info?.map(item => (
          <SingleVideo
            key={item.id}
            data={item}
            isFavData={favDataVideo.some(photo => photo.id === item.id)}
          />
        ))}
      </div>

      <div ref={containerRef} style={{ height: "20px" }}></div>
    </>
    )
}

export default VideoContainer


