'use client'
import {useTodaysTasks} from "../_lib/hooks/context/TodaysProvider";
import ToggleList from "./ToggleList"
import { todayISO, today } from "../_lib/hooks/config";
export default function TodaysTasks (){
const {todaysTask, setSavedTasks,} = useTodaysTasks();

const deleteTodaysTask = (id) => {
setSavedTasks(prev =>
  prev.map((entry) =>
    entry.date === todayISO
      ? {
          ...entry,
          tasks: entry.tasks.map(task =>
            task.id === id ? { ...task, delete: true } : task
          )
        }
      : entry
  )
);
}
const toggleTodaysDoneTask = (id) => {
setSavedTasks(prev =>
  prev.map((entry) =>
    entry.date === todayISO
      ? {
          ...entry,
          tasks: entry.tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
          )
        }
      : entry  ));
};

return  todaysTask?.tasks?.length === 0 ? <div className="w-full text-center py-10">No Tasks for today | {today}</div> : <ToggleList maxHeight="max-h-132 sm:max-h-145"
        tasks={todaysTask?.tasks}
        onDelete={deleteTodaysTask}
        onToggle={toggleTodaysDoneTask}
        />
}