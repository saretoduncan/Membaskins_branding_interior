import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

interface ICoreServiceProps {
  serviceImg: string;
  title: string;
  description: string;
}
const CoreServicesCard: React.FC<ICoreServiceProps> = ({
  serviceImg,
  title,
  description,
}) => {
  return (
    <Card className="grid">
      <CardContent className="grid gap-2">
        <div
          className="w-full bg-cover bg-center bg-no-repeat h-[150px] rounded relative"
          style={{
            backgroundImage: "url(" + "'" + serviceImg + "'" + ")",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/40 rounded top-0 bottom-0"></div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button variant={"outline"}> Learn More</Button>
      </CardContent>
    </Card>
  );
};

export default CoreServicesCard;
