import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { APP_BASE, BLOG } from "./routes";
import BlogHome from "./scenes/Blog/BlogPage";

const BlogRoute = (): ReactElement => {
  return (
    <Switch>
      <Route
        exact
        path={[BLOG.CREATE, BLOG.HOME, BLOG.BLOG]}
        component={BlogHome}
      />
    </Switch>
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
