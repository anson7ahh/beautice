interface TitleProps {
  className?: string;
  title: string;
}

const Title: React.FC<TitleProps> = ({ className, title }) => {
  return (
    <span
      className={`mobile:text-4xl text-2xl font-semibold  mobile:leading-[45px] text-darkblue  ${className}`}
    >
      {title}
    </span>
  );
};

export default Title;
