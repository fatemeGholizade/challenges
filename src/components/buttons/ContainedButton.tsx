import Button, { ButtonProps } from "@mui/material/Button";
// this is a custom button that gets help from MUI button and others styles are declared in
// MUI theme
interface ICustomButtonProps extends ButtonProps {
  width?: string;
  loading?: boolean;
  onClick?: () => void;
  text: string;
}

const ContainedButton: React.FC<ICustomButtonProps> = ({
  className,
  size = "medium",
  loading = false,
  disabled = false,
  onClick,
  text,
  ...rest
}) => {
  return (
    <Button
      variant={"contained"}
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

export default ContainedButton;
