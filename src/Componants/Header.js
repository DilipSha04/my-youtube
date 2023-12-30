import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const [suggesation, setSuggestion] = useState([]);

  const [showSuggestion, setShowsuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //Api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggesation();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggesation = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="z-50">
      <div className="flex justify-between items-center shadow-l border-b fixed top-0 w-full bg-white">
        <div className="py-2 md:px-4 px-2 flex items-center">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-[3rem]"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt=""
          />
          <img
            className="h-[4rem]"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt=""
          />
        </div>
        <div className="w-[60%] ml-10 items-center">
          <div className="flex w-[100%]">
            <input
              className="md:px-4 px-2 md:w-[50%] w-[70%] md:py-1 py-0 rounded-l-full md:text-[16px] text-[12px] border border-gray-400 outline-1 outline-blue-500"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowsuggestion(true)}
              onBlur={() => setShowsuggestion(false)}
            />
            <button className="bg-gray-300 rounded-r-full px-2 py-[4px]">
              <img
                className="md:h-[1.6rem] h-[18px]"
                src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                alt=""
              />
            </button>
          </div>
          {showSuggestion && (
            <div className="py-2 absolute w-[30%] rounded-md bg-white">
              <ul className="font-sans">
                {suggesation.map((s) => (
                  <li
                    key={s}
                    className="hover:bg-gray-200 transition-all delay-0 px-4 py-1 cursor-default"
                  >
                    🔎{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <img
            className="h-[3rem] md:inline-block hidden"
            src="https://static.thenounproject.com/png/381172-200.png"
            alt=""
          />
          <img
            className="h-[3rem] md:inline-block hidden"
            src="https://static.thenounproject.com/png/326193-200.png"
            alt=""
          />
          <img
            className="h-[4rem]"
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
