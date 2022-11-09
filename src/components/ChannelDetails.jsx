import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utilty/FetchFromApi";
import { demoThumbnailUrl } from "../utilty/constants";
import { useState } from "react";
import { BsBell } from "react-icons/bs";
import {ChannelCard , Videos} from "./index";

function ChannelDetails() {
  const { id } = useParams();
  const [ChannelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState();
  useEffect(() => {
    fetchFromApi(`/channels?part=snippet&id=${id}`).then((data) =>setChannelDetails(data?.items[0]));

    fetchFromApi(`/search?ChannelId=${id}$part=snippet&order=date`).then((data)=>setChannelVideos(data.items))
  }, [id]);
 console.log(channelVideos)
  return (
    <section className="w-4/5 ml-auto">
      <div>
        {/* banner image will be mubile :- default , computer and laptop:- medium, tv:- high */}
        <img
          src={ChannelDetails?.brandingSettings?.image?.bannerExternalUrl}
          alt={ChannelDetails?.brandingSettings?.channel?.title}
          className="w-full h-[300px] object-cover "
        />
      </div>
      <div className=" w-[90%] m-auto mt-5">
        <div className="flex  items-center justify-between">
          <div className="flex">
            {/* <ChannelCard/> */}
            <img
              src={ChannelDetails?.snippet?.thumbnails?.medium?.url}
              alt="logo"
              className="w-[80px] rounded-full "
            />
            <div className="ml-5">
              {/* channel name & subscribers */}
              <h1 className="text-2xl font-medium ">
                {ChannelDetails?.brandingSettings?.channel?.title}
              </h1>
              <span className="opacity-80 text-[17px]">
                {" "}
                {parseInt(
                  ChannelDetails?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </span>
            </div>
          </div>
          {/* youtube logo */}

          <div className="flex items-center ">
            {/* toggle */}
            <button className="text-xl font-semibold mr-3">subscribe</button>
            <BsBell />
          </div>
        </div>

        <div className="flex p-2">
         <Videos videos={channelVideos} />
        </div>
      </div>
    </section>
  );
}

export default ChannelDetails;
