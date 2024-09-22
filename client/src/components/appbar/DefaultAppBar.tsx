import {
  AppBar,
  Box,
  Button,
  Divider,
  Fade,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { AIToolsMenuItems } from "./AIToolsMenuItems";

export const DefaultAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
          bgcolor: "#fff",
        }}
      >
        <Toolbar
          sx={{
            mx: 2,
            gap: 2,
          }}
        >
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Typography
                sx={{
                  px: 2,
                }}
              >
                Your Favourite Tools
              </Typography>
              <Box
                sx={{
                  height: 100,
                }}
              />
              <Divider />
              <Typography
                sx={{
                  p: 2,
                }}
              >
                Featured Tools
              </Typography>
              <AIToolsMenuItems />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                }}
              >
                All Tools
              </Button>
            </Box>
          </Menu>
          <Box component="img" src="logoipsum-296.svg" />
          <Button>About</Button>
          <Button onClick={handleMenu}>
            AI Tools{" "}
            <KeyboardArrowDownIcon
              sx={{
                pl: 1,
                transform: Boolean(anchorEl) ? "scaleY(-1)" : "scaleY(1)",
              }}
            />
          </Button>
          <Button>Price</Button>
          <Button>Blog</Button>
          <Button>Contact</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
