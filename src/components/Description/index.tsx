interface Props {
  className?: string;
  description: string;
}

const Description: React.FC<Props> = ({ className, description }) => {
  return (
    <p
      className={`ipadMini:text-base font-normal text-sm tracking-widest text-darkgray  ${className} `}
    >
      {description}
    </p>
  );
};

export default Description;
