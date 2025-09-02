import SearchInput from "icons/SearchInput";

interface Props {
  placeholder?: string,
}

export default function Input ({ placeholder = 'Search', }: Props) {
  return (
    <label className="gap-4 flex justify-between rounded-xl p-[0.625rem] lg:p-4 overflow-hidden items-center bg-white w-full lg:max-w-[32.625rem] border-2 border-transparent focus-within:border-brand-grey-text transition-all duration-100">
      <input
        placeholder={placeholder}
        type="text"
        className="w-full outline-none focus:outline-none placeholder:text-brand-grey-text [caret-color:#91A0B6] text-brand-black-secondary text-sm lg:text-[1rem]"
      />
      <SearchInput size={24} className="w-full max-w-6"/>
    </label>
  )
}