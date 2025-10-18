interface ITitleProps {
  title: string;
}
const TitleComponent: React.FC<ITitleProps> = ({title}) => {
  return (
    <section className="space-y-2">
      <h4 className="text-center font-bold text-2xl">{title}</h4>
      <div className="flex gap-1 justify-center">
        <hr className="h-1 w-5 bg-primary" />
        <hr className="h-1 w-7 bg-primary" />
        <hr className="h-1 w-12 bg-primary" />
      </div>
    </section>
  );
};

export default TitleComponent;
