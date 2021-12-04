import React, {useState} from "react";

//Components
import SerchFormVideo from "../../Components/Custom/SerchFormVideo/SerchFormVideo";
import VideoContainer from "../../Components/Containers/VideoContainer/VideoContainer"


const Videos = () => {
  const [video, setVideo] = useState("");
  const [data, setData] = useState(null);

  //Funcion
  const handleKeyword = ({ value }) => setVideo(value);
  const handleSearchData = async e => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/videos/search?query=${video}&per_page=5`,
      {
        headers: {
          Authorization:
            "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
        }
      }
    );
    const result = await request.json();
    setData(result.videos);
    console.log(result.videos);
  };
  return (
    <div>
      <SerchFormVideo
        handleKeyword={handleKeyword}
        handleSearchData={handleSearchData} />
      <VideoContainer
        className="flex w-screen"
        info={data} />
    </div>
  );
};

export default Videos;
