interface Props {
  className?: string;
  subTitle: string;
}

const SubTitle: React.FC<Props> = ({ className, subTitle }) => {
  return (
    <span
      className={`text-vividpink text-base font-semibold leading-5 ${className}`}
    >
      {subTitle}
    </span>
  );
};

export default SubTitle;
