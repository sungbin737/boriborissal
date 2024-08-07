import React from "react";

interface FooterProps {
  score: number;
}

export default function Footer({ score }: FooterProps) {
  return (
    <footer>
      <p>Score: {score}</p>
    </footer>
  );
}
