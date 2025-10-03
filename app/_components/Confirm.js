export default function Confirm ({clickYes, clickNo}){
    return(<div className="min-w-screen min-h-screen absolute z-50 top-0 right-0 flex flex-col items-center justify-start bg-[#00000080] backdrop-blur-xs font-extrabold text-shadow-lg text-shadow-stone-700">
  <div className="relative w-[80vw] h-fit py-10 flex flex-col items-center justify-around border-sky-400 border-2 rounded-2xl my-20
  ">Are you sure you want to delete all checked items?
    </div>
    <div className="flex flex-row gap-10 items-center justify-evenly border-sky-400 border-2 rounded-2xl "><div className="cursor-pointer p-10 hover:border-2 rounded-2xl hover:border-emerald-400" onClick={clickYes}> YES </div><div className="cursor-pointer p-10 hover:border-2 rounded-2xl hover:border-amber-400" onClick={clickNo}> NO </div></div>
    </div>)}