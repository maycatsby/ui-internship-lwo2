/* global fetch, window, document*/

window.onload = fetchData();

function fetchData() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then((res) => render(res.blogs, res.latest));
}

function render(blogs, latestIds) {
  const blogsArr = [];
  const latestArr = [];

  prepareBlogItems();
  renderLatestBlogs(latestArr);
  renderFooterBlogs(blogsArr);

  function prepareBlogItems() {
    blogs.forEach((el) => {
      if (latestIds.includes(el.id)) {
        latestArr.push(el);
      } else {
        blogsArr.push(el);
      }
    });
  }

  function createFooterItem(model) {
    const el = document.createElement('div');
    const {
      published,
      title,
      previewImg,
    } = model;
    const {
      day,
      month,
      year,
    } = parseDate(published);

    el.classList.add('footer-blog-item');
    el.innerHTML = `
    <img src=${previewImg} alt="blog-image">
    <h3>${title}</h3>
    <span class="cursive">
      ${month} ${day}, ${year}
    </span>
    `;

    return el;
  }

  function createLatestItem(model) {
    const el = document.createElement('div');
    const {
      published,
      title,
      previewImg,
      watched,
      description,
      comments,
    } = model;
    const {
      day,
      month,
    } = parseDate(published);
    
    el.classList.add('blog-item');
    el.innerHTML = `
    <div class="blog-img-container">
      <img src="${previewImg}" alt="blog-image">
      <div class="date"><span class="day">${day}</span> <span class="month cursive">${month}</span></div>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <hr>
    <div class="activities cursive">
      <img src="./img/eye.png" alt="views">${watched}
      <img src="./img/comment.png" alt="comments">${comments}
    </div>
    `;

    return el;
  }


  function parseDate(isoDateString) {
    const date = new Date(isoDateString);
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return {
      day: date.getDate(),
      month: monthArr[date.getMonth()],
      year: date.getFullYear(),
    };
  }

  function renderLatestBlogs(latestArr) {
    const blogCont = document.querySelector('.blog-container');

    renderBlogs(blogCont, latestArr, createLatestItem);
  }


  function renderFooterBlogs(blogsArr) {
    const blogCont = document.querySelector('.footer-blog-container');

    renderBlogs(blogCont, blogsArr, createFooterItem);
  }

  function renderBlogs(container, blogs, factory) {
    const frag = document.createDocumentFragment();

    blogs.forEach((blogModel) => {
      frag.appendChild(factory(blogModel));
    });

    container.appendChild(frag);
  }
}
