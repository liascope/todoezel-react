'use client'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Button from "./Button";
import ButtonQuery from "./ButtonQuery"
import Percent from "./Percent"
import ToggleList from "./ToggleList";
import useStorage from "../_lib/hooks/useStorage"
import { doneTasksToDelete } from "../_lib/hooks/config"
import BinIcon from "./NavIcons/BinIcon";

// reusable Comp for Todo ('/') & Shop ('/shop') - state without date
export default function HeaderTodo(){
const pathname = usePathname()
const todo = pathname=== '/';
const shop = pathname === '/shop'
const [todoes, setTodoes] = useStorage(`${todo ? 'todoes' : shop ? 'shopItem' : ''}`, []);
const [maxReached, setMaxReached] = useState(false)

useEffect(() => {
  const doneTasks = todoes?.filter(t => t.done && !t.delete)?.length
  setMaxReached(doneTasks >= doneTasksToDelete);
}, [todoes]);

return <>    <div className="max-w-screen sm:px-5 flex flex-row items-center mx-1 sm:mx-6 justify-end  relative">
  {todo && <Percent arr={todoes}></Percent>}
         
     <div className="w-full flex items-center flex-row"><ButtonQuery tasks={todoes} setTasks={setTodoes} placeholder={todo ? 'Add Todoes / Notes..' : 'Add Shop Items..'}>
              </ButtonQuery>
<Button onClick={() => { if (window.confirm("Are you sure you want to delete all checked items?")) {setTodoes((prev) => prev.filter((item) => !item.done));}}} 
disabledOnDefault={!maxReached} textSize="text-xs" > <BinIcon maxReached={maxReached}/>
</Button> </div>
            </div>
            
             {todoes.length === 0 ? (
  todo ? 'No Todoes / Notes Yet 📋' : shop ? 'No Shop Items Yet 🛒' : ''
) : (
    <ToggleList
    tasks={todoes}
    onDelete={(id) =>
      setTodoes((prev) => prev.filter((item) => item.id !== id))
    }
    onToggle={(id) =>
      setTodoes((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
      )
    }
    maxHeight={`${todo ? 'max-h-113 sm:max-h-113': 'max-h-120 sm:max-h-113'} `}
  />

)} </>
}
