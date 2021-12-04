import React, { useState, useEffect } from "react";

//Styles
import "./Home.styles.css";
//Components
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";
import VideoContainer from "../../Components/Containers/VideoContainer/VideoContainer";

const Home = () => {
  //State
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState("");

  //Functions

  // Your API key: 563492ad6f91700001000001ceee1d5fe1ad44f9b5e0f9291943a20d
  // 563492ad6f91700001000001953c23f31dae4cf285c20550e3b4b26f
  useEffect(() => {
    const query = ["nature", "office", "movies", "animals", "space", "animals", "travel", "summer", "cars", "cats"];
    const random = Math.floor(Math.random() * (query.length - 1)) + 1;
    const keyword = query[random];
    const handleFetchToken = async () => {
      const request = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=30`,
        {
          headers: {
            Authorization:
              "563492ad6f91700001000001953c23f31dae4cf285c20550e3b4b26f"
          }
        }
      );
      const result = await request.json();
      setData(result.photos);
      setNextPage(result.next_page);
      console.log(result);
    };
    handleFetchToken();
  }, []);

  const handleFetchDataNextPage = async () => {
    const request = await fetch(nextPage, {
      headers: {
        Authorization:
          "563492ad6f91700001000001953c23f31dae4cf285c20550e3b4b26f"
      }
    });
    const result = await request.json();
    setNextPage(result.next_page);
    setData([...data, ...result.photos]);
  };

  

  return (
    <div className="">
      <ImageContainer
        data={data}
        title="Home"
        handleFetchDataNextPage={handleFetchDataNextPage}
      />
      <VideoContainer
        handleFetchDataNextPage={handleFetchDataNextPage} 
        data={data}
      />
    </div>
  );
};

export default Home;
