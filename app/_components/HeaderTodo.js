'use client'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Button from "./Button";
import ButtonQuery from "./ButtonQuery"
import Percent from "./Percent"
import ToggleList from "./ToggleList";
import useStorage from "../_lib/hooks/useStorage"
import { doneTasksToDelete } from "../_lib/hooks/config"

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

return <>    <div className="max-w-screen sm:px-5 flex flex-row items-center mx-1 sm:mx-6 justify-end relative">
  {todo && <Percent arr={todoes}></Percent>}
         
     <div className="w-full flex items-center flex-row"><ButtonQuery tasks={todoes} setTasks={setTodoes} placeholder={todo ? 'Add Todoes / Notes..' : 'Add Shop Items..'}>
              </ButtonQuery>
<Button onClick={() => { if (window.confirm("Are you sure you want to delete all checked items?")) {setTodoes((prev) => prev.filter((item) => !item.done));}}} 
disabledOnDefault={!maxReached} textSize="text-xs" >
 <svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[19px] h-[19px] sm:w-[28px] sm:h-[28px]" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"> <g stroke={`${maxReached ? 'white' : 'gray'}`}  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
     <polyline points="2,9 18,9 22,2 30,2 34,9 51,9 9,9"></polyline>
   <polyline points="3,15 50,15 45,15 43,26"></polyline>
   <polyline points="8,15 14,50 39,50"></polyline>
       <circle cx="40" cy="38" r="11" />
       <polyline  points="35,38 39,42 45,34"></polyline>  
       <line x1="22" y1="42" x2="22" y2="25"/>
       <line x1="31" y1="31" x2="31" y2="25"/>
  </g> 
</svg>   </Button> </div>
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
    maxHeight={`${todo ? 'max-h-98 sm:max-h-113 pb-5': 'max-h-120 sm:max-h-113 pb-10'} `}
  />

)} </>
}
