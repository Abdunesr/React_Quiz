function Progress({ index, numofQuestions, points, maxTotalQuestion, answer }) {
  return (
    <header className="progress">
      <progress max={numofQuestions} value={index + Number(answer !== null)} />
      <p>
        {" "}
        questions <strong>{index + 1}</strong>/{numofQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxTotalQuestion}
      </p>
    </header>
  );
}

export default Progress;
