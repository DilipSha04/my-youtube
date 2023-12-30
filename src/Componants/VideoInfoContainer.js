import React, { useEffect } from "react";
import { YOUTUBE_CHANNEL_DATA_API } from "../utils/constant";

const channelData = [
  {
    title: "YRF",
    Subscriber: "250m",
    videotitle: "Desi kalakar feat yoyo Honey Singh",
  },
];

const VideoInfoContainer = ({ data }) => {
  // const { title, Subscriber, videotitle } = data;
  // const { snippet, statistics } = info;
  // const { description, title, publishedAt, thumbnails, id } = snippet;
  // const { subscriberCount, viewCount } = statistics;

  useEffect(() => {
    getChannel();
  }, []);

  const getChannel = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_DATA_API);
    const json = await data.json();
    console.log(json?.items[0]);
  };

  return (
    <div className="border border-black md:w-[60%] w-[100%] my-4">
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default VideoInfoContainer;
