export default function BinIcon({maxReached}){
   return( <svg filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))" className="w-[19px] h-[19px] sm:w-[28px] sm:h-[28px]" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"> <g stroke={`${maxReached ? 'white' : 'gray'}`}  strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
     <polyline points="2,9 18,9 22,2 30,2 34,9 51,9 9,9"></polyline>
   <polyline points="3,15 50,15 45,15 43,26"></polyline>
   <polyline points="8,15 14,50 39,50"></polyline>
       <circle cx="40" cy="38" r="11" />
       <polyline  points="35,38 39,42 45,34"></polyline>  
       <line x1="22" y1="42" x2="22" y2="25"/>
       <line x1="31" y1="31" x2="31" y2="25"/>
  </g> 
</svg>  )
}