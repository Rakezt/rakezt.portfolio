interface Props {
  title: string;
  subTitle: string;
}
export const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <div>
      <h1 className='text-2xl md:text-3xl font-bold tracking-tight mb-3'>
        {title}
      </h1>
      <h2 className='text-xl md:text-2xl font-semibold text-muted-foreground mb-6 leading-snug'>
        {subTitle}
      </h2>
    </div>
  );
};
