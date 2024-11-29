import React, { useEffect } from "react";
import Mains from "./Mains";
import Header from "./Header";

function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error "));
  });
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
