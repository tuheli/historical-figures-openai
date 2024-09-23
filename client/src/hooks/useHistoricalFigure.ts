import { useAppSelector } from "../app/hooks";
import { useHistoricalFigureChatMutation } from "../features/apiSlice";

export const useHistoricalFigure = () => {
  const state = useAppSelector((state) => state.historicalFigure);

  const [askHistoricalFigure] = useHistoricalFigureChatMutation();

  const selected = state.selectedHistoricalFigureId;
  const figure = state.allHistoricalFigures.find((p) => p.id === selected);

  return {
    figure,
    ask: askHistoricalFigure,
  };
};
