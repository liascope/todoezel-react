'use client';
import Percent from "./Percent";
import { today } from "../_lib/hooks/config";
import { useState,useEffect} from "react";
import {useTodaysTasks} from "../_lib/hooks/context/TodaysProvider";
import { useRouter, usePathname } from "next/navigation"

export default function HeaderToday() {
const [toggle, setToggle] = useState(false);
const {todaysTask, firstTask} = useTodaysTasks();
 const router = useRouter();
const pathname = usePathname();

  function handleClick() {
    if (todaysTask?.tasks?.length === 0) return;
    setToggle(!toggle);
 !toggle ? router.push('/today') : router.back()
  }

    useEffect(() => {
    if (pathname !== '/today') {
      setToggle(false);
    }
  }, [pathname]);

  return (<div
  className={`flex relative
    flex-row uppercase
    justify-between pt-2
    bg-stone-700/40 transition-all duration-300 shadow-lg 
    rounded-xl mx-2 sm:mx-6 sm:px-3 cursor-pointer`}
  onClick={handleClick}
>
    <div className="text-xs sm:text-lg absolute top-2 left-2 sm:top-6 sm:left-6 tracking-tight">TODAY | {today}</div>
    <div className="mt-3 sm:mt-12 sm:ml-12"><Percent arr={todaysTask?.tasks} /></div>
 

  <div className={` flex items-center ${todaysTask?.length > 0 ? 'justify-center' : 'justify-between'} sm:px-20 w-[70%]`}>

    <span className={`${toggle ? 'bg-blue-400/40' :'bg-amber-400/40'} mask-r-from-80% py-2 px-4 text-xs sm:text-xl font-black tracking-wide flex-1 max-w-lg truncate`}>
      {toggle ? "Todays Todoes🟢" : firstTask}
    </span>
{todaysTask?.tasks?.length > 0 && <> <span className="ml-3 w-fit">
  {toggle ? '' : `${todaysTask?.tasks?.every(task => task?.done) ? '🎉':'🟢'}`}
  </span>
    <svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[20px] h-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
  {toggle ? <polyline points="6 15 12 9 18 15" /> : <polyline points="6 9 12 15 18 9"/>}
  </g>
</svg></>}
  </div>
</div>

 );}
