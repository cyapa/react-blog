import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { APP_BASE, BLOG } from "./routes";
import BlogHome from "./scenes/Blog/BlogPage";

const BlogRoute = (): ReactElement => {
  return (
    <Routes>
      <Route path={BLOG.HOME} element={<BlogHome />} />
    </Routes>
  );
};

function App(): ReactElement {
  return (
    <BrowserRouter basename={APP_BASE}>
      <BlogRoute />
    </BrowserRouter>
  );
}

export default App;
