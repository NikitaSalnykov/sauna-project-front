import { SecondaryHero } from "../../components/SecondaryHero/SecondaryHero";
import Image from '../../assets/hero.webp'
import { Map } from "../../components/Map/Map";
import { Reviews } from "../../components/Reviews/Reviews";
import { Title } from "../../components/Title/Title";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Container } from "../../components/Container/Container";

const AboutPage = () => {
  return (
    <div>
      <SecondaryHero img={Image} title={"Про нас"}/>
      <Container>
        <AboutUs/>
      </Container>
      <Map/>
      <Reviews/>
    </div>
  );
};

export default AboutPage;
