import HeaderButtonGroup from 'components/HeaderButtonsGroup';
import HeaderNavigation from 'components/HeaderNavigation';
import Logo from 'components/Logo';

export default function Header() {
  return(
    <header className="shadow-custom-shadow z-10 bg-white w-full fixed top-0">
      <div className="p-4 lg:py-3 lg:max-w-[1074px] flex justify-between mx-auto">
        <div className="lg:hidden">
          <Logo />
        </div>
        <HeaderNavigation/>
        <HeaderButtonGroup />
      </div>
    </header>
  )
}