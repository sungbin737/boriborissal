"use client";
import React, { useState } from "react";
import Blink from "./blink_reference";
import Footer from "./footer";
export default function Tab() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <Blink increaseScore={increaseScore} decreaseScore={decreaseScore} />
      <Footer score={score} />
    </div>
  );
}
