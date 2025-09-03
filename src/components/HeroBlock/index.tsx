import Input from 'components/Input';

interface Props {
  query: string,
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function HeroBlock({ query, handleSearch }: Props) {
  return (
    <section className="relative flex w-full bg-brand-green-light p-4 lg:p-[3.5rem] rounded-2xl  flex-col items-start justify-center mb-[1.125rem] lg:mb-12">
      <h4 className="text-brand-green font-extrabold text-[1.5rem] lg:text-[2rem]  mb-2">Stay always tuned with planting trends</h4>
      <p className="lg:hidden font-bold text-[1.125rem] text-brand-black mb-4">Tips & Tricks <span className="font-medium">selected specially for</span> you!</p>
      {
        //TODO MOVE TO SEPARATE COMPONENT
      }
      <p className="hidden lg:inline font-bold text-[1.125rem] text-brand-black mb-4">Current temperature is: 24°C</p>
      <Input query={query} handleSearch={handleSearch}/>
      
      <img
        className="w-[379px] h-[259px] absolute bottom-0 right-0 hidden lg:flex"
        src="/images/Hero.png"
        alt="Try for free" 
      />
    </section>
  )
}