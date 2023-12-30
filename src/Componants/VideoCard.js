import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2">
      <img src={thumbnails.medium.url} className="w-full rounded-md" />
      <div className="">
        <p className="font-bold font-sans text-[18px]">{title}</p>
        <p className="text-gray-800 font-semibold">{channelTitle}</p>
        <p className="text-gray-800">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
