export default function Button({ children, onClick, disabledOnDefault = false, textSize = 'text-xl' }) {

  return (
    <button
      onClick={onClick}
      disabled={disabledOnDefault}
      className={` bg-green-400 hover:bg-blue-400 py-2 transition-colors duration-300 ease-in-out rounded-sm sm:rounded-md flex justify-center items-center w-18 sm:w-28
 cursor-pointer mr-1 sm:mx-2 disabled:bg-stone-700/50 disabled:cursor-not-allowed ${textSize}`}
    >
      {children}
    </button>
  )
}