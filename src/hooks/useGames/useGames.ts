import { REACT_APP_URL_API } from "@env";
import axios from "axios";
import { useCallback } from "react";
import { loadAllGamesActionCreator } from "../../store/features/gamesSlice/gamesSlice";
import {
  activateModalActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import urlRoutes from "../routes";
import { type GamesResponse } from "./types";

const { games } = urlRoutes;

interface UseGamesStructure {
  getAllGames: (page?: number) => Promise<void>;
}

const useGames = (): UseGamesStructure => {
  const dispatch = useAppDispatch();

  const getAllGames = useCallback(
    async (page = 0) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await axios.get<GamesResponse>(
          `${REACT_APP_URL_API}${games.games}`,
          { params: { page } }
        );

        const { games: gamesToLoad } = response.data;

        dispatch(loadAllGamesActionCreator(gamesToLoad));

        dispatch(unsetIsLoadingActionCreator());
      } catch {
        dispatch(unsetIsLoadingActionCreator());

        dispatch(
          activateModalActionCreator({
            isError: true,
            modal: "Unable to load games",
          })
        );
      }
    },
    [dispatch]
  );

  return { getAllGames };
};

export default useGames;
