interface Props {
  text: string,
}

export default function Button({ text }: Props) {
  return (
    <button className="w-full lg:hover:scale-[1.1]  transition duration-300 cursor-pointer text-white lg:max-w py-2 px-8 flex items-center justify-center lg:w-max bg-brand-green rounded-lg font-medium text-[1rem]">
      {text}
    </button>
  )
}