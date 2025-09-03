import Arrow from 'icons/Arrow'

export default function Breadcrumbs() {

  // Mocked URL segments (in real case should be parsed from location)
  const pathSegments = ['Home', 'Blog']
  return (
    <div className="flex mb-6 lg:mb-12 mt-4 lg:mt-8">
      <Arrow size={24} className="scale-x-[-1] lg:hidden"/>
      {
        pathSegments.map((item, i) => (
          <>
            <a 
              key={item} 
              href="#"
              className={'text-brand-grey-text font-medium text-[1rem] ' + (i !== 0 ? 'hidden lg:inline' : '')}
            >
              {item}
            </a>
            <Arrow size={24} className="mx-2 hidden lg:flex"/>
          </>
        ))
      }
    </div>
  )
}