import React from "react";


export default function Quickbutton({tag, msg="clicked", iconname}) {

  const clickHandler = (tag, msg) => {
    console.log(tag+" "+msg);
  }
  return (
    <button onClick={()=>clickHandler(tag, msg)} className='px-4 py-2 flex items-center border border-zinc-300 rounded-xl w-fit mr-4 my-4 hover:bg-zinc-100 transition-colors'>
        <div className='items-center justify-center mr-2'> 
            {iconname}
        </div>
        <div className='items-center justify-center'>
            {tag}
        </div>
    </button>
  )
}
