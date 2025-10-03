'use client';
import Percent from "./Percent";
import { today } from "../_lib/hooks/config";
import { useState,useEffect} from "react";
import {useTodaysTasks} from "../_lib/hooks/context/TodaysProvider";
import { useRouter, usePathname } from "next/navigation"
import ArrowIcon from "./NavIcons/ArrowIcon";

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
    bg-stone-700/25 transition-all duration-300 shadow-lg shadow-stone-600
    rounded-xl mx-2 sm:mx-6 sm:px-3 ${todaysTask?.tasks?.length > 0 ? 'cursor-pointer' : 'cursor-base'}`}
  onClick={handleClick}
>
    <div className="text-xs sm:text-lg absolute top-2 left-2 sm:top-6 sm:left-6 tracking-tight text-shadow-lg">TODAY | {today}</div>
    <div className="mt-3 sm:mt-12 sm:ml-12"><Percent arr={todaysTask?.tasks} /></div>
 

  <div className={` flex items-center ${todaysTask?.length > 0 ? 'justify-center' : 'justify-between'} mr-2 sm:px-20 w-[70%]`}>

    <span className={`${toggle ? 'bg-sky-400/40' :'bg-amber-400/40'} mask-r-from-80% py-2 px-4 text-xs sm:text-xl font-black tracking-wide flex-1 max-w-lg truncate`}>
      {toggle ? "Todays Todoes🟢" : firstTask}
    </span>
{todaysTask?.tasks?.length > 0 && <> <span className="ml-3 w-fit">
  {toggle ? '' : `${todaysTask?.tasks?.every(task => task?.done) ? '🎉':'🟢'}`}
  </span> <ArrowIcon toggle={toggle}/>
</>}
  </div>
</div>

 );}
