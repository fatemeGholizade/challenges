import { useTodoStore } from "@/store/toDoListStore";
import { Container, Paper, Typography, List, ListItem, ListItemText, IconButton, Checkbox, Box, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useState } from "react";
import { CreateNewTaskModal } from "@/components/modals/createNewTask/createNewTaskModal";
import palette from "@/theme/palette";
const TodoPage: React.FC = () => {
  const { todos, deleteListItem, toggleCompleteStatus } = useTodoStore();
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState<boolean>(false);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const ratioText = todos.length > 0 ? `${todos.length} / ${completedTasks} ` : "";

  return (
    <Container >
      <Paper>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", width: "100%", padding: "10px" }}>
          <Box sx={{display:"flex", alignItems:"center"}}>
          <Typography fontWeight="bold" variant="h5" align="center" color="#747474">
            لیست کارهای من
          </Typography>
          {todos.length  > 0 && completedTasks < todos.length ?
          <Typography component="span" variant="h6" sx={{ marginLeft: "8px", color: "#4CAF50" }}>
              ({ratioText})
            </Typography>
            :
           <WorkspacePremiumIcon color="warning"/> }
          </Box>

          <Tooltip title="افزودن" arrow>
            <IconButton edge="end" onClick={() => setOpenCreateTaskModal(true)}>
              <ControlPointIcon fontSize="large" color="success" />
            </IconButton>
          </Tooltip>
        </Box>

        {todos.length > 0 ? (
          <List sx={{maxHeight:"350px", overflowY:"scroll", padding:"10px"}}>
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                sx={{
                  backgroundColor: todo.priority || "white",
                  borderRadius: "8px",
                  margin: "5px 0",
                  padding: "10px",
                }}
              >
                <ListItemText
                  primary={todo.title}
                  sx={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      color: todo.completed ? "#6B7280" : palette.natural?.dark,
                  }}
                />
                <Box>
                  <IconButton edge="end" color="error" onClick={() => deleteListItem(todo.id)}>
                    <Tooltip title="حذف">
                    <DeleteOutlineIcon />
                    </Tooltip>
                  </IconButton>
                  <Tooltip title="انجام ‌داده‌شده">

                  <Checkbox checked={todo.completed} onChange={() => toggleCompleteStatus(todo.id)} color="success" />
                    </Tooltip>
                </Box>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography color="error" align="center">
           وظیفه‌ای وجود ندارد.
          </Typography>
        )}
      </Paper>
      <CreateNewTaskModal isOpen={openCreateTaskModal} onClose={() => setOpenCreateTaskModal(false)} />
    </Container>
  );
};

export default TodoPage;
