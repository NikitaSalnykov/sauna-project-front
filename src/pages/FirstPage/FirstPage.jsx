import { Features } from "../../components/Features/Features";
import { Gallery } from "../../components/Gallery/Gallery";
import { Hero } from "../../components/Hero/Hero";
import { Location } from "../../components/Location/Location";
import { Map } from "../../components/Map/Map";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { Reviews } from "../../components/Reviews/Reviews";
import { Video } from "../../components/Video/Video";

const FirstPage = () => {
  return (
    <div>
     <Hero/>
     <Features/>
     <Gallery/>
     {/* <Location/> */}
     <Video/>
     <Map/>
     <ProductsList/>
     <Reviews/>
    </div>
  );
};

export default FirstPage;
