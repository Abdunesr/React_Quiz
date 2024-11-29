import React from "react";
import Mains from "./Mains";
import Header from "./Header";

function App() {
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
