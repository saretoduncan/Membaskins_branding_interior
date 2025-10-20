import { Link } from "react-router";
interface ILinkButtonProps {
  url: string;
  title: string;
  className?: string;
  variant?: TVariant;
}
type TVariant = "primary" | "secondary";
const LinkButtons: React.FC<ILinkButtonProps> = ({
  className,
  title,
  url,
  variant = "primary",
}) => {
  return (
    <Link
      to={url}
      className={`rounded-lg font-black px-4 py-2 flex  items-center transition-all ease-in-out duration-500 ${
        variant === "primary"
          ? "bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground"
          : "bg-background text-background-foreground border-2 hover:bg-secondary hover:text-secondary-foreground "
      }  ${className}`}
    >
      {title}
    </Link>
  );
};

export default LinkButtons;
