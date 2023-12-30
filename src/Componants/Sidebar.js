import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="relative">
      <div className="h-full px-8 py-4 space-y-4 w-2/12 border-r fixed top-20 left-0 bg-white">
      <div>
        <h3 className="font-semibold"><Link to="/" >Home</Link></h3>
        <h3 className="font-semibold">Shorts</h3>
        <h3 className="font-semibold">Subscriptions</h3>
      </div>
      <hr />
      <div>
        <h3 className="font-semibold">Library</h3>
        <h3 className="font-semibold">History</h3>
        <h3 className="font-semibold">Your Videos</h3>
        <h3 className="font-semibold">Watch Later</h3>
        <h3 className="font-semibold">Liked Videos</h3>
      </div>
      <hr />
      <div>
        <h3 className="font-semibold mb-2">Subscriptions</h3>
        {/* <ul>
          <li>Tanay Pratab</li>
          <li>Zakir Khan</li>
          <li>Apna Collage</li>
          <li>Gourav Kapoor</li>
          <li>Love Babbar</li>
          <li>Technical Suneja</li>
          <li className=''>More..</li>
          
        </ul> */}
      </div>
      <hr />
    </div>
    </div>
  );
}

export default Sidebar;
