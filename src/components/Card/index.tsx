import { Article } from "types/article"

interface Props {
  article: Article
}

export default function ({ article }: Props) {
  const {
    id,
    title,
    text,
    time,
    date,
    image,
    type,
  } = article
  return (
    <article className="flex">
      <img src={`images/${image}`} alt={image} />
    </article>
  )
}