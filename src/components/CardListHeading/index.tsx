interface Props {
  title: string;
}

export default function CardListHeading({ title }: Props) {
  return (
    <h4 className="w-full border-t text-left pb-4 pt-2 lg:pt-4 border-brand-grey-text uppercase text-brand-grey-text text-sm leading-[1.5rem] font-bold">
      {title}
    </h4>
  )
}