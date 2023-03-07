import "@testing-library/jest-dom";
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
