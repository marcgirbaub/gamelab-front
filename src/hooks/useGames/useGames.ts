import { REACT_APP_URL_API } from "@env";
import axios from "axios";
import { useCallback } from "react";
import {
  deleteGameActionCreator,
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
  loadOneGameActionCreator,
  loadPrivateGamesActionCreator,
} from "../../redux/features/games/gamesSlice";
import { useNavigation } from "@react-navigation/native";
import {
  type GetOneGameResponse,
  type GameStrucutre,
  type UserGamesResponse,
  type UpdateGameResponse,
} from "../../redux/features/games/types";
import {
  activateModalActionCreator,
  loadTotalNumberPagesActionCreator,
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../redux/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import urlRoutes from "../routes";
import { type GameFormData, type GamesResponse } from "./types";
import { type LoginScreenNavigationProp } from "../../types/navigation.types";
import Routes from "../../routes/routes";

const { games } = urlRoutes;

interface UseGamesStructure {
  getAllGames: (page?: number, filter?: string) => Promise<void>;
  addGame: (game: GameFormData) => Promise<void>;
  deleteGame: (gameId: string) => Promise<void>;
  getOneGame: (gameId: string) => Promise<void>;
  getUserGames: () => Promise<void>;
  updateGame: (gameId: string, game: GameFormData) => Promise<void>;
}

const useGames = (): UseGamesStructure => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const token = useAppSelector((state) => state.user.token);

  const getAllGames = useCallback(
    async (page = 0, filter?: string) => {
      try {
        dispatch(setIsLoadingActionCreator());

        const response = await axios.get<GamesResponse>(
          `${REACT_APP_URL_API}${games.games}`,
          { params: { page, filter } }
        );

        const { games: gamesToLoad, totalNumberPages } = response.data;

        dispatch(unsetIsLoadingActionCreator());
        if (!page) {
          dispatch(loadAllGamesActionCreator(gamesToLoad));
        }

        if (page) {
          dispatch(loadMoreGamesActionCreator(gamesToLoad));
        }

        dispatch(loadTotalNumberPagesActionCreator(totalNumberPages));
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
      const response = await axios.post<GameStrucutre>(
        `${REACT_APP_URL_API}${games.games}${games.create}`,
        game,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        activateModalActionCreator({ isError: false, modal: "Game created" })
      );

      dispatch(loadOneGameActionCreator(response.data));

      dispatch(unsetIsLoadingActionCreator());
      navigation.navigate(Routes.detail);
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

  const deleteGame = async (gameId: string) => {
    try {
      dispatch(setIsLoadingActionCreator());

      await axios.delete<GameStrucutre>(
        `${REACT_APP_URL_API}${games.games}${games.delete}${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({ isError: false, modal: "Game deleted" })
      );

      dispatch(deleteGameActionCreator(gameId));
      navigation.navigate(Routes.explore);
    } catch (error) {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "There was a problem deleting the game",
        })
      );
    }
  };

  const getOneGame = async (gameId: string) => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await axios.get<GetOneGameResponse>(
        `${REACT_APP_URL_API}${games.games}${gameId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { game } = response.data;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadOneGameActionCreator(game));
      navigation.navigate(Routes.detail);
    } catch {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "Something went wrong",
        })
      );
    }
  };

  const getUserGames = useCallback(async () => {
    try {
      dispatch(setIsLoadingActionCreator());

      const response = await axios.get<UserGamesResponse>(
        `${REACT_APP_URL_API}${games.games}${games.mygames}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { games: userGames } = response.data;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(loadPrivateGamesActionCreator(userGames));
    } catch {
      dispatch(unsetIsLoadingActionCreator());

      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "Something went wrong",
        })
      );
    }
  }, [dispatch]);

  const updateGame = async (gameId: string, game: GameFormData) => {
    dispatch(setIsLoadingActionCreator());

    try {
      const response = await axios.patch<UpdateGameResponse>(
        `${REACT_APP_URL_API}${games.games}${games.update}${gameId}`,
        game,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { game: updatedGame } = response.data;

      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        activateModalActionCreator({
          isError: false,
          modal: "Your game has been successfully updated",
        })
      );

      dispatch(loadOneGameActionCreator(updatedGame));
      dispatch(unsetIsLoadingActionCreator());
      navigation.navigate(Routes.detail);
    } catch {
      dispatch(unsetIsLoadingActionCreator());
      dispatch(
        activateModalActionCreator({
          isError: true,
          modal: "There was a problem updating your game",
        })
      );
    }
  };

  return {
    getAllGames,
    addGame,
    deleteGame,
    getOneGame,
    getUserGames,
    updateGame,
  };
};

export default useGames;
