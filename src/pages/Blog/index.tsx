import Breadcrumbs from 'components/Breadcrumbs';
import CardList from 'components/CardList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import HeroBlock from 'components/HeroBlock';
import { ARTICLES } from 'data/articles';

export default function Blog() {
  const articles = ARTICLES;

  return (
    <>
      <Header />
      <main className="pt-16 lg:max-w-[1074px] mb-[6rem] lg:mb-[6.25rem] lg:mx-auto p-4 lg:p-0">
        <Breadcrumbs/>
        <HeroBlock/>
        <CardList articles={articles}/>
      </main>
      <Footer/>
    </>
  );
}
