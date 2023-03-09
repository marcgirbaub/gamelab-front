import React from "react";
import { fireEvent } from "@testing-library/react-native";
import { screen } from "@testing-library/react-native";
import { type UserRegisterCredentials } from "../../hooks/useUser/types";
import renderWithProviders from "../../utils/renderWithProviders";
import StackNavigator from "../../navigation/StackNavigator/StackNavigator";
import Routes from "../../navigation/routes";
import RegisterForm from "./RegisterForm";
import RegisterScreen from "../../screen/RegisterScreen/RegisterScreen";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockedRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockedRegisterUser,
}));

const mockNavigation = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({ navigate: mockNavigation }),
}));

const loginRoute = Routes.login;

const mockUserCredentials: UserRegisterCredentials = {
  username: "marc10",
  password: "marc12345",
  email: "marc@gmail.com",
};

describe("Given a RegisterForm component", () => {
  describe("When rendered", () => {
    test("Then it should show a `Sign up` title", async () => {
      const titleText = "Sign up";

      renderWithProviders(<RegisterForm />);

      const title = await screen.getByTestId(titleText);

      expect(title).toBeOnTheScreen();
    });

    test("Then it should show three inputs corresponding to username, email and password fields", async () => {
      const usernameAccessibilityLabel = "enter username";
      const passwordAccessibilityLabel = "enter password";
      const emailAccessibilityLabel = "enter email";
      const submitButtonAccessibilityLabel =
        "press to complete the registration";

      renderWithProviders(<RegisterForm />);

      const usernameInput = await screen.getByLabelText(
        usernameAccessibilityLabel
      );
      const passwordInput = await screen.getByLabelText(
        passwordAccessibilityLabel
      );
      const emailInput = await screen.getByLabelText(emailAccessibilityLabel);
      const submitButton = await screen.getByLabelText(
        submitButtonAccessibilityLabel
      );

      expect(usernameInput).toBeDefined();
      expect(emailInput).toBeDefined();
      expect(passwordInput).toBeDefined();
      expect(submitButton).toBeDefined();
    });
  });

  describe("When rendered and the user enters their credentials username `marc10`, email `marc@gmail.com` and password `marc12345`and clicks on the submit button", () => {
    test("Then the credentials should show on the inputs and the registerUser function should be called", async () => {
      const usernameLabelText = "enter username";
      const passwordLabelText = "enter password";
      const emailLabelText = "enter email";

      renderWithProviders(<RegisterForm />);

      const usernameInput = await screen.getByLabelText(usernameLabelText);
      const passwordInput = await screen.getByLabelText(passwordLabelText);
      const emailInput = await screen.getByLabelText(emailLabelText);
      const submitButton = await screen.getByRole("button");

      fireEvent.changeText(usernameInput, mockUserCredentials.username);
      fireEvent.changeText(emailInput, mockUserCredentials.email);
      fireEvent.changeText(passwordInput, mockUserCredentials.password);

      expect(usernameInput.props.value).toBe(mockUserCredentials.username);
      expect(emailInput.props.value).toBe(mockUserCredentials.email);
      expect(passwordInput.props.value).toBe(mockUserCredentials.password);

      fireEvent.press(submitButton);

      expect(mockedRegisterUser).toHaveBeenCalledWith(mockUserCredentials);
    });
  });

  describe("When the `Log in` button is pressed", () => {
    test("Then it should call the useNavigation to redirect the user to the LoginScreen", async () => {
      const redirectButtonText = "Log in";

      renderWithProviders(<RegisterScreen />);
      const redirectButton = await screen.getByText(redirectButtonText);

      fireEvent.press(redirectButton);

      expect(mockNavigation).toHaveBeenCalledWith(loginRoute);
    });
  });

  describe("When rendered and the user enters their credentials `marc10`, `marc@gmail.com` and `marc12` as password, and clicks on the submit button", () => {
    test("Then there should appear the error `The password must have at least 8 characters` on the screen", async () => {
      const usernameLabelText = "enter username";
      const passwordLabelText = "enter password";
      const emailLabelText = "enter email";

      const passwordShorterThanEight = "marc12";
      const expectedErrorText = "The password must have at least 8 characters";

      renderWithProviders(<RegisterForm />);

      const usernameInput = await screen.getByLabelText(usernameLabelText);
      const passwordInput = await screen.getByLabelText(passwordLabelText);
      const emailInput = await screen.getByLabelText(emailLabelText);
      const submitButton = await screen.getByRole("button");

      fireEvent.changeText(usernameInput, mockUserCredentials.username);
      fireEvent.changeText(emailInput, mockUserCredentials.email);
      fireEvent.changeText(passwordInput, passwordShorterThanEight);

      fireEvent.press(submitButton);

      const validationError = await screen.getByText(expectedErrorText);

      expect(validationError).toBeOnTheScreen();
    });
  });

  describe("When rendered and the user enters their credentials `marc10`, `marcgmail.com` and `marc12345` as password, and clicks on the submit button", () => {
    test("Then there should appear the error `Invalid email` on the screen", async () => {
      const usernameLabelText = "enter username";
      const passwordLabelText = "enter password";
      const emailLabelText = "enter email";

      const expectedErrorText = "Invalid email";

      renderWithProviders(<RegisterForm />);

      const usernameInput = await screen.getByLabelText(usernameLabelText);
      const passwordInput = await screen.getByLabelText(passwordLabelText);
      const emailInput = await screen.getByLabelText(emailLabelText);
      const submitButton = await screen.getByRole("button");

      fireEvent.changeText(usernameInput, mockUserCredentials.username);
      fireEvent.changeText(emailInput, "marcgmail.com");
      fireEvent.changeText(passwordInput, mockUserCredentials.password);

      fireEvent.press(submitButton);

      const validationError = await screen.getByText(expectedErrorText);

      expect(validationError).toBeOnTheScreen();
    });
  });

  describe("When the arrow back button is pressed", () => {
    test("Then it should call the useNavigation to redirect the user to the LoginScreen", async () => {
      const accessibleLabelText = "go back";

      renderWithProviders(<RegisterScreen />);
      const goBackButton = await screen.getByLabelText(accessibleLabelText);

      fireEvent.press(goBackButton);

      expect(mockNavigation).toHaveBeenCalledWith(loginRoute);
    });
  });
});
