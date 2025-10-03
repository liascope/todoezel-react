export default function Button({ children, onClick, disabledOnDefault = false, customStyle = 'text-xl' }) {

  return (
    <button
      onClick={onClick}
      disabled={disabledOnDefault}
      className={` bg-emerald-400 hover:bg-sky-400 py-2 transition-colors duration-300 ease-in-out rounded-sm sm:rounded-md flex justify-center items-center w-18 sm:w-28 
 cursor-pointer mr-1 sm:mx-2 disabled:bg-stone-700/50 disabled:cursor-not-allowed ${customStyle}`}
    >
      {children}
    </button>
  )
}