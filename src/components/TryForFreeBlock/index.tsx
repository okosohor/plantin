import Button from "components/Button"
import Logo from "components/Logo"

export default function TryForFreeBlock() {
  return (
    <section className="relative flex flex-col bg-brand-green-light lg:bg-gradient-to-r lg:from-brand-green-gradient-start lg:to-brand-green-gradient-end rounded-2xl lg:rounded-xl w-full lg:p-6 p-4">
      <Logo/>
      <h4 className="text-brand-green font-semibold text-[1.5rem] lg:text-[2rem] mt-4 lg:mt-6 mb-2">Get unlimited access to exclusive articles</h4>
      <p className="font-medium text-[1.125rem] text-brand-black lg:text-[1.5rem] mb-4 lg:mb-6">Get rid of limits and read everything you wish</p>
      <Button text="Try For Free" />
      <img
        className="w-[336px] h-[261px] absolute top-[-9px] right-[-15px] hidden lg:flex"
        src='/images/TryForFree.png'
        alt='Try for free' 
      />
    </section>
  )
}