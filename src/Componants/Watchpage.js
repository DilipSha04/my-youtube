import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import VideoInfoContainer from "./VideoInfoContainer";

const Watchpage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full mx-4">
      <div className="mt-24 w-[70%] ml-20 flex flex-col">
        <iframe
          className="rounded-xl w-[100%]"
          width="700"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <VideoInfoContainer />
        <CommentContainer />
      </div>
      <div className="mt-[6rem] mr-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watchpage;
