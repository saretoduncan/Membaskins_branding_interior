import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254748047237?text=Hello,%20I%20am%20interested%20in%20your%20services"
      className="bg-green-600 rounded-2xl text-white flex  px-2 py-2 gap-2 items-center" target="_blank"
    >
      <div className="p-2 bg-green-900 rounded-full">
        <FaWhatsapp className="text-lg" />
      </div>

      <span className="font-bold capitalize hidden md:block ">
        Order via Whatsapp
      </span>
    </a>
  );
};

export default WhatsAppButton;
