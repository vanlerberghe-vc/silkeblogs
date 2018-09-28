var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = 'header';
//var eleHeader = null;

const classes = {
  pinned: 'header-pin',
  unpinned: 'header-unpin',
};

function onScroll() {
  currentScrollY = window.pageYOffset;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY + 10) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}

function pin() {
  if (EL_HEADER.classList.contains(classes.unpinned)) {
    EL_HEADER.classList.remove(classes.unpinned);
    //EL_HEADER.classList.add(classes.pinned);
  }
}

function unpin() {
  if (EL_HEADER.classList.contains(classes.pinned) || !EL_HEADER.classList.contains(classes.unpinned)) {
    //EL_HEADER.classList.remove(classes.pinned);
    EL_HEADER.classList.add(classes.unpinned);
  }
}

/*window.onload = function() {
  eleHeader = document.getElementById(idOfHeader);
  document.addEventListener('scroll', onScroll, false);
}*/