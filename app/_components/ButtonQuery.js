import { useState } from "react"
import Button from "./Button";
import Image from "next/image";
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
   return <> <input type="text" className="w-full my-2 sm:my-9 sm:py-2 p-1 text-center border border-green-400 hover:border-amber-400 bg-stone-900/70 rounded-md sm:ml-30"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button onClick={handleQuery}>  <Image
                      src="/plus.png"
                      alt="Add"
                      width={28}
                      height={28}
                      className="mx-auto invert"
                    /></Button>
          </>
}
