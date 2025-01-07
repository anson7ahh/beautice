interface Props {
  className?: string;
  moreDescription: string;
}

const MoreDescription: React.FC<Props> = ({ className, moreDescription }) => {
  return (
    <span
      className={`text-base font-normal  tracking-widest text-darkgray  ${className} `}
    >
      {moreDescription}
    </span>
  );
};

export default MoreDescription;
