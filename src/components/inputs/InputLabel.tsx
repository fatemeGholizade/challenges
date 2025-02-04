import { TextField } from "@mui/material";
import { useMemo } from "react";
import { DateObject } from "react-multi-date-picker";

interface IInputLabelProps {
  type?: string | undefined;
  label: string;
  disabled: boolean;
  value?: string | undefined | DateObject | null;
  customStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputLabel = ({
  type = "text",
  label,
  value,
  disabled,
  onChange,
  customStyle,
}: IInputLabelProps) => {
  const memoizedOnChange = useMemo(
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <div className={`flex w-full !flex-col ${customStyle}`}>
      <label className="mb-1 ml-1 w-[153px] text-[13px] font-semibold !text-natural-text1">
        {label}
      </label>
      <TextField
        autoComplete="off"
        disabled={disabled}
        type={type !== "date" ? type : ""}
        dir={type === "number" || type === "date" ? "ltr" : "rtl"}
        value={value ?? ""}
        onChange={memoizedOnChange}
      />
    </div>
  );
};
