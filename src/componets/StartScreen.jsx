function StartScreen({ numofQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numofQuestions} questions to test your react Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
