import BlogSection from 'components/BlogSection'
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
      <BlogSection 
        articles={newArticles}
        gridCols={1}
        largeCards 
        tag
      />
      <BlogSection 
        articles={topArticles} 
        gridCols={2}
        title="Top of the day" 
      />
      <BlogSection
        articles={interestingArticles.slice(0, 6)}
        gridCols={3}
        title="Interesting"
      />
      <TryForFreeBlock/>
      <BlogSection
        articles={interestingArticles.slice(6)}
        gridCols={3}
        placeholder
      />
    </>
  )
}