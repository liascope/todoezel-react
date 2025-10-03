'use client'
import ModalContent from "./ModalContent";
import { useState } from "react";
import Image from "next/image";

export default function Header(){
  const [open, setOpen] = useState(false)

    return <> <div onClick={() => setOpen(true)}  className="w-full h-18 flex items-center px-4 cursor-pointer">
    <div className="relative w-full h-full">
        <Image
          src="/favicon.png"
          alt="Logo"
          fill
         
          priority 
          className="object-contain saturate-150 hue-rotate-25"
        />
      </div>
    </div>
{open && <ModalContent onClose={() => setOpen(false)} />}</>
}
