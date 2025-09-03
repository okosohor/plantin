import Card from 'components/Card'
import CardListHeading from 'components/CardListHeading'
import CardPlaceholder from 'components/CardPlaceholder'
import Tag from 'components/Tag'
import TryForFreeBlock from 'components/TryForFreeBlock'
import { ArticlesData } from 'types/articlesData'

interface Props {
  title? : string
  articles: ArticlesData
}

export default function CardList({ articles }: Props) {
  const { topArticles, interestingArticles, newArticles } = articles
  return (
    <>
  
      <Tag/>
      <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:gap-y-14 mb-6 lg:mb-[3.5rem]">
        {newArticles.map(item => 
          <Card isLarge key={item.id} article={item}/>
        )}
      </section>


      <CardListHeading title="Top of the day"/>
      <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 lg:gap-y-14 mb-6 lg:mb-[3.5rem]">
        {topArticles.map(item => 
          <Card key={item.id} article={item}/>
        )}
      </section>


      <CardListHeading title="Interesting"/>
      <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-14 mb-6 lg:mb-[3.5rem]">
        {interestingArticles.slice(0, 6).map(item => 
          <Card key={item.id} article={item}/>
        )}
      </section>
      <TryForFreeBlock/>
      <section className="w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-14 mb-6 lg:mb-[3.5rem]">
        {interestingArticles.slice(6).map(item => 
          <Card key={item.id} article={item}/>
        )}
        <CardPlaceholder />
        <CardPlaceholder />
        <CardPlaceholder />
      </section>

    </>
  )
}