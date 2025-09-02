import { FOOTER_NAVIGATION_LINKS } from "data/navigationLinks";

export default function FooterNavigation() {
  return (
    <nav>
        <ul className="flex flex-col lg:flex-row gap-2 items-center lg:gap-6">
          {FOOTER_NAVIGATION_LINKS.map((item, i) => (
            <li className="flex items-center lg:gap-6 " key={item.text}>
              {i !== 0 && <div className="w-[2px] h-4 bg-brand-grey-footer hidden lg:flex"/>}
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
  )
}