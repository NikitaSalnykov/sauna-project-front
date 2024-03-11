import { Features } from "../../components/Features/Features";
import { Gallery } from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import { Map } from "../../components/Map/Map";

const FirstPage = () => {
  return (
    <div>
     <Hero/>
     <Features/>
     <Gallery/>
     <Map/>
    </div>
  );
};

export default FirstPage;
