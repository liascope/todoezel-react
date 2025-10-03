export default function LaterIcon({ className }) {
  return (
    <svg
      viewBox="0 0 65 65"
      xmlns="http://www.w3.org/2000/svg"
      className={className} filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"
    >
      <g stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <polyline points="29,45 2,45 2,10 45,10 45,31" />
        <line x1="13" y1="13" x2="13" y2="6" />
        <line x1="24" y1="13" x2="24" y2="6" />
        <line x1="35" y1="13" x2="35" y2="6" />
        <polyline points="2,19 45,19 " />
        <line x1="8" y1="32" x2="11" y2="32" />
        <line x1="8" y1="38" x2="11" y2="38" />
        <line x1="17" y1="26" x2="20" y2="26" />
        <line x1="17" y1="32" x2="20" y2="32" />
        <line x1="17" y1="38" x2="20" y2="38" />
        <line x1="26" y1="26" x2="29" y2="26" />
        <line x1="26" y1="32" x2="29" y2="32" />
        <line x1="35" y1="26" x2="38" y2="26" />
        <circle cx="40" cy="42" r="11" />
        <polyline points="45,42 40,42 40,35" />
      </g>
    </svg>
  )
}
