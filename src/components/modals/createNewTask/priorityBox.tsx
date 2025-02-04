import { prioritiesList } from "@/config/variables/prioritiesList";
import { Box } from "@mui/material";

interface IPriorityBoxProps {
  value: string;
  onChange: (priority: string) => void;
};

const PriorityBox: React.FC<IPriorityBoxProps> = ({ value, onChange }) => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", marginBottom: 2 }}>
      {prioritiesList.map((p) => (
        <Box
          key={p.value}
          sx={{
            width: 40,
            height: 20,
            borderRadius: 4,
            backgroundColor: p.color,
            border: value === p.value ? "2px solid black" : "2px solid transparent",
            cursor: "pointer",
          }}
          onClick={() => onChange(p.value)}
        />
      ))}
    </Box>
  );
};

export default PriorityBox;
