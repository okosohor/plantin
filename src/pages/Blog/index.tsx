import Breadcrumbs from 'components/Breadcrumbs';
import CardList from 'components/CardList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeroBlock from 'components/HeroBlock';
import { ARTICLES } from 'data/articles';
import useDebounce from 'hooks/useDebounce';
import { useMemo, useState, ChangeEvent } from 'react';

export default function Blog() {
  const articles = ARTICLES;
  const [query, setQuery]= useState('')
  const debouncedQuery = useDebounce(query, 250);

  const filteredInterestingArticles = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return articles.interestingArticles;
    return articles.interestingArticles.filter(({title, text}) =>
      (title.toLowerCase() + text.toLowerCase()).includes(q)
    );
  }, [articles.interestingArticles, debouncedQuery]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Header />
      <main className="pt-16 lg:max-w-[1074px] mb-[6rem] lg:mb-[6.25rem] lg:mx-auto p-4 lg:p-0 lg:pt-16">
        <Breadcrumbs/>
        <HeroBlock query={query} handleSearch={handleSearch}/>
        <CardList articles={{
          ...articles,
          interestingArticles: filteredInterestingArticles,
        }}/>
      </main>
      <Footer/>
    </>
  );
}
