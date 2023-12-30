import React from 'react';
import Videocontainer from './Videocontainer';
import Sidebar from './Sidebar';
import Buttonlist from './Buttonlist';


function Maincontainer() {
  return (
    <div className="absolute top-20 -z-10">
      <Buttonlist />
      <Videocontainer />
    </div>
  )
}

export default Maincontainer;
