interface Props {
  className?: string,
  size?:number
}

export default function Arrow({size = 32, className = ''}: Props) {
  return (
    <svg 
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.3333 6L16 12L10.3333 18L9 16.5882L13.3333 12L9 7.41177L10.3333 6Z" fill="#D8E1ED"/>
    </svg>
  )
}