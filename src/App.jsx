import React, { useEffect, useReducer } from "react";
import Mains from "./Mains";
import Header from "./Header";

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
  const [state, dispatch] = useReducer(reducer, initialstate);
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
        <p>1/15</p>
        <p>Questions?</p>
      </Mains>
    </div>
  );
}

export default App;
