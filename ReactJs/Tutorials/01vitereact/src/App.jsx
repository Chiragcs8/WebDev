import { useState } from "react";
import Island from "./Island";

function App() {
  const username = "Gol D. Roger";

  return (
    <>
      <Island />
      <h2>Freest man of them all {username}</h2>
    </>
  );
}

export default App;
