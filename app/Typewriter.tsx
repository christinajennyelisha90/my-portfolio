"use client";

import { useEffect, useState } from "react";

const words = [
  "Software Engineering",
  "Web Development",
  "Engineer",
  "Backend Developer",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting && text === currentWord) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else if (deleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }
    }, !deleting && text === currentWord ? 1500 : deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <h3 className="mt-5 font-mono text-lg font-semibold text-emerald-400 md:text-2xl">
      {text}
      <span className="ml-1 animate-pulse">_</span>
    </h3>
  );
}
