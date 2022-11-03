import {
	Card,
	CardContent,
	CircularProgress,
	Input,
	TextField,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Container from "@mui/system/Container";
import { FC, useEffect, useState } from "react";
import { AppContainer } from "./components/AppContainer";
import { Column } from "./components/Column";
import { TasksList } from "./components/TasksList";
import { useGetTasksQuery } from "./redux/tasksApi";

export const App: FC = () => {
	const { data: tasks, isLoading, isError } = useGetTasksQuery();
	const [task, setTask] = useState<TaskDataType | undefined>();

	useEffect(() => {
		if (!task && tasks?.length) {
			setTask(tasks[0]);
		}
	}, [task, tasks]);

	if (isLoading) {
		return (
			<Container>
				<Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
					<CircularProgress />
				</Box>
			</Container>
		);
	}

	if (isError) {
		return (
			<Container>
				<Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
					<Typography component="h2">Что-то пошло не так</Typography>
				</Box>
			</Container>
		);
	}

	return (
		<AppContainer>
			<Column grow={2} style={{ borderRight: "1px solid gray" }}>
				{tasks && <TasksList tasks={tasks} />}
			</Column>

			<Column grow={7}>
				{task && <TaskEditor task={task} onChange={setTask} />}
			</Column>
		</AppContainer>
	);
};

type TaskEditorProps = {
	task: TaskDataType;
	onChange: (task: TaskDataType) => void;
};

const TaskEditor: FC<TaskEditorProps> = ({ task, onChange }) => {
	return (
		<Card>
			<CardContent>
				<TextField
					fullWidth
					label="Title"
					variant="outlined"
					value={task.title}
					onChange={(e) =>
						onChange({ ...task, title: e.target.value })
					}
				/>

				<Input multiline fullWidth />
			</CardContent>
		</Card>
	);
};
