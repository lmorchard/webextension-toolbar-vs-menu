const NARROW_MIN_WIDTH = 320;

log('init start ------------------------------');

window.addEventListener('load', ev => {
  log('load');
});

window.addEventListener('resize', ev => {
  const width = document.body.clientWidth;
  log('resize', width);

  // TODO: Debounce this with requestAnimationFrame?
  document.body.classList[width < NARROW_MIN_WIDTH ? 'add' : 'remove']('narrow');
});

log('init end');

function log() {
  const args = Array.prototype.slice.call(arguments);
  args.unshift('[TvM popup]');
  console.log.apply(console, args);
}
