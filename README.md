# snapvid

Given a `<video>` element that, snapvid will take a snapshot of the
currently displayed frame and provide a base64 data uri.


[![NPM](https://nodei.co/npm/snapvid.png)](https://nodei.co/npm/snapvid/)



## Example Usage

```js
var snapvid = require('snapvid');
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

```

## Reference

### `snapvid(video, opts?) => string`

Valid options:

- mimeType (default: 'image/jpeg')
- quality (no default)

## License(s)

### ISC

Copyright (c) 2015, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
