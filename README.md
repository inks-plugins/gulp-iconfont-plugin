# gulp-qc-iconfont

gulp-qc-iconfont是一个[gulp](https://github.com/wearefractal/gulp)插件，可以轻松地帮你将[阿里icon](https://www.iconfont.cn/)的图标项目下载至本地。

## Install
```
$ npm install gulp-qc-iconfont
```

## Usage

```
var gulp = require('gulp');
var gulpQcIconFont = require('gulp-qc-iconfont');

gulp.task('default', () => {
  gulpQcIconFont({
    url: '//at.alicdn.com/t/font_xxxxxxx_xxxxxx.css',
    isDev: true,
    fontPath: './iconfont/iconfont',
    iconPrefix: '.cu-icon-',
    keepIconFontStyle: false,
    fontExt: ['.eot', '.ttf', '.svg', '.woff', '.woff2']
  }).pipe(gulp.dest('./dist/'))
});
```

### Options
| 参数 | 类型 | 描述 |
-|-|-
|``url``| String | 必须，阿里我的图标项目中获取的css代码url |
|``isDev``| Boolean | 可选，默认为 ``true`` ，是否开发环境
|``fontPath``| String | 可选，默认为 ``'./iconfont/iconfont'`` ,字体图标保存路径，只有在 ``isDev`` 为false时有效
|``iconPrefix``| String | 可选，默认与源文件保持一致，字体图标统一前缀，如设置为'.cu-icon-',则图标调用为：``<i class="cu-icon-XXX"></i>``
|``keepIconFontStyle``| Boolean | 可选，保留css源文件中的 ``.iconfont{/*...*/}`` 中的样式
|``fontExt``| Array | 可选，默认全部下载，需要下载的字体图标格式扩展名，只有在 ``isDev`` 为false时有效

## 开发模式下：
> 将自动获取css源文件保存至指定位置，如定义 ``iconPrefix`` ，则会自动批量替换源文件的前缀 ``.icon-`` 为设定的前缀。
### Gulpfile
```
var gulp = require('gulp');
var gulpQcIconFont = require('gulp-qc-iconfont');

gulp.task('default', () => {
  gulpQcIconFont({
    url: '//at.alicdn.com/t/font_xxxxxxx_xxxxxx.css'
  }).pipe(gulp.dest('./dist/'))
});
```

### Output:
将在 ``dist`` 文件夹下输出 ``iconfont.css`` 文件，生成结构如下：
```
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_xxxxxxx_xxxxxx.eot?t=xxx');
  src: url('//at.alicdn.com/t/font_xxxxxxx_xxxxxx.eot?t=xxx#iefix') format('embedded-opentype'),
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgA...') format('woff2'),
  url('//at.alicdn.com/t/font_xxxxxxx_xxxxxx.woff?t=xxx') format('woff'),
  url('//at.alicdn.com/t/font_xxxxxxx_xxxxxx.ttf?t=xxx') format('truetype'),
  url('//at.alicdn.com/t/font_xxxxxxx_xxxxxx.svg?t=xxx#iconfont') format('svg');
}
.icon-waimai1:before {
  content: "\e6c3";
}
```

## 非开发模式下：
> 将自动获取css源文件保存至指定位置，并将图标引用路径自动更改为``fontPath``本地路径，如定义``iconPrefix``，则会自动批量替换源文件的前缀``.icon-``为设定的前缀。

> 将自动获取字体图标需要的文件保存至指定位置下的``fontPath``路径中

### Gulpfile
```
gulpQcIconFont({
  url: '//at.alicdn.com/t/font_xxxxxxx_xxxxxx.css',
  isDev: false,
  iconPrefix: '.cu-icon-'
}).pipe(gulp.dest('./dist/'))
```

### Output:
将在``dist``文件夹下输出如下文件：
```
- dist
  - iconfont
    - iconfont.eot
    - iconfont.ttf
    - iconfont.svg
    - iconfont.woff
    - iconfont.woff2
  - iconfont.css
```

``iconfont.css`` 生成结构如下：
```
@font-face {font-family: "iconfont";
  src: url('./iconfont/iconfont.eot?t=xxx'); /* IE9 */
  src: url('./iconfont/iconfont.eot?t=xxx#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgA...') format('woff2'),
  url('./iconfont/iconfont.woff?t=xxx') format('woff'),
  url('./iconfont/iconfont.ttf?t=xxx') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont/iconfont.svg?t=xxx#iconfont') format('svg'); /* iOS 4.1- */
}
.cu-icon-waimai1:before {
  content: "\e6c3";
}
```
