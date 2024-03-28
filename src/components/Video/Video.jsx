import video from "../../assets/video-bg.mp4"
import posterImage from "../../images/photo-1.jpg"
import { Container } from "../Container/Container"
import { Section } from "../Section/Section"

export const Video = () => {
  return (
    <Section>
    <Container >
    <div className="flex flex-col md:flex-row w-full ">
      <div className="flex items-center text-center xl:text-left md:w-1/2">
        <div className=" md:py-4 md:px-4">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Бронюй сьогодні <span className="text-darkBrown">та отримай знижку</span></h2>
          <p className="mt-2 text-md text-black md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
          <div className="flex justify-center md:justify-start mt-6 smOnly:mb-6">
            <a className="px-4 py-3 bg-darkBrown text-lightBrown text-md font-semibold rounded hover:bg-gray-900" href="#">Забронювати</a>
            <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-md font-semibold rounded hover:bg-gray-400" href="#">Дізнатися більше</a>
          </div>
        </div>
      </div>
      <div className="block w-full rounded-xl overflow-hidden md:w-1/2">
          {/* Video element */}
          <video controls poster={posterImage} className="w-full">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
    </Container>
    </Section>
  )
}
