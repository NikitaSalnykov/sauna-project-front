import { Link } from 'react-router-dom';

export const SecondaryHero = ({img, title, link, linkName}) => {
  return (
    <div class="flex flex-col pt-24 pb-8 px-6 space-y-6 h-[300px] md:h-[300px] md:py-12 md:flex-row md:items-center md:space-x-6 bg-cover bg-center bg-no-repeat bg-black justify-start xl:justify-center relative"  
    style={{ 
        backgroundImage: `url(${img})`, 
      }}>
                <div className="w-full h-full bg-black absolute left-0 bottom-0 opacity-70 "></div>
        <div class="lg:container flex flex-col items-center selection:md:items-right w-full md:flex-row z-10 justify-center md:justify-end text-center md:text-end">
            <div class="max-w-[400px] md:max-w-[450px] xl:max-w-[800px] md:p-12 xl:p-24">
                <h2 class="text-3xl font-semibold  tracking-wide text-white md:text-4xl text-antiquewhite">{title}</h2>
{linkName &&                <div class="mt-6">
                    <Link to={link || '#'} class="block px-3 py-2 font-semibold text-center text-darkBrown transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400 bg-lightBrown">{linkName}</Link>
                </div>}
            </div>
        </div>

    </div>
  )
}
