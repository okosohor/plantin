import { Article } from 'types/article';

interface Props {
  article: Article;
  isLarge?: boolean;
}

export default function Card({ article, isLarge = false }: Props) {
  const { title, text, time, date, image } = article;
  return (
    <article className={`flex flex-col ${isLarge ? 'lg:flex-row lg:gap-8 lg:items-stretch' : ''}`}>
      <img
        src={`images/${image}`}
        alt={image}
        className={`mb-4 w-full rounded-xl hover:scale-[1.015] transition-all duration-300 ${
          isLarge ? 'lg:w-[calc(50%-1rem)] lg:mb-0 lg:flex-shrink-0 lg:h-full lg:object-cover' : ''
        }`}
      />
      <div className={`w-full ${isLarge ? 'lg:w-[calc(50%-1rem)]' : ''}`}>
        <span className="text-[1rem] font-normal text-brand-grey-light leading-[1.5rem]">
          {date + ' · ' + time + ' read'}
        </span>
        <h3 className={`font-bold text-[1.5rem] text-brand-black-title ${isLarge ? 'lg:text-[3rem]' : ''}`}>{title}</h3>
        <p className="text-[1rem] font-normal text-brand-grey">{text}</p>
      </div>
    </article>
  );
}