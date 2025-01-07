interface TitleProps {
  className?: string;
  title: string;
}

const Title: React.FC<TitleProps> = ({ className, title }) => {
  return (
    <span
      className={`text-4xl font-semibold leading-[45px] text-darkblue  ${className}`}
    >
      {title}
    </span>
  );
};

export default Title;
