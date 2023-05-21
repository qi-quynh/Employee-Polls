import { render, screen, fireEvent } from "@testing-library/react";
import App from "./components/App";
import NavBar from "./components/NavBar";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { handleDataInitial } from "./actions/shared";
import Login from "./components/login";
const {
  _saveQuestionAnswer,
  _saveQuestion,
  generateUID,
} = require("../src/utils/_DATA");
describe("Navbar", () => {
  test("render correct links", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </MemoryRouter>
    );

    const home = screen.getByText(/home/i);
    const leaderboard = screen.getByText(/leaderboard/i);
    const newPoll = screen.getByText(/new poll/i);
    expect(home).toBeInTheDocument();
    expect(newPoll).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  it("should render the component", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeDefined();
    expect(component).toMatchSnapshot();
  });
});

describe("Save question with success testing", () => {
  it("should return success if the optionOne, optionTwo, author are correct", async () => {
    const question = {
      optionOneText: "Would you like to go to the cinema",
      optionTwoText: "Would you like to go to dinner",
      author: "sarahedo",
    };
    var res = await _saveQuestion(question);

    expect(res.optionOne.text).toEqual("Would you like to go to the cinema");
    expect(res.optionTwo.text).toEqual("Would you like to go to dinner");
    expect(res.author).toEqual("sarahedo");
  });
});
describe("Save question with errors testing", () => {
  it("should return error if optionOneText is null", async () => {
    const question = {
      optionTwoText: "Would you like coffee",
      author: "mtsamis",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should return error if optionTwoText is null", async () => {
    const question = {
      optionOneText: "Would you like juice",
      author: "mtsamis",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should return error if author is null", async () => {
    const question = {
      optionTwoText: "Would you like coffee",
      optionOneText: "Would you like juice",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
describe("Login", () => {
  it("should get correct input data and after click click input is refreshed", async () => {
    await store.dispatch(handleDataInitial());
    const element = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );
    const login = element.getByTestId("login-heading");
    const username = element.getByTestId("username");
    const password = element.getByTestId("password");
    const submitButton = element.getByTestId("submit");
    expect(login).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    fireEvent.change(username, { target: { value: "sarahedo" } });
    fireEvent.change(password, {
      target: { value: "password12345" },
    });
    expect(username.value).toBe("sarahedo");
    expect(password.value).toBe("password12345");
    fireEvent.click(submitButton);
    expect(login).toBeInTheDocument();
    expect(username.value).toBe("");
    expect(password.value).toBe("");
  });
});
describe("UID", () => {
  test("should return a unique question id", () => {
    const question1 = generateUID();
    const question2 = generateUID();
    expect(question1 !== question2).toBe(true);
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "xj352vofupe1dqz9emx13r",
      answer: "optionTwo",
    });

    expect(result).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const result = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: undefined,
      answer: "optionTwo",
    }).catch((e) => e);

    expect(result).toBe("Please provide authedUser, qid, and answer");
  });
});
