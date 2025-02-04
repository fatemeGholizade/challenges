import ControlPointIcon from "@mui/icons-material/ControlPoint";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  Box,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

import { CreateNewTaskModal } from "@/pages/todo-list/modal/createNewTask/createNewTaskModal";
import { ITodo, useTodoStore } from "@/store/toDoListStore";
import palette from "@/theme/palette";
const TodoPage: React.FC = () => {
  const { tasks, deleteListItem, toggleCompleteStatus } = useTodoStore();
  const [openCreateTaskModal, setOpenCreateTaskModal] = useState<boolean>(false);

  // this is for calculating the ratio of done tasks to all
  const completedTasks = tasks.filter((todo) => todo.completed).length;
  const ratioText = tasks.length > 0 ? `${tasks.length} / ${completedTasks} ` : "";

  const handleDeleteTask = (task: ITodo) => {
    deleteListItem(task.id);
    enqueueSnackbar("عملیات با موفقیت انجام شد.", { variant: "success" });
  };

  const handleToggleTaskStatue = (task: ITodo) => {
    toggleCompleteStatus(task.id);
    enqueueSnackbar("عملیات با موفقیت انجام شد.", { variant: "success" });
  };
  return (
    <Container>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight="bold" variant="h5" align="center" color="#747474">
              لیست کارهای من
            </Typography>
            
            {/* conditions to show ratio of done tasks, medal icon or nothing */}
            {tasks.length === 0 ? (
              ""
            ) : tasks.length > 0 && completedTasks < tasks.length ? (
              <Typography
                component="span"
                variant="h6"
                sx={{ marginLeft: "8px", color: "#4CAF50" }}
              >
                ({ratioText})
              </Typography>
            ) : (
              <WorkspacePremiumIcon className="shimmer" color="warning" />
            )}
          </Box>

          <Tooltip title="افزودن" arrow>
            <IconButton edge="end" onClick={() => setOpenCreateTaskModal(true)}>
              <ControlPointIcon fontSize="large" color="success" />
            </IconButton>
          </Tooltip>
        </Box>

        {tasks.length > 0 ? (
          <List sx={{ maxHeight: "350px", overflowY: "scroll", padding: "10px" }}>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                sx={{
                  backgroundColor: task.priority || "white",
                  borderRadius: "8px",
                  margin: "5px 0",
                  padding: "10px",
                }}
              >
                <ListItemText
                  primary={task.title}
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#6B7280" : palette.natural?.dark,
                  }}
                />
                <Box>
                  <IconButton edge="end" color="error" onClick={() => handleDeleteTask(task)}>
                    <Tooltip title="حذف">
                      <DeleteOutlineIcon />
                    </Tooltip>
                  </IconButton>
                  <Tooltip title="انجام ‌داده‌شده">
                    <Checkbox
                      checked={task.completed}
                      onChange={() => handleToggleTaskStatue(task)}
                      color="success"
                    />
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
      <CreateNewTaskModal
        isOpen={openCreateTaskModal}
        onClose={() => setOpenCreateTaskModal(false)}
      />
    </Container>
  );
};

export default TodoPage;
