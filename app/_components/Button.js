export default function Button({ children, onClick, disabledOnDefault = false, textSize = 'text-xl' }) {

  return (
    <button
      onClick={onClick}
      disabled={disabledOnDefault}
      className={` bg-green-400 hover:bg-blue-400 py-1 transition-colors duration-300 ease-in-out rounded-md flex justify-center items-center sm:py-1 w-28
 cursor-pointer mx-1 sm:mx-2 disabled:bg-stone-700/50disabled:cursor-not-allowed ${textSize}`}
    >
      {children}
    </button>
  )
}