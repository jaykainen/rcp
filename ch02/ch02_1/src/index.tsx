import React from "react";
import ReactDOM from "react-dom/client";

// let pPysicalDOM = document.createElement("p");
// pPysicalDOM.innerText = "hohoo";
// document.body.appendChild(pPysicalDOM);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const pVirtualDOM = React.createElement("p", null, "rrrooo");
root.render(pVirtualDOM);
