import React from "react";
import { ChannelCard, VideoCard } from "./index";

function Videos({ videos ,direction}) {
  if(!videos) return "Loading...."
  console.log(videos)
  return (
    <div className={`flex justify-center flex-${direction || 'row'}  md:justify-start gap-2 flex-wrap`}>
    
      {videos?.map((video, index) => (
        <div key={index} className="flex items-center justify-center">
          {video.id.videoId && <VideoCard key={index} video={video} />}
          {video.id.channelId && (
            <ChannelCard key={index} channelDetails={video} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Videos;
