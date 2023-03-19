import { renderHook } from "@testing-library/react";
import {
  formDataGameToCreate,
  formDataGameToUpdate,
  mockGameToCreate,
  mockGameToDelete,
  mockGameToUpdate,
  mockLeagueGame,
  mockListOfGames,
} from "../../mocks/gamesMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import Wrapper from "../../mocks/Wrapper";
import {
  deleteGameActionCreator,
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
  loadOneGameActionCreator,
  loadPrivateGamesActionCreator,
} from "../../redux/features/games/gamesSlice";
import { store } from "../../redux/store";
import useGames from "./useGames";
import { type ModalPayload } from "../../redux/features/ui/types";
import { activateModalActionCreator } from "../../redux/features/ui/uiSlice";

beforeEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given useGames hook", () => {
  describe("When the getAllGames function is called", () => {
    test("Then the dispatch should be called with the action to loadAllGames", async () => {
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getAllGames();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadAllGamesActionCreator(mockListOfGames)
      );
    });
  });

  describe("When the getAllGames function is called", () => {
    test("Then the dispatch should be called with the action to loadMoreGames when the passed page is 1", async () => {
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await getAllGames(1);

      expect(spyDispatch).toHaveBeenCalledWith(
        loadMoreGamesActionCreator(mockListOfGames)
      );
    });
  });

  describe("When the getAllGames function is called and the request to get the games is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action to show an error modal with the text `Unable to load games`", async () => {
      const {
        result: {
          current: { getAllGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "Unable to load games",
      };

      await getAllGames();

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the addGame function is called", () => {
    test("Then the dispatch should be called with the action to loadOneGame", async () => {
      const {
        result: {
          current: { addGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await addGame(formDataGameToCreate);

      expect(spyDispatch).toHaveBeenCalledWith(
        loadOneGameActionCreator(mockGameToCreate)
      );
    });
  });

  describe("When the addGame function is called", () => {
    test("Then the dispatch should be called with the action to activate modal with a success message", async () => {
      const {
        result: {
          current: { addGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: false,
        modal: "Game created",
      };

      await addGame(formDataGameToCreate);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the addGame function is called and the response from the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action to activate modal with an error message", async () => {
      const {
        result: {
          current: { addGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "There was a problem creating your game",
      };

      await addGame(formDataGameToCreate);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the deleteGame function is called with a game to delete", () => {
    test("Then the dispatch should be called with the action to delete that game", async () => {
      const {
        result: {
          current: { deleteGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const gameToDelete = mockGameToDelete;

      await deleteGame(gameToDelete.id!);

      expect(spyDispatch).toHaveBeenCalledWith(
        deleteGameActionCreator(gameToDelete.id!)
      );
    });
  });

  describe("When the deleteGame function is called with a game to delete but the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action activate a modal with an error message", async () => {
      const {
        result: {
          current: { deleteGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const gameToDelete = mockGameToDelete;

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "There was a problem deleting the game",
      };

      await deleteGame(gameToDelete.id!);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the getOneGame function is called with a game id", () => {
    test("Then the dispatch should be called with the action to load that game", async () => {
      const {
        result: {
          current: { getOneGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const gameToFind = mockLeagueGame;

      await getOneGame(gameToFind.id!);

      expect(spyDispatch).toHaveBeenCalledWith(
        loadOneGameActionCreator(gameToFind)
      );
    });
  });

  describe("When the getOneGame function is called with a game id but the requests fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action to show an error modal", async () => {
      const {
        result: {
          current: { getOneGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "Something went wrong",
      };

      const gameToFind = mockLeagueGame;

      await getOneGame(gameToFind.id!);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the getUserGames function is called ", () => {
    test("Then the dispatch should be called with the action to load the user games", async () => {
      const {
        result: {
          current: { getUserGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const userGames = mockListOfGames;

      await getUserGames();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadPrivateGamesActionCreator(userGames)
      );
    });
  });

  describe("When the getUserGames function is called but the requests fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the dispatch should be called with the action to show an error modal", async () => {
      const {
        result: {
          current: { getUserGames },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "Something went wrong",
      };

      await getUserGames();

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });

  describe("When the updateGame function is called", () => {
    test("Then the action to load one game should be called with the updated game", async () => {
      const gameId = mockGameToUpdate.id!;
      const {
        result: {
          current: { updateGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      await updateGame(gameId, formDataGameToUpdate);

      expect(spyDispatch).toHaveBeenCalledWith(
        loadOneGameActionCreator(mockGameToUpdate)
      );
    });
  });

  describe("When the updateGame function is called but the request is failed", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });

    test("Then the action to activate an error modal should be called", async () => {
      const gameId = mockGameToUpdate.id!;
      const {
        result: {
          current: { updateGame },
        },
      } = renderHook(() => useGames(), { wrapper: Wrapper });

      const actionPayload: ModalPayload = {
        isError: true,
        modal: "There was a problem updating your game",
      };

      await updateGame(gameId, formDataGameToUpdate);

      expect(spyDispatch).toHaveBeenCalledWith(
        activateModalActionCreator(actionPayload)
      );
    });
  });
});
