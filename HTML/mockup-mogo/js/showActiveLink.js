export const showActiveLink = () => {
  let prevActive = 'about';
  let sectionNames = resizeSectionsPositions();

  window.addEventListener('resize', () => {
    sectionNames = resizeSectionsPositions();
  });

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let isEndOfPage =
      scrollPosition + window.innerHeight === document.body.clientHeight;
    let curActive = sectionNames.find((el, ind, arr) => {
      if (ind === arr.length - 1) {
        return isEndOfPage;
      } else {
        return (
          scrollPosition >= el.sectionPosition &&
          scrollPosition < el.sectionPositionNext &&
          !isEndOfPage
        );
      }
    }).el;

    document
        .querySelector(`a[href="#${prevActive}"]`)
        .classList.remove('nav__menu-item--active');
    document
        .querySelector(`a[href="#${curActive}"]`)
        .classList.add('nav__menu-item--active');

    prevActive = curActive;
  });
};

const resizeSectionsPositions = () => {
  const sectionNames = ['about', 'service', 'work', 'blog', 'contact'];
  sectionNames.forEach((el, ind, arr) => {
    arr[ind] = {el: el};
    if (ind !== arr.length - 1) {
      arr[ind].sectionPosition = document.getElementById(el).offsetTop;
      arr[ind].sectionPositionNext = document.getElementById(
          arr[ind + 1]
      ).offsetTop;
    }
  });

  return sectionNames;
};
