import React from "react";
import { ChannelCard, VideoCard } from "./index";

function Videos({ videos }) {
  console.log(videos)
  return (
    <div className="flex justify-start gap-2 flex-wrap">
      {/* MY CODE */}
      {/* {videos?.map((video) => {
        if (video.type === "channle") {
          return <ChannelCard />;
        } else if (video.type === "video") {
          return <VideoCard />;
        }
      })} */}

      {/* JS MASTERY CODE */}
      {videos?.map((video, index) => (
        <div key={index} className="flex items-center justify-center" >
          {video.id.videoId && <VideoCard key={index} video={video} />}
          {video.id.channelId && <ChannelCard key={index} channelDetails={video} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
