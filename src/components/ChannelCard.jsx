import React from "react";
import { Link } from "react-router-dom";

function ChannelCard({ channelDetails }) {
  // console.log(channelDetails);
  return (
    <Link
      to={`/channel/${channelDetails?.id.channelId}`}
      className="rounded-[20px] w-[360px] flex items-center flex-col justify-center "
    >
      <div className="">
        <img
          src={channelDetails?.snippet?.thumbnails.high?.url}
          alt=""
          className=" rounded-[50%] w-[180px] h-[180px] border-1 border-[#e3e3e3] "
        />
      </div>
      <div>
        <h1> {channelDetails?.snippet?.title} </h1>
        <p>
          {" "}
          {channelDetails?.statistics?.subscriberCount && (
            <p>
              {" "}
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()} Subscribers
            </p>
          )}{" "}
        </p>
      </div>
    </Link>
  );
}

export default ChannelCard;
