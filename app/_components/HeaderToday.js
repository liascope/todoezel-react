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
  className={`flex 
    flex-col sm:flex-row 
    justify-between 
    bg-stone-700/40 transition-all duration-300 shadow-lg 
    rounded-xl mx-2 sm:mx-6 py-2 px-2 sm:px-3 cursor-pointer`}
  onClick={handleClick}
>
  <div className="flex flex-col items-center sm:w-[15%] w-full">
    <span className="mb-2">TODAY | {today}</span>
    <Percent arr={todaysTask?.tasks} />
  </div>

  <div className={` flex items-center ${todaysTask?.length > 0 ? 'justify-center' : 'justify-between'} px-4 sm:px-20 mt-3 sm:mt-0 text-center w-full sm:w-[75%]`}>

    <span className={`${toggle ? 'bg-blue-400/40' :'bg-amber-400/40'} mask-r-from-80% py-2 px-4 sm:text-xl font-black tracking-wide flex-1 max-w-lg truncate`}>
      {toggle ? "Todays Todoes🟢" : firstTask}
    </span>
{todaysTask?.tasks?.length > 0 && <span className="ml-3 w-fit">{toggle ? "⮝" : `${todaysTask?.tasks?.every(task => task?.done) ? '🎉':'🟢'}⮟`}</span>}
  </div>
</div>

 );}
