"use client";

import { cn } from "@/app/lib/utils";
import { randomFill } from "crypto";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BlinkProps {
  appearDelay: number;
}

export default function Blink({ appearDelay }: BlinkProps) {
  const [hideDelay, setHideDelay] = useState(500);
  const [visible, setVisible] = useState(false);
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
    <button
      className={cn(visible ? "block" : "hidden")}
      onMouseDown={() => {
        window.alert("쌀!");
        console.log("success");
      }}
      onTouchStart={() => {
        window.alert("쌀!");
        console.log("success");
      }}
    >
      <Image src="/ssal.png" width={500} height={500} alt="fail" />
    </button>
  );
}
