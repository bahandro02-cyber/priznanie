
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const [position, setPosition] = useState({
    left: 65,
    top: 50
  });

  const moveNo = () => {
    setNoCount((prev) => prev + 1);

    setPosition({
      left: Math.random() * 65 + 5,
      top: Math.random() * 65 + 5
    });
  };

  const sayYes = () => {
    setAccepted(true);
  };

  return (
    <div className="app">

      <div className="floating-hearts">
        💗 💕 ❤️ 💖 💘
      </div>

      {!opened ? (

        <div className="intro">
          <h1>Hey, You! ❤️</h1>

          <p>У меня есть кое-что для тебя...</p>

          <div
            className="envelope"
            onClick={() => setOpened(true)}
          >
            <div className="envelope-back"></div>
            <div className="envelope-front"></div>
            <div className="envelope-flap"></div>
            <div className="envelope-heart">❤️</div>
          </div>

          <button
            className="open-btn"
            onClick={() => setOpened(true)}
          >
            Открыть письмо 💌
          </button>
        </div>

      ) : accepted ? (

        <div className="success">

          <h1>УРААА! ❤️</h1>

          <div className="big-heart">💖</div>

          <div className="fireworks">
            🎆 ✨ 🎇 ✨ 🎆
          </div>

          <h2>Я знал(а), что ты скажешь YES!</h2>

          <p>
            Ты делаешь мои дни ярче.
            <br />
            Я очень рад(а), что ты есть в моей жизни.
            <br />
            Ты для меня особенный человек! ❤️
          </p>

          <h3>FOREVER TOGETHER 💍</h3>

        </div>

      ) : (

        <div className="confession">

          <div className="letter-card">

            <span className="top-heart">💗</span>

            <h1>Моё признание</h1>

            <p className="love-text">
              Я долго хотел(а) сказать тебе кое-что...
              <br /><br />

              Ты очень особенный человек.
              <br />
              Мне нравится твоя улыбка,
              твой характер и то,
              как ты делаешь мой день лучше.
              <br /><br />

              Я хочу быть рядом с тобой,
              дарить тебе улыбки и
              создавать красивые воспоминания.
              <br /><br />

              Ты будешь со мной? 🥺❤️
            </p>

            <h2>Will you be mine? 💍</h2>

            <div className="buttons-area">

              <button
                className="yes-btn"
                onClick={sayYes}
              >
                YES ❤️
              </button>

              <button
                className="no-btn"
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`
                }}
                onMouseEnter={moveNo}
                onClick={moveNo}
                onTouchStart={moveNo}
              >
                {noCount === 0
                  ? "DECLINE 💔"
                  : "Are you sure? 🥺"}
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

 