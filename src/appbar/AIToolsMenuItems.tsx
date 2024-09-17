import AssessmentIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PhotoIcon from "@mui/icons-material/Photo";
import { AIToolsMenuItem } from "./AIToolsMenuItem";
import { Box, Grid2 } from "@mui/material";

export const AIToolsMenuItems = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
        }}
      >
        <Grid2
          container
          sx={{
            spacing: 2,
          }}
        >
          <AIToolsMenuItem
            Icon={<AssessmentIcon />}
            heading="Reports"
            subheading="Write reports in seconds with the help of our AI."
          />
          <AIToolsMenuItem
            Icon={<ChatIcon />}
            heading="Chat With History"
            subheading="Engage in discussions with historical figues."
          />
          <AIToolsMenuItem
            Icon={<FileCopyIcon />}
            heading="AI Language Boards"
            subheading="Enhance communication for EAL and ELL students."
          />
          <AIToolsMenuItem
            Icon={<PhotoIcon />}
            heading="Image to text"
            subheading="Upload an image to generate text."
          />
        </Grid2>
      </Box>
    </>
  );
};
