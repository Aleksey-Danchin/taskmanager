import { Box } from "@mui/system";
import Container from "@mui/system/Container";
import { FC, ReactNode } from "react";

export type AppContainerProps = {
	children?: ReactNode | ReactNode[];
};

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
	return (
		<Container sx={{ height: "100%", overflow: "hidden" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					height: "100%",
					overflow: "hidden",
					alignItems: "stretch",
				}}
			>
				{children}
			</Box>
		</Container>
	);
};
