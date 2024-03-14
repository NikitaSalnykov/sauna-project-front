import { Features } from "../../components/Features/Features";
import { Gallery } from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import { Location } from "../../components/Location/Location";
import { Map } from "../../components/Map/Map";
import { Reviews } from "../../components/Reviews/Reviews";

const FirstPage = () => {
  return (
    <div>
     <Hero/>
     <Features/>
     <Gallery/>
     <Location/>
     <Map/>
     <Reviews/>
    </div>
  );
};

export default FirstPage;
