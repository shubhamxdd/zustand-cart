interface Props {
  label: string;
  onClick?: () => void;
  className: string;
}

const Button = ({ className, label, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
