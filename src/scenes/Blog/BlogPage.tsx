import React, { ReactElement } from "react";
import {
  generatePath,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";

import Button from "../../components/Button";
import useBlogs from "../../hooks/useBlogs";
import { BLOG } from "../../routes";
import BlogCreate from "./BlogCreate";
import BlogList from "./BlogList";
import DetailedBlog from "./DetailedBlog";

const BlogPage = (route: RouteComponentProps): ReactElement => {
  const { blogs, isLoadingBlogs, addBlog, removeBlog } = useBlogs();

  const onAddNewBLogButtonClick = () => {
    route.history.push(generatePath(BLOG.CREATE));
  };

  const redirectToHome = () => {
    route.history.push(generatePath(BLOG.HOME));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <Switch>
        <Route exact path={BLOG.HOME}>
          <div className="my-5">
            {!isLoadingBlogs ? (
              <BlogList blogs={blogs} removeBlog={removeBlog} />
            ) : (
              "Loading..."
            )}
          </div>
          <div className="my-5">
            <div className="">
              <Button
                type="button"
                label="Create a new blog"
                onClick={onAddNewBLogButtonClick}
              />
            </div>
          </div>
        </Route>
        <Route exact path={BLOG.CREATE}>
          <div className="my-5">
            <BlogCreate redirectToHome={redirectToHome} addBlog={addBlog} />
          </div>
        </Route>
        <Route exact path={BLOG.BLOG}>
          <div className="my-5">
            <DetailedBlog />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(BlogPage);
