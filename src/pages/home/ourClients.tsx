import TitleComponent from "@/components/custom_ui/common/titleComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import africanFuelLogo from "@/assets/africa_fuel_logo.webp";
import beeUniqueLogo from "@/assets/bee_Unique_logo.webp";
import bristalParkLogo from "@/assets/bristal_park_logo.webp";
import carrefourLogo from "@/assets/carrefour_logo.webp";
import jajemeloLogo from "@/assets/jajemelo_logo.webp";
import kheLogo from "@/assets/khe_logo.webp";
import safaricomLogo from "@/assets/safaricom_logo.webp";
import vertoLogo from "@/assets/verto_logo.webp";
import { useRef } from "react";

const OurClients = () => {
  const allLogos = [
    africanFuelLogo,
    beeUniqueLogo,
    bristalParkLogo,
    carrefourLogo,
    jajemeloLogo,
    kheLogo,
    safaricomLogo,
    vertoLogo,
  ];
  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );
  return (
    <div className="bg-slate-50 w-full">
      <div className="p-4 xl:w-[1040px] mx-auto 2xl:w-[1280px] grid gap-5">
        <TitleComponent title={"Our Clients"} />
        <div>
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full  mx-auto "
          >
            <CarouselContent className="">
              {allLogos.map((value, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/6 my-auto"
                >
                  <div className="">
                    <img src={value} alt={value} className="" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
