'use client'
import Link from "next/link"
import ToggleList from "./ToggleList";
import { useEffect, useState } from "react";
import ButtonQuery from "./ButtonQuery";
import Button from "./Button";
import { useTodaysTasks } from "../_lib/hooks/context/TodaysProvider";

export default function HeaderDoLater() {
  const [date, setDate] = useState('')
  const [doLater, setDoLater] = useState([])
  const {savedTasks, setSavedTasks} = useTodaysTasks()
const [disabled, setDisabled] = useState(true)

useEffect(()=>{
  if (doLater.length === 0 || date.trim() === '') {setDisabled(true)} else setDisabled(false)
},[doLater, date])


  function handleSave(e) {
    e.preventDefault();
    if (date.trim() === '') return;
    const existingIndexGeneral = savedTasks.findIndex(entry => entry.date === date)
    if (existingIndexGeneral !== -1) {
      const updatedTasks = [...savedTasks];
      updatedTasks[existingIndexGeneral] = {
        date,
        tasks: [...updatedTasks[existingIndexGeneral].tasks, ...doLater],
      };
      setSavedTasks(updatedTasks);
    } else {
      setSavedTasks([...savedTasks, { tasks: doLater, date }]);
    }
    setDate('');
    setDoLater([]);
  }

  return (
    <div className="max-w-screen p-1 sm:px-5">
      <div className=" h-fit sm:mx-36 mx-0 px-11">
        <Link href="/saved">
          <div
            className="w-full bg-green-400 hover:bg-blue-400 transition-colors duration-300 ease-in-out
 text-center rounded-sm sm:rounded-md cursor-pointer mb-2 sm:my-9 sm:py-2 py-1 text-sm sm:text-lg "
          >
            SHOW SAVED TASKS 🔍
          </div>
        </Link>
      </div>

      <div className="flex flex-row justify-end items-center sm:mx-6">
        <input
          className="w-full m-1 sm:my-9 p-2 text-sm sm:text-lg text-center border border-green-400 hover:border-amber-400 bg-stone-900/70 rounded-sm sm:rounded-md sm:ml-5"
          placeholder="Search Date 🔍📅"
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
           onBlur={(e) => (e.target.type = 'text')}
          inputMode="numeric"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSave} disabledOnDefault={disabled}><svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[19px] h-[19px] sm:w-[28px] sm:h-[28px]"  viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
  <g stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
     <polyline points="3,3 3,50 48,50 48,15 35,3 3,3"></polyline>
      <polyline points="35,3 35,16 16,16 16,3 29,3 29,7"></polyline>
      <polyline points="10,50 10,30 40,30 40,50"></polyline>
       <line x1="16" y1="45" x2="34" y2="45"/>
         <line x1="16" y1="40" x2="34" y2="40"/>
          <line x1="16" y1="35" x2="34" y2="35"/>
  </g>
</svg> </Button>
      </div>

      <div className="flex flex-col text-center">
        <div className="flex flex-row items-center my-2 sm:mx-6 justify-end">
          <ButtonQuery
            tasks={doLater}
            setTasks={setDoLater}
            placeholder="Add Todoes For Later.."
          />
        </div>
        {doLater.length === 0
          ? 'Add Todoes & Save The Date 📆'
          : <ToggleList setTasks={setDoLater} tasks={doLater}  onDelete={(id) =>
      setDoLater((prev) => prev.filter((item) => item.id !== id))
    }   toggle={false} />}
      </div>
    </div>
  )
}
