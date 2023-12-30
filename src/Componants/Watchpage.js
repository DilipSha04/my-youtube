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
    <div className="flex flex-col md:flex-row justify-center  w-full mx-4">
      <div className="mt-24 md:w-[60%] w-[100%] md:ml-20 ml-0 flex flex-col">
        <iframe
          className="rounded-xl w-[100%]"
          width="600"
          height="420"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <VideoInfoContainer />
        <CommentContainer />
      </div>
      <div className="md:mt-[6rem] md:w-[30%] w-[100%] mt-2 mr-4">
        <LiveChat />
      </div>
    </div>
  );
};

export default Watchpage;
