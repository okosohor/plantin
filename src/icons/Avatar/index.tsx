interface Props {
  className?: string,
  size?:number
}

export default function Avatar({size = 32, className = ''}: Props) {
 return (
  <svg 
    className={className}
    width={size}
    height={size}
    viewBox="0 0 28 28" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
   >
    <g clip-path="url(#clip0_1864_3)">
    <circle cx="14" cy="14" r="12.6" fill="#F1F2F6" stroke="#E0E7F1" stroke-width="1.2"/>
    <ellipse cx="14" cy="25.5" rx="11" ry="9.5" fill="#ADB8C8"/>
    <circle cx="14" cy="10" r="4" fill="#ADB8C8"/>
    </g>
    <rect x="1.4" y="1.4" width="25.2" height="25.2" rx="12.6" stroke="#C5D1DB" stroke-width="1.2"/>
    <defs>
    <clipPath id="clip0_1864_3">
    <rect x="2" y="2" width="24" height="24" rx="12" fill="white"/>
    </clipPath>
    </defs>
  </svg>
 )
}
