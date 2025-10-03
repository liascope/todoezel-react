'use client'
import { createContext, useContext, useEffect, useState } from "react";
import {todayISO} from "../config"
import useStorage from "../useStorage";

const TodaysContext = createContext();

export function TodaysProvider({ children }) {

    const [savedTasks, setSavedTasks] = useStorage('savedTasks', [])
    const [todaysTask, setTodaysTask] =useState({})
    const [firstTask, setFirstTask] = useState('..search for Todays Tasks🔍..')
    
    useEffect(()=>{
    const unDone = todaysTask?.tasks?.find(t => !t.done)
    const displayTask = todaysTask?.tasks?.length > 0 ? unDone?.task || todaysTask?.tasks?.find(t=>t.task)?.task : 'Nothing saved for today 📭'
    setFirstTask(displayTask)
    if (todaysTask?.tasks?.length > 0 && todaysTask?.tasks?.every(task => task?.done)) {
  setFirstTask('You did 100% for Today!')
}
 },[todaysTask])
    
 // delete > last past 3 tasks
useEffect(() => {
  if (!Array.isArray(savedTasks) || savedTasks.length === 0) return;
  const pastSorted = savedTasks
    .filter(entry => entry.date < todayISO)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const lastThreePastDates = pastSorted.slice(-3).map(e => e.date);
  const updatedTasks = savedTasks.filter(
    entry =>
      entry.date === todayISO ||
      entry.date > todayISO ||
      lastThreePastDates.includes(entry.date)
  );
  if (updatedTasks.length !== savedTasks.length) {
    setSavedTasks(updatedTasks);
    localStorage.setItem("savedTasks", JSON.stringify(updatedTasks));
  }
}, [savedTasks, setSavedTasks]);

    useEffect(()=>{
      if (!Array.isArray(savedTasks)) {
      console.error('savedTasks is not an array:', savedTasks);
      return;
    }
    
    const todaysTasks = savedTasks
        .filter(entry => entry.date === todayISO)
        .map(entry => ({
          ...entry,
          tasks: entry.tasks.filter(t => !t.delete),
        }))[0] || { date: todayISO, tasks: [] };
    
      setTodaysTask(prev => {
        const isSame =
          prev?.date === todaysTasks.date &&
          JSON.stringify(prev.tasks) === JSON.stringify(todaysTasks.tasks);
        return isSame ? prev : todaysTasks;
      });
    },[savedTasks,todaysTask])
  return (
    <TodaysContext.Provider
      value={{ todaysTask, firstTask, savedTasks, setSavedTasks,}}
    >
      {children}
    </TodaysContext.Provider>
  );
}

export function useTodaysTasks() {
  const context = useContext(TodaysContext);
  if (!context) {
    throw new Error('useTodaysTasks must be used within TodaysProvider');
  }
  return context;
}