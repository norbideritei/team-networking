export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function $(selector) {
  return document.querySelector(selector);
}

export function debounce(fn, ms) {
  let timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      //fn(e);
      //fn.call(this, e);
      //fn.apply(this, arguments);
      fn.apply(context, args);
    }, ms);
  };
}
