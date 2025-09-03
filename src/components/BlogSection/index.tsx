import Card from 'components/Card';
import CardListHeading from 'components/CardListHeading';
import CardPlaceholder from 'components/CardPlaceholder';
import Tag from 'components/Tag';
import { Article } from 'types/article';

interface Props {
  articles: Article[],
  largeCards?: boolean,
  title?: string,
  tag?: boolean,
  placeholder?: boolean // only for demo
  gridCols: 1 | 2 | 3
}

export default function BlogSection({ title, tag = false, largeCards = false, articles, placeholder=false ,gridCols }: Props) {
  const colsNumber = gridCols === 1 ? 'lg:grid-cols-1' :  gridCols === 2 ? ' lg:grid-cols-2' : 'lg:grid-cols-3'
  return (
    <>
      {tag && <Tag/>}
      {title && <CardListHeading title={title}/>}
      {(title && articles.length === 0 ) && (
        
        <h4 className="font-bold text-[1.5rem] text-brand-black-title">Articles not founded</h4>
      )
      }
      <section className={'w-full grid grid-cols-1 gap-x-8 gap-y-6 lg:gap-y-14 mb-6 lg:mb-[3.5rem] ' + colsNumber}>
        {articles.map(item => 
          <Card isLarge={largeCards} key={item.id} article={item}/>
        )}
        {
        //only for demo
          (placeholder && articles.length === 0) && (
            <>
              <CardPlaceholder/>
              <CardPlaceholder/>
              <CardPlaceholder/>
            </>
          )
        }
      </section>
    </>
  )
}