
interface Props {
  className?: string,
  size?:number
}

export default function SearchInputSmall({size = 32, className = ''}: Props) {
 return (
  <svg
    className={className}
    width={size} 
    height={size}
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 24L29 29M26 19C26 22.866 22.866 26 19 26C15.134 26 12 22.866 12 19C12 15.134 15.134 12 19 12C22.866 12 26 15.134 26 19Z" stroke="#C5D1DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
 )
}
