import { useState } from "react";
import Intro from "./pages/Intro/Intro.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="app">
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}
      <Portfolio visible={introDone} />
    </main>
  );
}
