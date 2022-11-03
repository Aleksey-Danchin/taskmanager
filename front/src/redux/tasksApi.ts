import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cuid from "cuid";

const tasks: TaskDataType[] = Array(100)
	.fill(null)
	.map((_, i) => ({
		id: cuid(),
		title: `Задача ${i + 1}`,
		createdAt: 1667485253782 + i * 1000,
	}));

export const tasksApi = createApi({
	reducerPath: "tasksApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/" }),
	endpoints: (builder) => ({
		getTasks: builder.query<TaskDataType[], void>({
			queryFn: () => ({ data: tasks }),
		}),
	}),
});

export const { useGetTasksQuery, useLazyGetTasksQuery } = tasksApi;
