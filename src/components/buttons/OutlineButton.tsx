import Button, { ButtonProps } from "@mui/material/Button";
interface ICustomButtonProps extends ButtonProps {
  width?: string;
  loading?: boolean;
  onClick?: () => void;
  text: string;
  // target?: "_blank" | "_self" | "_parent" | "_top";
}

const OutlineButton: React.FC<ICustomButtonProps> = ({
  className,
  size = "medium",
  loading = false,
  disabled = false,
  onClick,
  // target,
  text,
  ...rest
}) => {
  return (
    <Button
      variant={"outlined"}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={`w-[144px] ${className}`}
      {...rest}
    >
      {loading ? <div className="dot-flashing"></div> : <span>{text}</span>}
    </Button>
  );
};

export default OutlineButton;
