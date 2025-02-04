import {
  Dialog,
  DialogContent,
  TextField,
  Tooltip,
  Box,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ContainedButton from "@/components/buttons/ContainedButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "@/validations/todoListSchema";
import { useTodoStore } from "@/store/toDoListStore";
import { prioritiesList } from "@/config/variables/prioritiesList";
import { enqueueSnackbar } from "notistack";

interface IAddNewTaskProps {
  isOpen: boolean;
  onClose: () => void;
};

interface IFormInputs {
  title: string;
  priority: string;
};

export const CreateNewTaskModal: React.FC<IAddNewTaskProps> = ({ isOpen, onClose}) => {
  const { addListItem } = useTodoStore();
  const { handleSubmit, control, reset, formState: { errors }} = useForm<IFormInputs>({
    resolver: yupResolver(todoSchema),
    defaultValues: { title: "", priority: "" },
  });

  const onSubmit = (data: IFormInputs) => {
    if (!data.priority) return;
    addListItem(data.title, data.priority);
    enqueueSnackbar("عملیات با موفقیت انجام شد.", { variant: "success" });
    handleClose();
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "80%",
          maxWidth: "300px",
          margin: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 5px",
          borderRadius: "12px",
        },
      }}
    >
      <DialogContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="عنوان کار"
                variant="outlined"
                fullWidth
                dir="rtl"
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {prioritiesList.map((priority) => (
                  <Tooltip key={priority.value} title={priority.label}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "8px",
                        backgroundColor: priority.color,
                        cursor: "pointer",
                        border: field.value === priority.color ? "2px solid gray" : "none",
                      }}
                      onClick={() => field.onChange(priority.color)}
                    />
                  </Tooltip>
                ))}
              </Box>
            )}
          />
          {errors.priority && (
            <Typography color="error" variant="caption" textAlign="center">
              {errors?.priority?.message}
            </Typography>
          )}
          <ContainedButton type="submit" text="افزودن" />
        </form>
      </DialogContent>
    </Dialog>
  );
};
