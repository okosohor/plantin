import { HEADER_NAVIGATION_LINKS } from 'data/navigationLinks';

export default function HeaderNavigation() {
  return (
    <nav className="flex items-center">
      <ul className="lg:flex gap-6 hidden">
        {HEADER_NAVIGATION_LINKS.map(item => (
          <li className="text-[1rem] hover:scale-[1.1] font-medium cursor-pointer text-brand-black-secondary border-white hover:border-brand-black-secondary border-b-2 transition-all duration-300" key={item.text}>
            <a  href={item.url}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}