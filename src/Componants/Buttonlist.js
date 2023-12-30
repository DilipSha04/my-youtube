import React from 'react';
import Button from './Button';

function Buttonlist(name) {
  const list = ["All", "Music", "News", "Sports", "Movie", "Sony Tv", "Cricket", "Football", "Dance", "Watched", "Recently Uploaded"];
  return (
    <div className=' hidden md:flex space-x-4 px-8 py-2 bg-white w-full fixed'>
      {
        list.map((name, i)=> <Button key={i} name={name}/>)
      }
    </div>
  )
}

export default Buttonlist;
