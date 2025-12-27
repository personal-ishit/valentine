"use client";
// import me from "./me.jpg";
import her from "./her.jpg";
import { useState } from "react";

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "what if i asked really nicely?",
      "please",
      "pwease",
      "🫵🏻🫵🏻🫵🏻😭😭😭",
      "PLEASE POOKIE",
      "But :*(",
      "i am going to die",
      "yep im dead",
      "ok ur talking to ishit's ghost",
      "please nimisha😭",
      ":(",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/15S5EgnUakMAAAAd/cat-kiss.gif" alt = "hihi"/>
          <div className="my-4 text-4xl font-bold">PUKI 🥹🥹🥹</div>
        </> 
      ) : (
        <>
          <img
            className="h-300 px]"
            src={her} alt = "hehe"
          />
          <h1 className="my-4 text-4xl">I know it's a little late but, Will you be my Valentine?🫴🏻💍</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
