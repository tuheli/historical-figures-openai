import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface LedCardProps {
  Icon: ReactNode;
  imageSrc: string;
  heading: string;
  subheading: string;
  onClick: () => void;
}

export const LedCard = ({
  Icon,
  imageSrc,
  heading,
  subheading,
  onClick,
}: LedCardProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          width: 320,
          height: 200,
          p: 2,
          borderRadius: 4,
          backgroundImage: imageSrc,
          backgroundSize: "50% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backgroundBlendMode: "multiply",
          outline: "1px solid grey",
          alignContent: "end",
          cursor: "pointer",
          userSelect: "none",
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.02)",
          },
        }}
      >
        <Box
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.2)",
            width: "100%",
            height: "50%",
            justifyContent: "center",
            alignContent: "center",
            borderRadius: 2,
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              color: "white",
            }}
          >
            <Box
              sx={{
                alignContent: "center",
                px: 1,
              }}
            >
              {Icon}
            </Box>
            <Stack
              sx={{
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {heading}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                }}
              >
                {subheading}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
