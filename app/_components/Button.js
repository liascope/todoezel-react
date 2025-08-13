export default function Button({ children, onClick, disabledOnDefault = false, textSize = 'text-xl' }) {

  return (
    <button
      onClick={onClick}
      disabled={disabledOnDefault}
      className={` bg-green-400 hover:bg-blue-400 transition-colors duration-300 ease-in-out rounded-md
 cursor-pointer w-28 py-1 mx-1 sm:py-2 sm:mx-2 disabled:bg-stone-700/50 disabled:cursor-not-allowed ${textSize}`}
    >
      {children}
    </button>
  )
}