import { Box, keyframes } from "@mui/material";
import { ReactNode } from "react";

const scaleIn = keyframes`
  0% {
    transform: scale(0.85);
    opacity: 0.75;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

interface ScaleInAnimationProps {
  children: ReactNode;
}

export const ScaleInAnimation = ({ children }: ScaleInAnimationProps) => {
  return (
    <Box
      key={crypto.randomUUID()}
      sx={{
        display: "inline-block",
        animation: `${scaleIn} 0.25s ease-out`,
      }}
    >
      {children}
    </Box>
  );
};
