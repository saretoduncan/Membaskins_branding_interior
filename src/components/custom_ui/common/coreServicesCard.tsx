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
    <>
      <Card className="grid h-full">
        <CardContent className="grid gap-2">
          <div
            className="w-full bg-cover bg-center bg-no-repeat h-[150px] rounded "
            style={{
              backgroundImage: "url(" + "'" + serviceImg + "'" + ")",
            }}
          ></div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default CoreServicesCard;
