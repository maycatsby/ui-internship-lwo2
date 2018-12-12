/* eslint-disable no-undef */
/* eslint-disable max-len */
/* global document:true */


export function renderFooterBlogs(blogs) {
  const blogContainer = document.getElementById('blog-items');

  renderBlogs(blogs, blogContainer, createFooterBlogItem);
}


export function renderLatestBlogs(blogs) {
  const latestBlogContainer = document.getElementById('lb-gallery');

  renderBlogs(blogs, latestBlogContainer, createLatestBlogItem);
}

function renderBlogs(blogs, container, factory) {
  blogs.forEach((model) => container.appendChild(factory(model)));
}


function createFooterBlogItem(model) {
  const data = {
    previewImg: model.previewImg,
    title: model.title,
    published: formatDate(new Date(model.published)),
  };

  const blogItem = document.createElement('div');
  blogItem.className = 'blog-item';
  blogItem.innerHTML = `
        <img src=${data.previewImg} alt='Something'>
        <div class='blog-text'>
          <h6 class='main-font drop-item-header wps-header blog-text-header'>${data.title}</h6>
          <p class='font date'>${data.published.month + ' ' + data.published.day + ', ' + data.published.year}</p>
        </div>
      `;

  return blogItem;
}

function createLatestBlogItem(model) {
  const data = {
    previewImg: model.previewImg,
    title: model.title,
    description: model.description,
    watched: model.watched,
    comments: model.comments,
    published: formatDate(new Date(model.published)),
  };

  const latestBlogItem = document.createElement('div');
  latestBlogItem.className = 'lb-item';
  latestBlogItem.innerHTML = `
    <div class="lb-item">
      <img src=${data.previewImg} alt="Something" class="pic lb-pic" /> 
      <div class="calendar font">${data.published.month} <span class="main-header number">${data.published.day}</span></div>
      <div class="lb-text-block">
        <h6 class="main-font drop-item-header wps-header lb-header">${data.title}</h6>
        <p class="font flow">${data.description}</p>
      </div>
      <div class="lb-icons">
        <i class="fas fa-eye"><span class="font">${data.watched}</span></i>
        <i class="far fa-comment-dots"><span class="font">${data.comments}</span></i>
      </div>
    </div>
    `;

  return latestBlogItem;
}

const formatDate = (date) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ];
  return {
    day: date.getDate(),
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
};
