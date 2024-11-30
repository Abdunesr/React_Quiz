import React, { useEffect, useReducer } from "react";
import Mains from "./Mains";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";

const initialstate = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "DataFetch":
      return { ...state, questions: action.payload, status: "ready" };
    case "DataFailed":
      return { ...state, status: "Error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    default:
      throw new Error("unknown Error occured");
  }
}
function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  const numofQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DataFetch", payload: data }))
      .catch((err) => dispatch({ type: "DataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Mains>
        {status === "loading" && <Loader />}
        {status === "Error" && <Error />}
        {status === "ready" && (
          <StartScreen numofQuestions={numofQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Questions
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
      </Mains>
    </div>
  );
}

export default App;
