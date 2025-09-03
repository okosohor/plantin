import FooterNavigation from 'components/FooterNavigation';
import FooterTerms from 'components/FooterTerms';

export default function Footer() {
  return (
    <footer className="lg:max-w-[1074px] text-[0.875rem] lg:text-[1rem] font-normal text-brand-grey-text w-full flex flex-col lg:flex-row gap-6 items-center justify-between p-4 mx-auto lg:pb-[5.125rem] pt-0">
      <FooterNavigation/>
      <FooterTerms/> 
    </footer>
  )
}