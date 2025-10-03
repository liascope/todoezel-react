export default function ArrowIcon({toggle}){
    return( <svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[20px] h-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
  {toggle ? <polyline points="6 15 12 9 18 15" /> : <polyline points="6 9 12 15 18 9"/>}
  </g>
</svg>)
}