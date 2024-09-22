import { Box, Typography } from "@mui/material";

interface HistoricalFigureCardProps {
  imageSrc: string;
  heading: string;
  subheading: string;
  onClick: () => void;
}

export const HistoricalFigureCard = ({
  imageSrc,
  heading,
  subheading,
  onClick,
}: HistoricalFigureCardProps) => {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          width: 240,
          height: 240,
          p: 2,
          backgroundImage: imageSrc,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          outline: "1px solid grey",
          alignContent: "end",
          cursor: "pointer",
          userSelect: "none",
          transition: "all 0.2s",
          filter: "brightness(0.95)",
          "&:hover": {
            filter: "brightness(1.05)",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            filter: "brightness(1.0)",
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
        </Box>
      </Box>
    </>
  );
};
