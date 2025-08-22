import { useState } from "react"
import Button from "./Button";
import { generateUUID } from "../_lib/hooks/config";
// reusable Comp for Todoes, Shop, Do-Later
export default function ButtonQuery({setTasks, tasks, placeholder}){
const [query, setQuery] = useState('')
function handleQuery(e){
  e.preventDefault();
  if (query.trim() === '') return;
  setTasks([...tasks, {  id: generateUUID(), task: query.trim(), done: false, delete:false }]);  // how state looks like
  setQuery('')
}
   return <> <input type="text" className="w-full m-1 sm:my-9 p-2 text-sm sm:text-lg text-center border border-green-400 hover:border-amber-400 bg-stone-900/70 rounded-sm sm:rounded-md sm:ml-5"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleQuery}><svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[19px] h-[19px] sm:w-[28px] sm:h-[28px]" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
  <g stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
     <polyline points="50,35 50,20 35,20 35,5 20,5 20,20 5,20 5,35 20,35 20,50 35,50 35,35 50,35"></polyline>
     <line x1="33" y1="30" x2="37" y2="30" stroke="white" strokeWidth="2" />
     <line x1="39" y1="30" x2="47" y2="30" stroke="white" strokeWidth="2" />
  </g>
</svg>
  </Button>
          </>
}

