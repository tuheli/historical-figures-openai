import { Box, Stack, Typography } from "@mui/material";

export const MessagesDrawer = () => {
  return (
    <>
      <Box
        sx={{
          width: 340,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="logoipsum-296.svg"
            sx={{
              height: 50,
              width: 50,
            }}
          />
          <Typography variant="h6" component="p">
            Messages
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
