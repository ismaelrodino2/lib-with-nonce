"use client";
import React, { useState } from "react";
import "./Button.css";

export default function ({ title }: { title: string }) {
  const [count, setCount] = useState(0); //testagem de um script qualquer
  return (
    <button onClick={() => setCount(count + 1)} className="UI-Button">
      {title} - {count}
    </button>
  );
}
