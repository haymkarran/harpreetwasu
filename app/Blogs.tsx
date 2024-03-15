// pages/Blogs.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogList from './blogs/page';
import BlogDetails from './blogs/[slug]/page'; // Assuming this is the correct path

const Blogs: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/blogs" component={BlogList} />
        <Route path="/blogs/:slug" component={BlogDetails} />
      </Switch>
    </Router>
  );
};

export default Blogs;
