export default function TodoIcon({ className }) {
  return (
    <svg
      viewBox="0 0 85 85"
      xmlns="http://www.w3.org/2000/svg"
      className={className} filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"
    >
      <g stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <polyline points="10,12 15,22 28,7" />
        <line x1="35" y1="12" x2="70" y2="12" />
        <line x1="35" y1="20" x2="55" y2="20" />
        <polyline points="10,32 15,42 28,27" />
        <line x1="35" y1="32" x2="70" y2="32" />
        <line x1="35" y1="40" x2="55" y2="40" />
        <g transform="translate(0,56)">
          <circle cx="18" cy="1" r="8" />
          <line x1="35" y1="-4" x2="70" y2="-4" />
          <line x1="35" y1="4" x2="55" y2="4" />
        </g>
      </g>
    </svg>
  )
}
