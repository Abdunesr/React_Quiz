import React, { useEffect, useReducer } from "react";
import Mains from "./Mains";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

const initialstate = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "DataFetch":
      return { ...state, questions: action.payload, status: "ready" };
    case "DataFailed":
      return { ...state, status: "Error" };
    default:
      throw new Error("unknown Error occured");
  }
}
function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialstate);
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
        {status === "ready" && <StartScreen numofQuestions={numofQuestions} />}
      </Mains>
    </div>
  );
}

export default App;
