import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRondomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api Pilling
      dispatch(
        addMessage({
          name: generateRondomName(),
          message: makeRandomMessage(25) + "😊",
        })
      );
      //   console.log("api polling");
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full flex flex-col-reverse h-[400px] rounded-lg border border-black ml-2 bg-slate-100 overflow-y-scroll">
        {/* //dont use index as a key of map */}
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="m-2 w-full bg-gray-200 p-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Dilip Sharma",
              message: liveMessage,
            })
            );
            setLiveMessage("");
        }}
      >
        <input
          className="px-2 py-1 w-80 outline-1 outline-blue-600 border-b-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Write message"
        />
        <button className="mx-4 px-4 py-1 bg-blue-600 rounded-md text-white">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
