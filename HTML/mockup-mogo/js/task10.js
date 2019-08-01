import { promiseElements } from './elements.js';
import { renderBlogs } from './renderHTML.js';

export function initBlogsView() {
  promiseElements.then(({ blogsParent, blogsFooterParent }) => {
    const serverResponseData = async () => {
      const response = await fetch(
        'https://simple-server-12345yui.herokuapp.com/api/blogs'
      ).then((response) => response.json());

      renderBlogs(blogsParent, 'blog', response);
      renderBlogs(blogsFooterParent, 'blogFooter', response);
    };
    serverResponseData();
  });
}
