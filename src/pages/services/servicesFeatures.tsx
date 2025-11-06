import TitleComponent from "@/components/custom_ui/common/titleComponent";
import largePrintImg from "@/assets/largePrintimg.webp";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import marpet_signage from "@/assets/marpet_signage.webp";
import total_beauty_interior from "@/assets/total_beauty_interior.webp";
import car_wrapper from "@/assets/car_wrapper_design.webp";
import billboard_img from "@/assets/Billboard_sample_img.webp";
import eka_petrol from "@/assets/eka_petrol_station.webp";
import cloth_branding from "@/assets/cloth_branding.webp";
import { FaWhatsapp } from "react-icons/fa";
import mug_printing_img from "@/assets/mug_printing.webp";
const ServicesFeatures = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="p-4 grid gap-3 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] ">
        <TitleComponent title={"What We Do Best"} />
        <div className="overflow-x-hidden grid  gap-6 md:gap-12">
          <div className="grid md:grid-cols-2 gap-2 md:gap-6">
            <section className="my-auto">
              <AnimateToRight>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Large Format Printing
                  </h3>
                  <p>
                    Create a lasting impression with our premium large format
                    printing solutions ideal for trade shows, retail
                    environments, events, and outdoor promotions. Our solutions
                    include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">
                      Roll-up banners and retractable displays
                    </li>
                    <li className="">Event backdrops and stage graphics</li>
                    <li className="">Fabric print and tension structures</li>
                    <li className="">Window graphics and floor stickers</li>
                    <li className="">Vinyl banners and posters</li>
                    <li className="">
                      Billboards and Large-scale advertisments
                    </li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToRight>
            </section>
            <section>
              <AnimateToLeft>
                <section>
                  <img
                    src={largePrintImg}
                    alt="large print image"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToLeft>
            </section>
          </div>
          <div className="grid md:grid-cols-2 md: gap-2 md:gap-6">
            <section className="my-auto md:order-2">
              <AnimateToLeft>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Signages
                  </h3>
                  <p>
                    Make a powerful impression with our expertly crafted signage
                    solutions. From storefront displays to directional signs, we
                    ensure your brand stands out wherever it’s seen. Our
                    solutions include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">3D Signage and 2D Signage</li>
                    <li className="">Indoor Signage</li>
                    <li className="">Light Box Signage</li>
                    <li className="">Neon Signages</li>
                    <li className="">Logos</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToLeft>
            </section>
            <section>
              <AnimateToRight>
                <section>
                  <img
                    src={marpet_signage}
                    alt="Signage image"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToRight>
            </section>
          </div>
          <div className="grid md:grid-cols-2 gap-2 md:gap-6">
            <section className="my-auto">
              <AnimateToRight>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Interior Branding
                  </h3>
                  <p>
                    Transform your spaces with our exceptional interior branding
                    solutions designed to enhance your environment and reflect
                    your brand’s identity. Perfect for offices, retail stores,
                    and commercial spaces, our offerings include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">Gypsums</li>
                    <li className="">Partitioning</li>
                    <li className="">Carbinetry</li>

                    <li className="">Virtual Design</li>
                    <li className="">Commercial Interior</li>
                    <li className="">Wall Mural (3D)</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToRight>
            </section>
            <section>
              <AnimateToLeft>
                <section>
                  <img
                    src={total_beauty_interior}
                    alt="total beauty interior design img"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToLeft>
            </section>
          </div>
          <div className="grid md:grid-cols-2 md: gap-2 md:gap-6">
            <section className="my-auto md:order-2">
              <AnimateToLeft>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Car Branding
                  </h3>
                  <p>
                    Elevate your brand visibility with our professional car
                    branding solutions that transform vehicles into powerful
                    mobile advertisements. From company fleets to delivery vans
                    and personal cars, we design and apply high quality graphics
                    that capture attention, enhance recognition, and promote
                    your business everywhere the road takes you effectively and
                    stylishly.
                  </p>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToLeft>
            </section>
            <section>
              <AnimateToRight>
                <section>
                  <img
                    src={car_wrapper}
                    alt="Car Wrapping Image"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToRight>
            </section>
          </div>
          <div className="grid md:grid-cols-2 gap-2 md:gap-6">
            <section className="my-auto">
              <AnimateToRight>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Outdoor Ads
                  </h3>
                  <p>
                    Enhance your brand visibility with our premium outdoor
                    advertising solutions that capture attention and leave a
                    lasting impression. From billboards and banners to street
                    displays and event signage, we create high quality visuals
                    that strengthen recognition, engage audiences, and promote
                    your business effectively in any outdoor environment, our
                    offerings include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">LED Screen</li>
                    <li className="">Billboard Signage</li>
                    <li className="">Road Signage</li>
                    <li className="">Phylon Signage</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToRight>
            </section>
            <section>
              <AnimateToLeft>
                <section>
                  <img
                    src={billboard_img}
                    alt="Billboard img"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToLeft>
            </section>
          </div>
          <div className="grid md:grid-cols-2 md: gap-2 md:gap-6">
            <section className="my-auto md:order-2">
              <AnimateToLeft>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Petrol Station Branding
                  </h3>
                  <p>
                    Boost your brand presence with our specialized petrol
                    station branding solutions that transform your forecourt
                    into a striking visual experience. From canopy and pump
                    graphics to directional signage and illuminated displays, we
                    deliver high quality designs that enhance visibility,
                    attract customers, and reinforce your brand identity across
                    every station touchpoint. Our solutions include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">Pylon Signages</li>
                    <li className="">Aluco Clamping</li>
                    <li className="">Light Box Signage</li>
                    <li className="">Painting Stickers</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToLeft>
            </section>
            <section>
              <AnimateToRight>
                <section>
                  <img
                    src={eka_petrol}
                    alt="Petrol Station Branding"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToRight>
            </section>
          </div>
          <div className="grid md:grid-cols-2 gap-2 md:gap-6">
            <section className="my-auto">
              <AnimateToRight>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Cloth Branding
                  </h3>
                  <p>
                    Showcase your identity with our custom cloth branding
                    solutions designed to make your brand stand out. From
                    uniforms and t-shirts to caps and promotional wear, we craft
                    high quality prints and embroidery that enhance recognition
                    and promote professionalism. Our solutions include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">T-shirts Printing</li>
                    <li className="">Staff Uniforms</li>
                    <li className="">Caps and Hats Printing</li>
                    <li className="">Hoods and Jackets Printing</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToRight>
            </section>
            <section>
              <AnimateToLeft>
                <section>
                  <img
                    src={cloth_branding}
                    alt="Cloth branding image"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToLeft>
            </section>
          </div>
          <div className="grid md:grid-cols-2 md: gap-2 md:gap-6">
            <section className="my-auto md:order-2">
              <AnimateToLeft>
                <div className="flex flex-col gap-1 justify-center">
                  <h3 className="font-bold text-lg text-primary lg:text-xl">
                    Mug Branding
                  </h3>
                  <p>
                    Promote your brand with our premium mug branding solutions
                    that blend style and functionality. Perfect for corporate
                    gifts, promotions, and everyday use, we create high quality
                    prints that showcase your logo and message with lasting
                    impact. Our solutions include:
                  </p>
                  <ul className="list-disc list-inside px-2">
                    <li className="">Printing Images</li>
                    <li className="">Thermal Sensitive Designs</li>
                    <li className="">Stylish Stanley engraving</li>
                  </ul>
                  <div className="flex my-2">
                    <a
                      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
                      className="bg-green-600 rounded text-white flex  px-2 py-1 gap-2 items-center hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <div className="p-2  bg-green-900 rounded-full">
                        <FaWhatsapp className="text-lg" />
                      </div>

                      <span className="font-bold capitalize ">Get Quote</span>
                    </a>
                  </div>
                </div>
              </AnimateToLeft>
            </section>
            <section>
              <AnimateToRight>
                <section>
                  <img
                    src={mug_printing_img}
                    alt="Mug Printing Img"
                    className="rounded-lg object-cover w-full h-full md:h-[300px]"
                  />
                </section>
              </AnimateToRight>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFeatures;
