"use client";

import { cn } from "@/app/lib/utils";
import { randomFill } from "crypto";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BlinkProps {
  increaseScore: () => void;
  decreaseScore: () => void;
}
export default function Blink({ increaseScore, decreaseScore }: BlinkProps) {
  const [hideDelay, setHideDelay] = useState(500);
  const [visible, setVisible] = useState(false);
  const [boriVisible, setBoriVisible] = useState(false);
  const [ssalVisible, setSsalVisible] = useState(false);
  const appearDelay = 250;
  useEffect(() => {
    if (visible) {
      if (Math.random() < 0.75) {
        setBoriVisible(true);
        setSsalVisible(false);
      } else {
        setBoriVisible(false);
        setSsalVisible(true);
      }
    } else {
      setBoriVisible(false);
      setSsalVisible(false);
    }
  }, [visible]);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setVisible((prev) => !prev);
        visible && setHideDelay(Math.random() * 1700 + 300);
      },
      visible ? appearDelay : hideDelay
    );

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌을 정리합니다.
  }, [visible, hideDelay, appearDelay]);
  return (
    <div className="relative h-[500px]">
      <button
        className={cn(
          "absolute top-0 left-0",
          boriVisible ? "block" : "hidden"
        )}
        onMouseDown={() => {
          decreaseScore();
          window.alert("보리ㅜㅜ");
          console.log("fail");
        }}
      >
        <Image src="/bori.png" width={500} height={500} alt="fail" />
      </button>
      <button
        className={cn(
          "absolute top-0 left-0",
          ssalVisible ? "block" : "hidden"
        )}
        onMouseDown={() => {
          increaseScore();
          window.alert("쌀!");
          console.log("success");
        }}
      >
        <Image src="/ssal.png" width={500} height={500} alt="fail" />
      </button>
    </div>
  );
}
