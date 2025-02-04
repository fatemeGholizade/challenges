import { useTodoStore } from "@/store/toDoListStore";
import { Controller, useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { yupResolver } from "@hookform/resolvers/yup"; 
import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { todoSchema } from "@/validations/todoListSchema";

const TodoPage: React.FC = () => {
  const { todos, addListItem, deleteListItem, toggleCompleteStatus } = useTodoStore();
  const {
    handleSubmit, control, reset, formState: { errors },
  } = useForm<{ title: string }>({
    resolver: yupResolver(todoSchema),
  });
  const onSubmit = (data: { title: string }) => {
    addListItem(data.title);
    reset();
  };

  return (
    <Container>
      <Paper>
        <Typography variant="h5" align="center" color="#4F46E5">
          لیست کارها
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="عنوان کار"
                variant="outlined"
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
          <Button type="submit" variant="contained">
            افزودن
          </Button>
        </form>

        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id} secondaryAction={
              <IconButton edge="end" color="error" onClick={() => deleteListItem(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }>
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleCompleteStatus(todo.id)}
                color="success"
              />
              <ListItemText
                primary={todo.title}
                primaryTypographyProps={{
                  style: {
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#6B7280" : "#111827",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};
export default TodoPage