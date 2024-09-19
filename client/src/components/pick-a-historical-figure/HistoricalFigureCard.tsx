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
          height: 260,
          p: 2,
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
            textAlign: "center",
            color: "white",
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
