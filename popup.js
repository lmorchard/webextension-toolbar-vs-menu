const NARROW_MIN_WIDTH = 320;

log('init start ------------------------------');

document.querySelectorAll('button.make-active').forEach(el =>
  el.addEventListener('click', ev => {
    document.querySelectorAll('.panel.active').forEach(subEl => subEl.classList.remove('active'));
    document.querySelector(`#${el.getAttribute('data-target')}.panel`).classList.add('active');
  })
);

window.addEventListener('load', ev => {
  log('load');
});

// HACK: debounce resize event handling with a flag & requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/Events/resize
let resizePending = false;
window.addEventListener('resize', ev => {
  const width = document.body.clientWidth;

  if (width === 0) {
    log('resize (zero - ignored)', width);
    return;
  }

  if (resizePending) {
    log('resize (ignored)', width);
    return;
  }

  log('resize (pending)', width);
  resizePending = true;

  window.requestAnimationFrame(time => {
    log('resize (handled)', width, width < NARROW_MIN_WIDTH ? 'menu' : 'toolbar');
    document.body.classList[width < NARROW_MIN_WIDTH ? 'add' : 'remove']('narrow');
    resizePending = false;
  });
});

log('init end');

function log() {
  const args = Array.prototype.slice.call(arguments);
  args.unshift('[TvM popup]');
  console.log.apply(console, args);
}
