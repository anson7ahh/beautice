interface Props {
  className?: string;
  description: string;
}

const Description: React.FC<Props> = ({ className, description }) => {
  return (
    <p
      className={`text-base font-normal  tracking-widest text-darkgray  ${className} `}
    >
      {description}
    </p>
  );
};

export default Description;
