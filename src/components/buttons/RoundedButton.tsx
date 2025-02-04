import Button, { ButtonProps } from "@mui/material/Button";
interface ICustomButtonProps extends ButtonProps {
  width?: string;
  loading?: boolean;
  onClick?: () => void;
  selected: boolean;
  text: string;
}

const RoundedButton: React.FC<ICustomButtonProps> = ({
  className,
  size = "medium",
  loading = false,
  selected,
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
      className={`!h-9 w-auto !min-w-[70px] !rounded-3xl !border-1 !border-solid border-primary-light
        ${
          selected
            ? "!bg-primary-main"
            : "!border-primary-main !bg-surface-container2 !text-primary-main"
        } ${className}`}
      {...rest}
    >
      {loading ? <div className="dot-flashing"></div> : <span>{text}</span>}
    </Button>
  );
};

export default RoundedButton;
