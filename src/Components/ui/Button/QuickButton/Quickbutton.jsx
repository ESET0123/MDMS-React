import React from "react";


export default function Quickbutton({tag, iconname, onClickFunc}) {

  const clickHandler = (tag) => {
    alert(tag+" clicked");
  }
  return (
    <button onClick={onClickFunc? onClickFunc : (()=>clickHandler(tag))} className='px-4 py-2 flex items-center border border-zinc-300 rounded-xl w-fit mr-4 my-4 hover:bg-zinc-100 transition-colors'>
        <div className='items-center justify-center mr-2'> 
            {iconname}
        </div>
        <div className='items-center justify-center'>
            {tag}
        </div>
    </button>
  )
}
