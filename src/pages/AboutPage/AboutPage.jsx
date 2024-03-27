import { SecondaryHero } from "../../components/SecondaryHero/SecondaryHero";
import Image from '../../assets/hero.webp'
import { Map } from "../../components/Map/Map";
import { Reviews } from "../../components/Reviews/Reviews";
import { Title } from "../../components/Title/Title";

const AboutPage = () => {
  return (
    <div>
      <SecondaryHero img={Image} title={"Про нас"}/>
      <div className="mt-8">
        <Title title={'Баня'} accent={'на озері'}/>
      </div>
      <Map/>
      <Reviews/>
    </div>
  );
};

export default AboutPage;
