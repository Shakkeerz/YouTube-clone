import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utilty/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div className="w-[460px]   md:w-[240px] md:h-[auto] transition-transform hover:scale-110 ">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="">
        <img
          src={snippet?.thumbnails?.high?.url}
          className="w-full h-[200px] object-cover rounded-2xl"
          alt={snippet?.title}
        />
      </Link>
      <div className="bg-[#1e1e1e] flex pt-3 h-[80px] w-full">
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          {/* <div>logo</div> */}
        </Link>
        {/* video?.snippet?.title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className='ml-5 font-normal' >
          <h1 className="text-sm">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}...
          </h1>
          <p className="text-[10px]  leading-[12px] font-bold text-[#a59e9e] ">{snippet?.channelTitle}</p>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
