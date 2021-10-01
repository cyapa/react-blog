import React, { ReactElement } from "react";

import BlogPage from "./scenes/Blog/BlogPage";

import "./App.css";

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BlogPage />
        </div>
      </header>
    </div>
  );
}

export default App;
