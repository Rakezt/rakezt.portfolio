interface Props {
  title: string;
  subTitle: string;
}
export const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <div>
      <h1 className='text-5xl font-bold tracking-tight mb-4'>{title}</h1>
      <h2 className='text-4xl font-semibold text-muted-foreground mb-8'>
        {subTitle}
      </h2>
    </div>
  );
};
