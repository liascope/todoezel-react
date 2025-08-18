'use client'
import ModalContent from "./ModalContent";
import { useState } from "react";
export default function Header(){
  const [open, setOpen] = useState(false)

    return <> <div onClick={() => setOpen(true)}  className="relative text-center py-1 text-xl tracking-[11px] opacity-60 text-transparent bg-stone-800 bg-clip-text shadow-[0_3px_3px_rgba(255,255,255,0.5)] cursor-pointer font-extrabold hover:bg-stone-900">
     ToDoeZel✏️
     <svg
  onClick={() => setOpen(true)}
  className="absolute top-0 right-7 flex items-center justify-center w-[28px] h-[28px] 
             text-gray-500 hover:text-stone-900 transition-colors duration-200"
  viewBox="0 0 33 33"
  xmlns="http://www.w3.org/2000/svg"
>
  <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
    <circle cx="20" cy="20" r="11" />
    <line x1="20" y1="15" x2="20" y2="15" />
    <line x1="20" y1="19" x2="20" y2="25" />
  </g>
</svg>
    </div>
{open && <ModalContent onClose={() => setOpen(false)} />}</>
}