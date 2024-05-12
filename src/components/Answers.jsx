import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswers,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  // if undefined it means it's not shuffled yet
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isAnswered = selectedAnswers === answer;
        let cssClass = "";

        if (answerState === "answered" && isAnswered) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isAnswered
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
