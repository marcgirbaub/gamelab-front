import "@testing-library/react";
import "@testing-library/react-native";
import "@testing-library/jest-dom";
import "@testing-library/jest-native/extend-expect";
import "core-js";
import { handlers } from "./mocks/handlers";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers(...handlers);
});

afterAll(() => {
  server.close();
});
