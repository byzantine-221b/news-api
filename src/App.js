import React from "react";
import { NewsContextProvider } from "./News-page";
import News from "./News-page";
import "./App.css";

function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;

