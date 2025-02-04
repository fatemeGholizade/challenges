import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useMemo } from "react";
import { DateObject } from "react-multi-date-picker";

import palette from "@/theme/palette";

const useStyles = makeStyles({
  input: {
    height: "40px !important",
    border: `1px solid ${palette.natural?.text2} !important`,
    backgroundColor: palette.natural?.devider1,
    // padding: "2px 12px !important",
    borderRadius: "16px",
    fontSize: "14px !important",
    borderColor: `${palette.natural?.text2} !important`,
    outline: "none",
    marginLeft: "5px !important",
    "&::placeholder": {
      fontFamily: "IRANSansX",
      color: palette.natural?.text4,
      fontWeight: "500",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
});

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
  const classes = useStyles();
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
        className={`${classes.input} `}
        type={type !== "date" ? type : ""}
        dir={type === "number" || type === "date" ? "ltr" : "rtl"}
        value={value ?? ""}
        onChange={memoizedOnChange}
      />
    </div>
  );
};
