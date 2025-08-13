'use client'
import Link from "next/link"
import ToggleList from "./ToggleList";
import { useState } from "react";
import ButtonQuery from "./ButtonQuery";
import Button from "./Button";
import Image from "next/image";
import { useTodaysTasks } from "../_lib/hooks/context/TodaysProvider";

export default function HeaderDoLater() {
  const [date, setDate] = useState('')
  const [doLater, setDoLater] = useState([])
  const {savedTasks, setSavedTasks} = useTodaysTasks()

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
    <div className="max-w-screen px-5">
      <div className=" h-fit sm:mx-36">
        <Link href="/saved">
          <div
            className={`w-full bg-green-400 hover:bg-blue-400 transition-colors duration-300 ease-in-out
 py-1 text-center rounded-md cursor-pointer my-3 sm:my-9 sm:py-2  `}
          >
            SHOW SAVED TASKS 🔍
          </div>
        </Link>
      </div>

      <div className="flex flex-row justify-end items-center sm:mx-6">
        <input
          className="w-full flex justify-center text-center border rounded-md px-1 py-1 sm:py-2  border-green-400 hover:border-amber-400 bg-stone-900/70 sm:ml-30"
          placeholder="Search Date 🔍📅"
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
           onBlur={(e) => (e.target.type = 'text')}
          inputMode="numeric"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSave}>  <Image
                    src="/save.png"
                    alt="Save"
                    width={28}
                    height={28}
                    className="mx-auto invert"
                  /></Button>
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
