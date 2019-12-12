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
- ``url``
  - 类型：String
  - 默认：无，该参数是必须（没有将会报错）
  - 描述：为阿里图标中 - 我的图标项目 - 中获取的css代码url

- ``isDev``
  - 类型：String，
  - 默认：``true``
  - 描述：当前是否为开发模式

- ``fontPath``
  - 类型：String
  - 默认：``'./iconfont/iconfont'``
  - 描述：下载的字体图标文件保存路径，只有在 ``isDev`` 为false，也就是生产环境才有效

- ``iconPrefix``
  - 类型：String
  - 默认：与源文件保持一致 ``.icon-``
  - 描述：字体图标统一前缀，如设置为 ``{ iconPrefix: '.cu-icon-' }``,则图标调用为：``<i class="iconfont cu-icon-XXX"></i>``

- ``keepIconFontStyle``
  - 类型：Boolean
  - 默认：undefined，即未开启，不保留
  - 描述：是否保留css源文件中的 ``.iconfont{/*...*/}`` 中的样式，该属性多用于与vant等类似已有自己字体图标相关初始设置的组件库配合使用，如您没有与类似组件使用，建议开启或自定义一个，否则您的图标将不会有初始样式

- ``fontExt``
  - 类型：Array
  - 默认：['.eot', '.ttf', '.svg', '.woff', '.woff2'] ，即全部下载
  - 描述：需要下载的字体图标格式扩展名，只有在 ``isDev`` 为false时有效

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
  src: url('./iconfont/iconfont.eot?t=xxx');
  src: url('./iconfont/iconfont.eot?t=xxx#iefix') format('embedded-opentype'),
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgA...') format('woff2'),
  url('./iconfont/iconfont.woff?t=xxx') format('woff'),
  url('./iconfont/iconfont.ttf?t=xxx') format('truetype'),
  url('./iconfont/iconfont.svg?t=xxx#iconfont') format('svg');
}
.cu-icon-waimai1:before {
  content: "\e6c3";
}
```
