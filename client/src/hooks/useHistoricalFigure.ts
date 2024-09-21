import { useAppSelector } from "../app/hooks";
import {
  useAbrahamLincolnMutation,
  useAlbertEinsteinMutation,
} from "../features/apiSlice";

export const useHistoricalFigure = () => {
  const state = useAppSelector((state) => state.historicalFigure);

  const [askAbrahamLincoln] = useAbrahamLincolnMutation();
  const [askAlbertEinstein] = useAlbertEinsteinMutation();

  const selected = state.selectedHistoricalFigureId;
  const figure = state.allHistoricalFigures.find((p) => p.id === selected);

  const getMutation = () => {
    if (!figure) return null;

    switch (figure.name) {
      case "Abraham Lincoln":
        return askAbrahamLincoln;
      case "Albert Einstein":
        return askAlbertEinstein;
      default:
        throw new Error("Bad figure name.");
    }
  };

  return {
    figure,
    ask: getMutation(),
  };
};
