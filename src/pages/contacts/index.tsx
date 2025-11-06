import AnimateToLeft from "@/components/animationComponents/AnimateToLeft";
import AnimateToRight from "@/components/animationComponents/AnimateToRight";
import SocialContactsComponents from "@/components/custom_ui/common/socialContactsComponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  EMAIL,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PHONE_NUMBER,
  TIKTOK_LINK,
} from "@/lib/constants";
import { Facebook, Instagram, Mail, Music2, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactsPage = () => {
  return (
    <>
      <div
        className="h-[200px] w-full flex items-center px-4 "
        style={{
          backgroundSize: "10px 10px",
          backgroundImage: "radial-gradient(#F9731640 10%, transparent 15%",
        }}
      >
        <div className="xl:w-[1040px] xl:mx-auto 2xl:w-[1280px] px-4">
          <h2 className="text-primary text-4xl font-bold">Contact us</h2>
        </div>
      </div>
      <div className="px-4 py-8  ">
        <Card className="max-w-md mx-auto overflow-x-hidden">
          <CardHeader className="">
            <AnimateToLeft>
              <CardTitle>Get In Touch</CardTitle>
            </AnimateToLeft>
            <AnimateToRight>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </AnimateToRight>
          </CardHeader>
          <CardContent>
            <div className="overflow-y-hidden">
              <div className="grid gap-6 ">
                <div>
                  <AnimateToRight>
                    {" "}
                    <a
                      href={`https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services`}
                      className="flex  gap-4  shadow-lg rounded p-2 items-center bg-green-500  group hover:bg-green-400 transition-all ease-in-out duration-300"
                      target="_blank"
                    >
                      <span className="bg-green-700 p-2 rounded-full  transition-all ease-in-out duration-300 text-slate-50">
                        <FaWhatsapp className="" />
                      </span>

                      <span className="font-bold text-slate-50  transition-all ease-in-out duration-300">
                        {PHONE_NUMBER}
                      </span>
                    </a>
                  </AnimateToRight>
                </div>
                <div>
                  <AnimateToRight>
                    {" "}
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex  gap-4  shadow-lg rounded p-2 items-center  group hover:bg-accent transition-all ease-in-out duration-300"
                    >
                      <span className="bg-primary/40 p-2 rounded-full group-hover:bg-primary transition-all ease-in-out duration-300">
                        <PhoneCall className=" group-hover:text-primary-foreground transition-all ease-in-out duration-300" />
                      </span>

                      <span className="font-bold text-primary group-hover:text-accent-foreground transition-all ease-in-out duration-300">
                        {PHONE_NUMBER}
                      </span>
                    </a>
                  </AnimateToRight>
                </div>
                <div>
                  <AnimateToRight>
                    {" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex  gap-4  shadow-lg rounded p-2 items-center  group hover:bg-accent transition-all ease-in-out duration-300"
                    >
                      <span className="bg-primary/40 p-2 rounded-full group-hover:bg-primary transition-all ease-in-out duration-300">
                        <Mail className=" group-hover:text-primary-foreground transition-all ease-in-out duration-300" />
                      </span>

                      <span className="font-bold text-primary group-hover:text-accent-foreground transition-all ease-in-out duration-300">
                        {EMAIL}
                      </span>
                    </a>
                  </AnimateToRight>
                </div>
              </div>
              <hr className="mt-12 bg-accent" />
              <AnimateToRight>
                <div className="grid gap-2">
                
                <p className="text-center">connect on social media</p>
                <div className="flex gap-2 justify-center">
                  <SocialContactsComponents
                    icon={Facebook}
                    link={FACEBOOK_LINK}
                  />
                  <SocialContactsComponents
                    icon={Instagram}
                    link={INSTAGRAM_LINK}
                  />
                  <SocialContactsComponents icon={Music2} link={TIKTOK_LINK} />
                </div>
              </div>
              </AnimateToRight>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactsPage;
