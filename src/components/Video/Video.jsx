import { Link } from "react-router-dom"
import { Container } from "../Container/Container"
import { Section } from "../Section/Section"

export const Video = () => {
  return (
    <Section>
    <Container >
    <div className="flex flex-col md:flex-row w-full ">
      <div className="flex items-center text-center xl:text-left md:w-1/2">
        <div className=" md:py-4 md:px-4">
          <h2 className=" md:text-left  text-3xl font-semibold text-gray-900 md:text-4xl">Все для Вашого  <span className="text-darkBrown">комфорту</span></h2>
          <p className=" text-start mt-2 text-md text-secondaryText md:text-lg">Ми знаємо, як важливо для вас почувати себе комфортно і розслаблено. У нашій лазні "Баня на озері" ми створили усі умови для вашого найкращого відпочинку. Наша територія і баня охоплюють усе необхідне, щоб ви могли насолоджуватися кожною миттю вашого відпочинку.</p>
          <div className="flex justify-center md:justify-start mt-6 smOnly:mb-6">
          <a href='tel:+380672037580' className="px-4 py-3 bg-darkBrown text-lightBrown text-md font-semibold rounded hover:bg-gray-900">Забронювати</a>
            <Link to={"/territory"} className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-md font-semibold rounded hover:bg-gray-400">Дізнатися більше</Link>
          </div>
        </div>
      </div>
      <div className="block w-full rounded-xl overflow-hidden md:w-1/2">
          {/* <video controls className="">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/1YvbC0s77Bk?si=KOHW3ePo9paRA8Ey&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;playlist=1YvbC0s77Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{/* <ReactPlayer url={'https://www.youtube.com/watch?v=1YvbC0s77Bk'} light={<img src={posterImage} alt='Thumbnail' className="w-[100]%"/>} /> */}

      </div>
    </div>
    </Container>
    </Section>
  )
}
