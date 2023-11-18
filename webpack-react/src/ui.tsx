import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";

import View from "./ui-files/main";
declare function require(path: string): any;

function App() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  
  

  return (
    <main>
      <View/>
      
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
