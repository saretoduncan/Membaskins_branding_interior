import TitleComponent from "@/components/custom_ui/common/titleComponent";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EGallaryCategory } from "@/lib/constants";
import { galleryImages } from "@/lib/galleryImgData";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import { useState } from "react";

const PortforlioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterImgs =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-slate-50">
      <div className="p-4 grid gap-4 xl:w-[1040px] xl:mx-auto 2xl:w-[1280px]">
        <TitleComponent title={"Gallery"} />
        <div className="grid gap-2">
          <div>
            <Select onValueChange={(value) => setSelectedCategory(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={EGallaryCategory.All} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={EGallaryCategory.All} defaultChecked>
                  {EGallaryCategory.All}
                </SelectItem>
                <SelectItem value={EGallaryCategory.signages}>
                  {EGallaryCategory.signages}
                </SelectItem>
                <SelectItem value={EGallaryCategory["pylon-signages"]}>
                  {EGallaryCategory["pylon-signages"]}
                </SelectItem>
                <SelectItem value={EGallaryCategory["LED-screen"]}>
                  {EGallaryCategory["LED-screen"]}
                </SelectItem>
                <SelectItem value={EGallaryCategory["car-branding"]}>
                  {EGallaryCategory["car-branding"]}
                </SelectItem>
                <SelectItem value={EGallaryCategory["petrol-branding"]}>
                  {EGallaryCategory["petrol-branding"]}
                </SelectItem>
                <SelectItem value={EGallaryCategory["interior-branding"]}>
                  {EGallaryCategory["interior-branding"]}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="overflow-x-hidden">
            <Gallery>
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 relative ">
                {filterImgs.map((item, index) => (
                  <AnimateToRight>
                    <Item
                      thumbnail={item.img}
                      original={item.img}
                      key={index}
                      alt={item.alt}
                      id={index}
                      caption={item.img}
                      cropped
                    >
                      {({ ref, open }) => (
                        <img
                          ref={ref}
                          src={item.img}
                          onClick={open}
                          className="w-full object-cover h-[200px] rounded-lg"
                          alt={item.alt}
                        />
                      )}
                    </Item>
                  </AnimateToRight>
                ))}
              </div>
            </Gallery>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortforlioGallery;
