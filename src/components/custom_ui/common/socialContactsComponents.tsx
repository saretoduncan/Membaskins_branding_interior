import { type LucideIcon } from "lucide-react";

interface ISocialFormsProps {
  icon: LucideIcon;
  link: string;
}
const SocialContactsComponents: React.FC<ISocialFormsProps> = ({
  icon: Icon,
  link,
}) => {
  return (
    <a href={link} target="_blank" className="hover:scale-110 transition-all ease-in-out duration-300">
      <span className="p-2 bg-accent text-accent-foreground rounded-full inline-block hover:bg-primary hover:text-primary-foreground  transition-all ease-in-out duration-300">
        <Icon />
      </span>
    </a>
  );
};

export default SocialContactsComponents;
