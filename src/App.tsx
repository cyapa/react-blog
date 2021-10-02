import React, { ReactElement } from "react";

import BlogPage from "./scenes/Blog/BlogPage";

function App(): ReactElement {
  return (
    <div className="container mx-auto">
      <div>
        <BlogPage />
      </div>
    </div>
  );
}

export default App;
