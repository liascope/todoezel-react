'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToggleList({ tasks, onDelete, onToggle, toggle = true, maxHeight='max-h-93 sm:max-h-70'}) {
  const [toggleItems, setToggleItems] = useState({});

  return (
    <ul onClick={(e) => e.stopPropagation()} className={`overflow-y-auto w-full sm:pb-24 pb-10 ${maxHeight}`}>
      <AnimatePresence>
        {tasks?.map((task) => (
          <motion.li  
            key={task.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="even:bg-black/30 odd:bg-black/50 text-left mx-2 sm:mx-16 px-3 sm:px-16 text-sm sm:text-xl py-1 sm:py-4 my-2 sm:my-4 rounded flex justify-between sm:tracking-wider sm:font-medium hover:bg-black/20"
            onClick={() =>
              setToggleItems((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
            }
          >
            <span className={task?.done ? "line-through opacity-50" : ""}>
              {task?.task}
            </span>
            <div className="flex items-center gap-1 max-h-">
              {!toggleItems[task.id] && toggle ? (
                <input
                  type="checkbox"
                  checked={!!task?.done}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => onToggle?.(task.id, task)}
                  className="w-4 h-4 sm:w-6 sm:h-6 ml-7 sm:ml-3"
                />
              ) : (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.(task.id, task);
                  }}
                  className="cursor-pointer text-red-400 hover:text-red-600 hover:scale-150 ml-7 sm:ml-3"
                >
                  ✗
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
