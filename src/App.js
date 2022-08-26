import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is The Best Stack For Darsh MosTaFa... ?",
      answers: [
        {
          text: "Mean Stack (Angular)",
          correct: false,
        },
        {
          text: "Mern Stack (React)",
          correct: true,
        },
        {
          text: "Mevn Stack (Vue)",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is The Best BackEnd Technology for MosTaFa Abdulrahman ?",
      answers: [
        {
          text: "Laravel",
          correct: false,
        },
        {
          text: "Spring Boot",
          correct: false,
        },
        {
          text: "Node.JS",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "100 $" },
        { id: 2, amount: "200 $" },
        { id: 3, amount: "300 $" },
        { id: 4, amount: "400 $" },
        { id: 5, amount: "500 $" },
        { id: 6, amount: "600 $" },
        { id: 7, amount: "700 $" },
        { id: 8, amount: "800 $" },
        { id: 9, amount: "900 $" },
        { id: 10, amount: "1000 $" },
        { id: 11, amount: "1100 $" },
        { id: 12, amount: "1200 $" },
        { id: 13, amount: "1300 $" },
        { id: 14, amount: "1400 $" },
        { id: 15, amount: "1500 $" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
