import { useAppSelector } from "../app/hooks";

export const useHistoricalFigure = () => {
  const state = useAppSelector((state) => state.historicalFigure);
  const selected = state.selectedHistoricalFigureId;
  const figure = state.allHistoricalFigures.find((p) => p.id === selected);
  return figure;
};
