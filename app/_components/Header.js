'use client'
import ModalContent from "./ModalContent";
import { useState } from "react";
export default function Header(){
  const [open, setOpen] = useState(false)

    return <> <div onClick={() => setOpen(true)}  className="relative text-center py-1 text-xl tracking-[11px] opacity-60 text-transparent bg-stone-800 bg-clip-text shadow-[0_3px_3px_rgba(255,255,255,0.5)] cursor-pointer font-extrabold hover:bg-stone-900">
     ToDoeZel✏️
      <p  onClick={() => setOpen(true)} className="absolute top-0 right-7 text-3xl text-stone-800 hover:text-stone-900">🛈</p>  
    </div>
{open && <ModalContent onClose={() => setOpen(false)} />}</>
}