import { PhoneCall } from "lucide-react";
import React from "react";

const CallButton = () => {
  return (
    <a
      href="tel:+254 748 047237"
      aria-label="+254 748 047237"
      className=" text-primary-foreground rounded-xl w-full px-4 py-2  flex items-center gap-2  bg-primary lg:bg-sidebar lg:text-sidebar-foreground"
    >
      <span className="bg-secondary w-fit p-1 rounded-full lg:bg-primary lg:p-2 ">
        <PhoneCall className="text-primary lg:text-primary-foreground " />
      </span>{" "}
      <span className="font-bold">+254 748 047237</span>
    </a>
  );
};

export default CallButton;
