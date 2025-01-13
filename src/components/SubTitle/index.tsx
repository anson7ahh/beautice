interface Props {
  className?: string;
  subTitle: string;
}

const SubTitle: React.FC<Props> = ({ className, subTitle }) => {
  return (
    <span
      className={`text-vividpink mobile:text-base text-sm font-semibold leading-5 ${className}`}
    >
      {subTitle}
    </span>
  );
};

export default SubTitle;
