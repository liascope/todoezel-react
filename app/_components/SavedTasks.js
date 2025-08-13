'use client'

import useStorage from "../_lib/hooks/useStorage";
export default function SavedTasks(){
 const [savedTasks, setSavedTasks] = useStorage('savedTasks',[])

function handleDelete(index) {
  const newTasks = savedTasks?.filter((_, i) => i !== index);
  setSavedTasks(newTasks);
}

    return <ul className="list-none mx-1 my-1 sm:mx-8 sm:my-10 text-center">
    {savedTasks?.length > 0 && <h2>Your Saved Tasks or Notes 🗂️</h2>}
  {savedTasks?.length === 0 ? 'No Saved Tasks or Notes 🗂️' : (
  savedTasks?.map((entry, index) => (
    <li
      key={index}
      className="odd:bg-black/30 z-10 even:bg-black/50 text-justify mx-2 sm:mx-16 px-3 sm:px-16 sm:text-xl py-1 sm:py-4 my-2 sm:my-4 rounded flex justify-between tracking-widest font-medium hover:bg-black/20"
    ><span>
      <strong className="mx-1 sm:mx-4">{entry.date} ▶ </strong>
      {entry.tasks.map((task, i) => (
        <span
          key={i}
          className={task.done ? "opacity-50 mr-1 sm:mr-3" : "sm:mxr-1"}
        >
          {task.task}
          {i < entry.tasks.length - 1 ? " - " : ""}
        </span> 
      ))} </span> <span
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(index);
          }}
          className="cursor-pointer text-red-400 hover:text-red-600 ml-7 sm:ml-3 flex items-center "
        >
          ✗
        </span>
    </li>
  )))}

</ul>
}
