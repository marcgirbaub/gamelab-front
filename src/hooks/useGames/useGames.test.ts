import { renderHook } from "@testing-library/react";
import {
  formDataGameToCreate,
  mockGameToCreate,
  mockListOfGames,
} from "../../mocks/gamesMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import Wrapper from "../../mocks/Wrapper";
import {
  loadAllGamesActionCreator,
  loadMoreGamesActionCreator,
  loadOneGameActionCreator,
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
});
