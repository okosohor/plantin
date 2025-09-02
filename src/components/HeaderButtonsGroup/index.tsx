import Avatar from "icons/Avatar";
import BurgerMenu from "icons/BurgerMenu";
import SearchInputSmall from "icons/SearchInputSmall";

export default function HeaderButtonGroup() {
  return (
    <div className="flex gap-4 lg:gap-7">
      <button className="hover:scale-[1.2] transition-all duration-300 cursor-pointer">
        <SearchInputSmall className="lg:hidden"/>
        <SearchInputSmall className="hidden lg:flex" size={40}/>
      </button>
      <button className="hover:scale-[1.2] transition-all duration-300 lg:hidden cursor-pointer">
        <BurgerMenu/>
      </button>
      <button className="hover:scale-[1.2] items-center transition-all duration-300 hidden lg:flex cursor-pointer">
        <Avatar size={24}/>
      </button>
    </div>
  )
}