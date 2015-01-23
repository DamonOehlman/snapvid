var _cached = {};

/**
  # snapvid

  Given a `<video>` element that, snapvid will take a snapshot of the
  currently displayed frame and provide a base64 data uri.

  ## Example Usage

  <<< examples/capture.js

  ## Reference
**/
function getCachedCanvas(video) {
  var key = video.videoWidth + '|' + video.videoHeight;
  var canvas = _cached[key];

  if (! canvas) {
    canvas = _cached[key] = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  }

  return canvas;
}

/**
  ### `snapvid(video, opts?) => string`

  Valid options:

  - mimeType (default: 'image/jpeg')
  - quality (no default)

**/
module.exports = function(video, opts) {
  var canvas = getCachedCanvas(video);
  var context = canvas.getContext('2d');

  context.drawImage(video, 0, 0);

  return canvas.toDataURL((opts || {}).mimeType || 'image/jpeg', (opts || {}).quality);
};
