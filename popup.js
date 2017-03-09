const NARROW_MIN_WIDTH = 320;

log('init start ------------------------------');

const windowEvents = {
  load: ev => {
    log('load');
  },
  resize: ev => {
    const width = document.body.clientWidth;
    log('resize', width);
    document.body.classList[width < NARROW_MIN_WIDTH ? 'add' : 'remove']('narrow');
  }
};

Object.keys(windowEvents)
  .forEach(name => window.addEventListener(name, windowEvents[name]));

log('init end');

function log() {
  const args = Array.prototype.slice.call(arguments);
  args.unshift('[TvM popup]');
  console.log.apply(console, args);
}
