import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <>
      <h4 className="text-center text-red-500 text-3xl font-extrabold underline">
        Netflix-GPT
      </h4>
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
