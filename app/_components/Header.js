'use client'
import ModalContent from "./ModalContent";
import { useState } from "react";
export default function Header(){
  const [open, setOpen] = useState(false)

    return <> <div onClick={() => setOpen(true)}  className="relative text-center py-3 text-xl sm:text-3xl ">
   <h1 className="tracking-[11px] opacity-60 text-transparent bg-clip-text [text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5)] opacity-60 bg-[#666666] text-shadow-lg cursor-pointer font-extrabold hover:bg-stone-900">ToDoeZel✏️</h1> 
     <svg
  onClick={() => setOpen(true)}
  className="absolute top-2 right-7 sm:right-10 flex items-center justify-center w-[28px] h-[28px]"
  viewBox="0 0 33 33"
  xmlns="http://www.w3.org/2000/svg"
>
  <g stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
    <circle cx="20" cy="20" r="11" />
    <line x1="20" y1="15" x2="20" y2="15" />
    <line x1="20" y1="19" x2="20" y2="25" />
  </g>
</svg>
    </div>
{open && <ModalContent onClose={() => setOpen(false)} />}</>
}


