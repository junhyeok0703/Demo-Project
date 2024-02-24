import React, { useEffect, useState } from "react";
import Box from "./components/Box";
import "./App.css";
import scissor from "./img/scissor.png";
import rock from "./img/rock.png";
import paper from "./img/paper.png";

const App = () => {
  const [userimg, setUserimg] = useState(null);
  const [computerimg, setComputerimg] = useState(null);
  const [score, setScore] = useState("");
  const imgname = [scissor, rock, paper];
  const [compurtscore, setComputerscore] = useState(null);
  const playGame = (selectedImg) => {
    setUserimg(selectedImg);
    const randomnum = Math.floor(Math.random() * 3);
    setComputerimg(imgname[randomnum]);

    const userChoice = imgname.findIndex((img) => img === selectedImg);
    const computerChoice = randomnum;

    if (userChoice === computerChoice) {
      setScore("tie");
      setComputerscore("tie");
    } else if (
      (userChoice === 0 && computerChoice === 2) ||
      (userChoice === 1 && computerChoice === 0) ||
      (userChoice === 2 && computerChoice === 1)
    ) {
      setScore("win");
      setComputerscore("lose");
    } else {
      setScore("lose");
      setComputerscore("win");
    }
  };

  useEffect(() => {
    console.log(score);
  }, [score]);

  return (
    <div>
      <div className="Boxp">
        <Box title="you" userimg={userimg} score={score} />
        <Box title="computer" userimg={computerimg} score={compurtscore} />
      </div>
      <div className="btns">
        {imgname.map((img, index) => (
          <button key={index} onClick={() => playGame(img)}>
            {img === scissor ? "가위" : img === rock ? "바위" : "보"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
