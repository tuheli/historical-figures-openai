import { Box, Grid2, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AIToolsMenuItemProps {
  Icon: ReactNode;
  heading: string;
  subheading: string;
}

export const AIToolsMenuItem = ({
  Icon,
  heading,
  subheading,
}: AIToolsMenuItemProps) => {
  return (
    <>
      <Grid2 size={6}>
        <Stack
          sx={{
            flexDirection: "row",
            p: 2,
            gap: 1,
            borderRadius: 2,
            cursor: "pointer",
            transition: "all 0.17s ease-in-out",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.05)",
            },
          }}
        >
          <Box>{Icon}</Box>
          <Box>
            <Stack
              sx={{
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                }}
              >
                {subheading}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Grid2>
    </>
  );
};
