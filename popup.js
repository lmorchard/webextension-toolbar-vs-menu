const NARROW_MIN_WIDTH = 320;
const $$ = (sel, cb) => document.querySelectorAll(sel).forEach(cb);

log('init start ------------------------------');

$$('button.close', el => el.addEventListener('click', ev => window.close()));

$$('button.make-active', el =>
  el.addEventListener('click', ev => {
    $$('.panel.active', subEl => subEl.classList.remove('active'));
    $$('.panel.obscured', subEl => subEl.classList.remove('obscured'));
    $$(`#${el.getAttribute('data-target')}.panel`, subEl => {
      subEl.classList.add('active');
    });
    $$(`#${el.getAttribute('data-to-obscure')}.panel`, subEl => {
      subEl.classList.add('obscured');
    });
  })
);

window.addEventListener('load', ev => log('load'));

// HACK: debounce resize event handling with a flag & requestAnimationFrame
// https://developer.mozilla.org/en-US/docs/Web/Events/resize
let resizePending = false;
const resizeHandler = ev => {
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
    window.removeEventListener('resize', resizeHandler);
  });
};

window.addEventListener('resize', resizeHandler);

log('init end');

function log() {
  const args = Array.prototype.slice.call(arguments);
  args.unshift('[TvM popup]');
  console.log.apply(console, args);
}
