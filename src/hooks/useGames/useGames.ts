import { REACT_APP_URL_API } from "@env";
import axios from "axios";
import { useCallback } from "react";
import {
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
} from "../../redux/features/games/gamesSlice";
import {
  activateModalActionCreator,
  loadTotalNumberPagesActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import urlRoutes from "../routes";
import { type GameFormData, type GamesResponse } from "./types";

const { games } = urlRoutes;

interface UseGamesStructure {
  getAllGames: (page?: number, filter?: string) => Promise<void>;
  addGame: (game: GameFormData) => Promise<void>;
}

const useGames = (): UseGamesStructure => {
  const dispatch = useAppDispatch();

  const getAllGames = useCallback(
    async (page = 0, filter?: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await axios.get<GamesResponse>(
          `${REACT_APP_URL_API}${games.games}`,
          { params: { page, filter } }
        );

        const { games: gamesToLoad, totalNumberPages } = response.data;

        if (!page) {
          dispatch(loadAllGamesActionCreator(gamesToLoad));
          dispatch(loadTotalNumberPagesActionCreator(totalNumberPages));
        }

        if (page) {
          dispatch(loadMoreGamesActionCreator(gamesToLoad));
        }

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

  const addGame = async (game: GameFormData) => {
    dispatch(setIsLoadingActionCreator());

    try {
      const response = await axios.post(
        `${REACT_APP_URL_API}${games.games}${games.create}`,
        game,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        activateModalActionCreator({ isError: false, modal: "Game created" })
      );
    } catch {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "There was a problem creating your game",
        })
      );
    }
  };

  return { getAllGames, addGame };
};

export default useGames;
