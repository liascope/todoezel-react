export default function ShopIcon({ className }) {
  return (
    <svg
      viewBox="0 0 77 77"
      xmlns="http://www.w3.org/2000/svg"
      className={className} filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.5))"
    >
      <g stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <polyline points="6,9 13,9 14,9 23,43 60,43 68,16 18,16" />
        <polyline points="23,43 20,45 19,47 19,49 20,51 22,52 60,52 " />
        <circle cx="53" cy="60" r="4" />
        <circle cx="30" cy="60" r="4" />
      </g>
    </svg>
  )
}
