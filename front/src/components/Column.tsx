import { Box } from "@mui/system";
import { CSSProperties, FC, ReactNode } from "react";

export type ColumnProps = {
	children?: ReactNode | ReactNode[];
	grow?: number;
	style?: CSSProperties;
};

export const Column: FC<ColumnProps> = ({ children, grow = 0, style = {} }) => {
	return <Box sx={{ flexGrow: grow, ...style }}>{children}</Box>;
};
