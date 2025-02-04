import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IRadioOption {
  label: string;
  value: string;
}

interface ICustomRadioButtonGroupProps {
  groupLabel: string;
  options: IRadioOption[];
  selectedValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const CustomRadio = styled(Radio)({
  color: "#bdbdf5",
  "&.Mui-checked": {
    color: "#bdbdf5",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiFormControlLabel-label": {
    fontWeight: 500,
  },
  "& .Mui-checked + .MuiFormControlLabel-label": {
    fontWeight: 600,
  },
}));

const CustomRadioButtonGroup: React.FC<ICustomRadioButtonGroupProps> = ({
  groupLabel,
  options,
  selectedValue,
  handleChange,
  name,
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{groupLabel}</FormLabel>
      <RadioGroup aria-label={name} name={name} value={selectedValue} onChange={handleChange} row>
        {options.map((option) => (
          <CustomFormControlLabel
            key={option.value}
            value={option.value}
            control={<CustomRadio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioButtonGroup;
