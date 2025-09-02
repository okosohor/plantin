import Card from "components/Card"
import CardListHeading from "components/CardListHeading"
import TryForFreeBlock from "components/TryForFreeBlock"
import { Article } from "types/article"

interface Props {
  title? : string
  articles: Article[]
}

export default function CardList({ title, articles }: Props) {
  return (
    <>
   <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-14">
   </section>

   <CardListHeading title="Interesting"/>


   <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-14">
    {articles.map(item => 
      <Card key={item.id} article={item}/>
    )}
   </section>

  <TryForFreeBlock/>
  </>
  )
}