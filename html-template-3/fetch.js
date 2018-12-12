/* global fetch */

import {renderFooterBlogs, renderLatestBlogs} from './blog.js';

function fetchData() {
  return fetch('http://localhost:3000/api/blogs')
      .then((response) => {
        return response.json();
      })
      .then(dataFilter);
}

function dataFilter(blogItems) {
  const {latest, blogs} = blogItems;
  const latestBlogs = [];
  const simpleBlogs = [];
  blogs.forEach((item) => {
    latest.includes(item.id) ? latestBlogs.push(item) : simpleBlogs.push(item);
  });
  renderFooterBlogs(simpleBlogs);
  renderLatestBlogs(latestBlogs);
}

window.onload = fetchData;
