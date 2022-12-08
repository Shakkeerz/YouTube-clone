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
    <div className="w-[460px] md:w-[360px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="">
        <img
          src={snippet?.thumbnails?.high?.url}
          className="w-full h-[180px] object-cover rounded-2xl"
          alt={snippet?.title}
        />
      </Link>
      <div className="bg-[#1e1e1e] flex pt-3 h-[106px] w-full">
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <div>logo</div>
        </Link>
        {/* video?.snippet?.title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className='ml-5' >
          <h1 className="text-sm">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </h1>
          <p className="text-[12px] ">{snippet?.channelTitle}</p>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
