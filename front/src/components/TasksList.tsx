import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { FC } from "react";

export type TasksListProps = {
	task?: TaskDataType;
	tasks: TaskDataType[];
};

export const TasksList: FC<TasksListProps> = ({ task, tasks }) => {
	return (
		<List>
			{tasks &&
				tasks.map((mappedTask) => (
					<ListItem
						key={mappedTask.id}
						disablePadding
						sx={{
							borderBottom: "1px solid gray",
						}}
					>
						<ListItemButton
							selected={mappedTask.id === task?.id}
							sx={{
								"&.Mui-selected": {
									backgroundColor: "#2118602e",
								},
							}}
						>
							{/* <ListItemIcon></ListItemIcon> */}
							<ListItemText primary={mappedTask.title} />
						</ListItemButton>
					</ListItem>
				))}
		</List>
	);
};
