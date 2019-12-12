const through = require('through');
const request = require('request')
const gulpUtil = require('gulp-util');
const PluginError = gulpUtil.PluginError;

const PLUGIN_NAME = 'gulp-qc-iconfont';

function gulpQcIconfont(options) {
  options = options || {};
  if (!options.url) throw new PluginError(PLUGIN_NAME, 'Missing options url!')
  const URL = options.url
  const URL_PREFIX = URL.replace('.css', '')
  const IS_DEV = typeof options.isDev === 'boolean' ? options.isDev : true
  const FONT_PATH = options.fontPath || './iconfont/iconfont'
  const FONT_EXT_LIST = options.fontExt || ['.eot', '.ttf', '.svg', '.woff', '.woff2'];
  const ICON_PREFIX = options.iconPrefix
  const KEEP_ICON_FONT_STYLE = options.keepIconFontStyle

  var stream = through(function (file, enc, cb) {
    this.push(file);
    cb();
  });

  var downloadFont = function (index) {
    const EXT = FONT_EXT_LIST[index]
    request('http:' + URL_PREFIX + EXT, (err, res, body) => {
      const ICON_FILE = new gulpUtil.File({
        path: FONT_PATH + EXT,
        contents: Buffer.from(body)
      });
      stream.queue(ICON_FILE);
      if (index === FONT_EXT_LIST.length - 1) {
        stream.emit('end')
      } else {
        index++
        downloadFont(index)
      }
    }), {
      throttle: 1000,
      delay: 1000
    }
  }

  request({
    url: 'http:' + URL,
    encoding: 'binary'
  }, (err, res, body) => {
    let rawData = body
    if (!IS_DEV) rawData = rawData.replace(new RegExp(URL_PREFIX, 'g'), FONT_PATH)
    var result = '/* 字体图标，来源路径："' + URL + '"*/ \r\n';
    var delUnnecessary = rawData.replace(/\.iconfont[\s\S]*?\}/, '');
    var iconCss = delUnnecessary.match(/\.icon\-[\s\S]*?\}/g);
    var handlerData = KEEP_ICON_FONT_STYLE ? rawData : delUnnecessary
    result += handlerData.replace(/\.icon\-[\s\S]*?\}/g, '');
    for (var i in iconCss) {
      var item = iconCss[i];
      if (ICON_PREFIX) item = item.replace(/\.icon\-/, ICON_PREFIX);
      result += item + '\r\n';
    }
    result = result.replace(/\r{2,}/g, '\r');
    result = result.replace(/\n{2,}/g, '\n');

    const CSS_FILE = new gulpUtil.File({
      path: 'iconfont.css',
      contents: Buffer.from(result)
    });
    stream.queue(CSS_FILE);

    (!IS_DEV && FONT_EXT_LIST && FONT_EXT_LIST.length > 0) ? downloadFont(0): stream.emit('end')
  }, {
    throttle: 1000,
    delay: 1000
  })
  return stream;
}
module.exports = gulpQcIconfont
