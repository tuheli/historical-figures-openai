import { Box, Stack, Typography } from "@mui/material";

export const Messages = () => {
  return (
    <>
      <Stack
        sx={{
          bgcolor: "grey",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          width: 340,
        }}
      >
        <Box component="img" src="logoipsum-296.svg" />
        <Typography variant="h5">Messages</Typography>
      </Stack>
    </>
  );
};
