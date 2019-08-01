export const renderBlogs = (parent, typeOfBlog, serverData) => {
  for (let i = 3; i < 6; i++) {
    let child;

    if (typeOfBlog === 'blog') {
      child = `<div class="blog">
        <picture class="blog__picture">
            <img src=${serverData.blogs[i].previewImg} alt="office-picture">
        </picture>
        <div class="blog__time">
            <h3 class="paragraph paragraph--big u-color-white">
            ${dataConverter(serverData, 2, i)}
            </h3>
            <p class=" paragraph paragraph--accordion u-color-white">
            ${dataConverter(serverData, 1, i)}
            </p>
        </div>
        <a href="#" class="label">${serverData.blogs[i].title}</a>
        <p class="blog__paragraph paragraph">
        ${serverData.blogs[i].description}
        </p>
        <div class="blog__container">
            <div class="blog__view-comment">
                <img src="img/visibility-button.png" alt="views icon" class="blog__icon">
                <span class="paragraph paragraph--accordion">
                ${serverData.blogs[i].watched}
                </span>
            </div>
            <div class="blog__view-comment">
                <button type="button" name="btn-comment" class="blog__icon btn">
                    <img src="img/chat.png" alt="comment icon"></button>
                <span class="paragraph paragraph--accordion">
                ${serverData.blogs[i].comments}
                </span>
            </div>
        </div>
      </div>`;
    } else {
      child = `<div class="blog-small">
        <picture>
            <img src="${
  serverData.blogs[i].previewImg
}" alt="blog picture" class="blog__picture-img">
        </picture>
        <div class="blog-small__content">
            <a href="#" class="blog-small__subheading label">
            ${serverData.blogs[i].title}
            </a>
            <p class="paragraph paragraph--accordion"> ${dataConverter(
      serverData,
      'fullDate',
      i
  )}</p>
        </div>
    </div>`;
    }

    parent.insertAdjacentHTML('beforeend', child);
  }
};

const dataConverter = (serverResponse, partOfDate, blogPosition) => {
  let date = serverResponse.blogs[blogPosition].published;
  let dateStringFormat = new Date(date).toDateString();
  if (partOfDate !== 'fullDate') {
    return dateStringFormat.split(' ')[partOfDate];
  }
  let fullDateFormatted = `${dateStringFormat.substring(
      4,
      10
  )},${dateStringFormat.substring(10)}`;
  return fullDateFormatted;
};
