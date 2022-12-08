import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utilty/FetchFromApi";
import Videos from "./Videos";
import {HiOutlineBadgeCheck} from 'react-icons/hi'
function VideoDetails() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // fetching search videos
    fetchFromApi(`/videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    // fetching related videos
    fetchFromApi(`/search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
    setLoading(false);
  }, []);
  console.log(videoDetails);
  if (!videoDetails) return "loading...";
  const {
    snippet: { channelId, channelTitle, title },
    statistics: { likeCount, viewCount },
  } = videoDetails;
  return (
    <section className="flex flex-col p-5 md:p-10 md:flex-row justify-evenly ">
      {loading && <div>Loading....</div>}
      <div className="w-full md:w-4/5">
        {/* video */}
        <div  className="flex flex-col" >
          <div className="react-player ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width='100%'
              height='100%'
            />
          </div>
          {/* details */}
          <div className="font-bold flex flex-col">
            <h1 className=" text-lg md:text-xl py-1">{title}</h1>
            <p className="flex py-1">
              <AiOutlineLike /> {parseInt(likeCount).toLocaleString()}
            </p>
            <p className="py-1"> {parseInt(viewCount).toLocaleString()}Views</p>
            <Link
              to={channelId ? `/channel/${channelId}` : "This is not available"}
              className="h-[50px] w-[500px] text-base flex items-center rounded-lg  p-5 mb-5"
            >
              {channelTitle} <HiOutlineBadgeCheck   />
            </Link>
          </div>
        </div>
      </div>
      {/* Related videos section */}
      <div className="w-full md:w-1/5">
        <Videos videos={relatedVideos} direction="col" />
      </div>
    </section>
  );
}

export default VideoDetails;
