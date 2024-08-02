"use client";

import Link from "next/link";
import { useState } from "react";

export default function MessageBox() {
  return (
    <section>
      <Message
        title={"Welcome to SWS"}
        message={"This is a message from the SWS team."}
      />
    </section>
  );
}

interface MessageProps {
  title: string;
  message: string;
}

function Message({ title, message }: MessageProps) {
  const [isRead, setIsRead] = useState<Boolean>(false);
  return (
    <Link
      href={"./message"}
      className="m-4 flex max-w-sm items-center space-x-4 rounded-xl bg-sky-800 p-6 text-white"
    >
      <img className="h-12 w-12" src="/logo.svg" />
      <div>
        <div className="text-xl">
          {title} {isRead && "✔"}
        </div>
        <div>{message}</div>
        <button
          onClick={() => {
            setIsRead((prev) => !prev);
          }}
        >
          읽음
        </button>
      </div>
    </Link>
  );
}
