import { Grid2 } from "@mui/material";
import { HistoricalFigureCard } from "./HistoricalFigureCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectedHistoricalFigure } from "../../features/historicalFigureSlice";
import { useNavigate } from "react-router-dom";

export const HistoricalFigureCards = () => {
  const data = useAppSelector(
    (state) => state.historicalFigure.allHistoricalFigures
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickCard = (id: string) => {
    dispatch(selectedHistoricalFigure({ id }));
    navigate("/chat");
  };

  return (
    <>
      <Grid2
        container
        sx={{
          justifyContent: "center",
        }}
      >
        {data.map(({ id, name, imageUrl, title }, index) => {
          return (
            <Grid2 key={index}>
              <HistoricalFigureCard
                imageSrc={`url(${imageUrl})`}
                heading={name}
                subheading={title}
                onClick={() => onClickCard(id)}
              />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};
