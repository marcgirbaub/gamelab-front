import "@testing-library/jest-dom";
import { handlers } from "./mocks/handlers";
import { server } from "./mocks/server";

beforeAll(() => {
  global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
  server.listen();
});

afterEach(() => {
  server.resetHandlers(...handlers);
});

afterAll(() => {
  server.close();
});