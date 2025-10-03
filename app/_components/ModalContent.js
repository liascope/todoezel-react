
export default function ModalContent ({onClose}) {

  return <div className="min-w-screen min-h-screen absolute z-50 top-0 right-0 flex flex-col items-center justify-start bg-[#00000080] backdrop-blur-xl">
  <div className="relative w-[80vw] h-[70vh] overflow-y-scroll flex flex-col items-center justify-around border-sky-400 border-2 rounded-2xl my-20
  "role="dialog"
      aria-modal="true" >
    <div className="sticky top-0 w-full flex flex-row justify-between items-center py-3 px-7 rounded-b-lg bg-emerald-400/90 backdrop-blur-3xl">
      <h2 className="tracking-widest text-2xl sm:text-3xl py-2 rounded-r-2xl">Todoezel-App</h2>
      <button 
        onClick={onClose} 
        className="cursor-pointer border-l-2 pl-2 text-2xl sm:text-4xl hover:text-red-700 transition-colors duration-200 py-2 rounded-l-2xl "
      >
        ✗
      </button>
    </div>
    <div className=" flex flex-col items-center justify-between gap-7 my-7 px-7">
        <p>
          The app provides an innovative and independent solution for task
          management. It combines
          flexibility, user-friendliness, and motivation to help you manage your
          tasks in a new and engaging way. It was created with attention to
          detail and a vision to give users the best overview and highest
          productivity. Here are the sections and functionalities described:
        </p>
        <h3>To Do</h3>

        The To Do page allows you to easily create random, non-date-based tasks
        and notes. Once a task is completed, you can mark it as done, and the
        progress tracker will show you how much you have accomplished. This helps
        you stay motivated and keep track of your progress.

        <h3>Shop</h3>

        The Shop page is dedicated solely to creating and managing your shopping
        list. Here, you can list the items you need to buy, without any progress
        tracker, allowing for a clean and focused experience just for shopping.

        <h3>Do Later</h3>

        On the Do Later page, you can set up date-based tasks that you want to
        complete later. Simply add a task and choose the date it should be done.
        Once the date arrives, your tasks will automatically appear in the Today
        Header. 

        <h3>Show All Saved Tasks</h3>

        On the Do Later page, you can also see all saved tasks by clicking on
        Show all saved tasks. This shows the last three tasks, and once new
        tasks are added, older ones are automatically removed. You can also
        manually delete tasks from this list, and they will be removed from both
        the app and the Today Header.

        <h3>Todays Tasks</h3>

        The Today Header gives you a clear overview of the tasks you need to
        complete today. These tasks automatically appear if you’ve set a due
        date for them on the Do Later page. You can check them off and track
        your progress, staying motivated to finish everything you planned for today.

        <h3>Delete</h3>

        Just click on the task you wish to remove, and a red X will
        appear. Click it, and the task will be permanently deleted.

        <h3>Check and Progress</h3>

        Each task can be marked as complete by clicking the checkbox. Once you
        check a task, the progress bar will update, giving you an immediate
        overview of how much you have accomplished. This visual feedback is
        designed to help you stay focused and motivated to complete your goals.

        <h3>Legal Information</h3>

        This app was developed by Liascope, who holds all rights to its
        design, functionality, and content. By using the Todoezel App, you are
        granted a non-exclusive, non-transferable license for personal use only.
        Redistribution, sale, or reverse engineering of the app is prohibited
        without prior consent. The app is provided as is without warranties.
      </div></div>
    </div>
}