import { useEffect, useState } from "react"
import Button from "./Button";
import { generateUUID } from "../_lib/hooks/config";
import PlusIcon from "./NavIcons/PlusIcon";
// reusable Comp for Todoes, Shop, Do-Later
export default function ButtonQuery({setTasks, tasks, placeholder}){
const [query, setQuery] = useState('')
const [disabled, setDisabled] = useState(true)

useEffect(()=>{
if (query.trim() === '') {setDisabled(true)} else setDisabled(false);
},[query])

function handleQuery(e){
  e.preventDefault();
  if (query.trim() === '') return;
  setTasks([...tasks, {  id: generateUUID(), task: query.trim(), done: false, delete:false }]);  // how state looks like
  setQuery('')
}
   return <> <input type="text" className="w-full m-1 sm:my-9 p-2 text-sm sm:text-lg text-center border border-emerald-400 hover:border-amber-400 bg-stone-900/70 rounded-sm sm:rounded-md sm:ml-5"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleQuery} disabledOnDefault={disabled}><PlusIcon/> </Button>
          </>
}

