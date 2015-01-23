var snapvid = require('..');
var h = require('hyperscript');
var getUserMedia = require('getusermedia');
var attachstream = require('attachmediastream');
var video;

function captureVid() {
  document.body.appendChild(h('div', h('img', { src: snapvid(video) })));
}

function createSource(url) {
  return h('source', {
    src: url,
    type: 'video/' + url.replace(/^(?:.*\.)(\w+)$/, '$1')
  });
}

getUserMedia({ video: true, audio: true }, function(err, stream) {
  if (err) {
    return console.error('could not capture stream: ', err);
  }

  // attach the stream
  video = attachstream(stream, null, { muted: true });

  // add a video element
  document.body.appendChild(video);

  // add the capture video button
  document.body.appendChild(h('div', h('button', { onclick: captureVid }, 'capture')));
});
