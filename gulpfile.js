const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const polyfiller = require('gulp-polyfiller');
const watch = require('gulp-watch');
const htmlmin = require('gulp-htmlmin');
const imgmin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const jsminify = require('gulp-js-minify');
const gpminify = require("gulp-babel-minify");
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const merge = require('merge-stream');
const sassGlob = require('gulp-sass-glob');
const spritesmith = require('gulp.spritesmith-multi');
const del = require('del');
const concatCss = require('gulp-concat-css');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const Cache = require('gulp-file-cache');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const nodemon = require('gulp-nodemon');
const injectScss = require('gulp-inject-scss');
const path = require('path');
const globbing = require('gulp-css-globbing');
const bulkSass = require('gulp-sass-glob-import');
const px2rem = require('gulp-px-to-rem');
const strip = require('gulp-strip-comments');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const moduleImporter = require('sass-module-importer');
const newer = require("gulp-newer");
const rollup = require('gulp-better-rollup');

let node, cache = new Cache(),
  restart_called = false;
const obf = require('gulp-obfuscate');
const pkg = require(`./package.json`);
const server = require('gulp-express');
const lr = require('tiny-lr');
const gls = require('gulp-live-server');
const spawn = require('child_process').spawn;

// env
var env = require('./config');


// common
var {mode} = require(`${process.cwd()}/routes/common`);


console.log(`
/*=====================================
Env Mode :   ${env.mode}
======================================*/
`);

/**
 * Console Information
 */
function infoConsole() {
  console.log(`
/* 
=================================================================+
  Mode         : ${env.mode}
  Node version : ${process.version}
  PPID         : ${process.ppid}
  pid          : ${process.pid}
  platform     : ${process.platform}
  PORT         : ${env.port}
=================================================================+
*/
`);
}


// devDependencies에 있는 모든 플러그인을 $ 변수에 loading
const $ = require(`gulp-load-plugins`)({
  pattern: [`*`],
  scope: [`devDependencies`]
});

/**
 * Directories here
 */
const assets = {
  src: './public/src/assets',
  dist: './public/dist/assets',
  routes: './routes/**/*.js',
  app: "./app.js",
  clean: './public/dist/*'
}
const paths = {
  styles: {
    src: `${assets.src}/scss/**/*.{scss,css}`,
    dist: `${assets.dist}/css`,
    common_src: `${assets.src}/scss/common/**/*.{scss,css}`,
    common_dist: `${assets.dist}/css/common`,
  },
  js: {
    src: `${assets.src}/js/**/*.js`,
    dist: `${assets.dist}/js`,
    common_src: `${assets.src}/js/common/modules/**/*.js`,
    common_dist: `${assets.dist}/js/common`
  },
  ejs: {
    src: `./views/**/*.{ejs,html,htm}`,
    // dist: `${assets.dist}/ejs`
    dist: `./views/dist`
  },
  img: {
    src: `${assets.src}/img/**/*.{png,jpg,svg,jpeg,gif,ico}`,
    dist: `${assets.dist}/img`,
    sprite_src: `${assets.src}/img/img-sprites/**/*.{jpg,png,gif,svg}`
  },
  lib:{
    testsrc:`./lib/src/**/*.*`,
    testdist:`./lib/dist`,
    src:`${__dirname}/src/**/*.js`,
    dist:`${__dirname}/dist`,
  }
};

/**
 * Setting here
 */
const setting = {
  styles: {
    scss_option: {
      outputStyle: "compressed",
      indentType: "tab",
      indentWidth: 1,
      precision: 3,
      sourceComments: false,
      errLogToConsole: true,
      // importer: moduleImporter({ basedir: path.join(__dirname, 'public/src/assets/scss/') }) 
      includePaths: [paths.styles.src]
    },
    rootFontSize: 16
  },
  scripts: {
    gulp_babel_minify: {
      mangle: {
        keepClassName: false,
        booleans: false,
        deadcode: true,
        simplify: true,
        removeConsole: true,
        numericLiterals: true
      }
    }
  }
}


/**
 * Clean assets directory
 */
gulp.task('clean', () => del([assets.clean]));
/**
 * Clean Sprite
 */
gulp.task('clean-sprite-and-image',  ()=> del(`${assets.dist}/img/sprite`));
/**
 * Clean image
 */
gulp.task('clean-image', ()=>del(`${assets.dist}/img`));
/**
 * Clean Babel
 */
gulp.task('clean-babel', ()=>del(`${assets.dist}/js`));

/**
 * Ejs 
 */
gulp.task(`ejs`, () => {
  return gulp.src(paths.ejs)
})


/**
 * HTML minify
 */
gulp.task(`htmlmin`, () => {
  return gulp.src(SRC.HTML)
    .pipe(plumber())
    .pipe(cache.filter())
    .pipe(htmlmin().on('error', handleError))
    .pipe(cache.cache())
    .pipe(gulp.dest(DIST.HTML))
});

/**
 * =================================================================+
 * Title             : Styles
 * const scss        : Scss File Compile for Css File
 * const common_scss : Common Scss Concat Bundle.min.css
 * =================================================================+
 */
gulp.task(`styles`, () => {
  function styles_pipe(src) {
    if( mode('dev')){
      return src
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(plumber())
      .pipe(cache.filter())
      .pipe(sass(setting.styles.scss_option).on('error', sass.logError))
      // .pipe(cleanCSS({compatibility: `ie9`}))
      .pipe(autoprefixer('last 3 versions'))
      .pipe(cache.cache())

    }else if ( mode('prod')){
      return src
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(plumber())
      .pipe(cache.filter())
      .pipe(px2rem({rootPX: setting.styles.rootFontSize}))
      .pipe(sass(setting.styles.scss_option).on('error', sass.logError))
      .pipe(uglifycss())
      .pipe(cleanCSS({compatibility: `ie9`}))
      .pipe(autoprefixer('last 3 versions'))
      .pipe(cache.cache())
    }
  }

  const scss = styles_pipe(gulp.src([paths.styles.src, `!${paths.styles.common_src}`]))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(sourcemaps.write())

  const common_scss = styles_pipe(gulp.src(paths.styles.common_src))
    .pipe(concatCss('bundle.css'))
    .pipe(uglifycss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(paths.styles.common_dist))
    .pipe(sourcemaps.write())

    
  return merge(scss, common_scss)
});


/**
 * =================================================================+
 * Title           : Scripts
 * const js        : Script to Babel
 * const common_js : Common Javascript Concat Bundle.min.js
 * =================================================================+
 */
gulp.task(`scripts`, () => {
  function scripts_pipe(src) {
    if( mode('dev')){
      return src
      .pipe(plumber())
      .pipe(cache.filter())
      .pipe(babel().on('error', handleError))
      .pipe(rename({extname: '.min.js'}))
      .pipe(cache.cache())

    }else if ( mode('prod')){
      return src
      .pipe(plumber())
      .pipe(cache.filter())
      .pipe(babel().on('error', handleError))
      .pipe(strip())
      .pipe(uglify())
      .pipe(rename({extname: '.min.js'}))
      .pipe(cache.cache())
    }
  }
  const js = scripts_pipe(gulp.src([
    paths.js.src, 
    `!${paths.js.common_src}`, 
    `${assets.src}/js/common/main.js`,
    
  ]))
    .pipe(gulp.dest(paths.js.dist))

  const common_js = scripts_pipe(gulp.src(
    [paths.js.common_src,
    'node_modules/babel-polyfill/dist/polyfill.js',]
    ))
    .pipe(concat('bundle.js'))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(paths.js.common_dist))

  return merge(js, common_js)
});



/**
 * https://github.com/Polyfiller/polyfiller
 * Javascript Pollyfill
 */
gulp.task(`pollyfill`, () => {
  polyfiller
    .bundle([
      'Promise', 
      'Fetch', 
      'Array.from',
      'Array.prototype.find',
      'Array.prototype.findIndex',
      'Collections',
      'DOM4',
      // 'Element.prototype.dataset',
      // 'KeyboardEvent',
      "String.prototype.includes",
      "String.prototype.repeat",
      // "window.navigator.geolocation"
    ])
    .pipe(gpminify(setting.scripts.gulp_babel_minify))
    .pipe(gulp.dest(paths.js.dist));
});


/**
 * Image Compress
 */
gulp.task(`imgmin`, () => {
  return gulp.src([paths.img.src, `!${paths.img.sprite_src}`])
    .pipe(plumber())
    .pipe(newer(paths.img.dist))
    .pipe(imgmin())
    .pipe(gulp.dest(paths.img.dist))
});


/**
 * Auto Sprite
 */
gulp.task('auto-sprite', function () {
  const opts = {
    spritesmith: function (options, sprite, icons) {
      options.imgPath = `../img/sprite/${options.imgName}`;
      options.cssName = `_${sprite}-sprite.scss`;
      options.cssTemplate = null;
      options.cssSpritesheetName = sprite;
      options.padding = 10;
      options.cssVarMap = function (sp) {
        sp.name = `${sprite}-${sp.name}`;
      };
      return options;
    }
  };
  const spriteData = gulp.src(paths.img.sprite_src)
    .pipe(spritesmith(opts)).on('error', handleError);
  const imgStream = spriteData.img.pipe(gulp.dest(`${assets.dist}/img/sprite`));
  const cssStream = spriteData.css.pipe(gulp.dest(`${assets.src}/scss/vendors`));

  return merge(imgStream, cssStream);
});


/**
 * Sprite and SASS
 */
gulp.task('sprite-and-sass', function () {
  runSequence('clean-sprite-and-image', 'auto-sprite');
});


/**
 * Server Browser Sync
 * if modify port check gulp and www and config files
 * // 배포는  prod : 80, dev : 8080
 * // 배포는 npm scrips에서 바로 pm2로 배포함
 * // 로컬은  prod   : 81, dev : 8081
 * // 로컬 프록시는  8000
 */


gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: `http://localhost:${env.port}`,
    files: ["public/**/*.*"],
    // browser: "google chrome",
    port: 8000,
    tify: true,
    ghostMode: {
      scroll: false,
      clicks: false,
      location: false,
      forms: false
    }
  });
});


/**
 * Nodemon
 */
gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
      script: 'bin/www',
      // exec: 'babel-node  ./bin/www',
      env: {
        'NODE_ENV': process.env.process
      },
      ignore: [
        'gulpfile.js',
        'node_modules/'
      ]
    })
    .on('start', function () {
      if (!started) {
        cb();
        started = true;
      }
    })
    .on('crash', function () {
      console.error('Application has crashed!\n')
      stream.emit('restart', 5) // restart the server in 10 seconds
    })
    .on('exit', function () {
    if (!started) {
      console.log("KILLING NODEMON PROCESS ID:" + process.pid);
      process.kill(process.pid);
    }
    started = true;
  })
});


/**
 * Error Handler
 */
function handleError(err) {
  console.log(err);
  this.emit('end');
}


/**
 * lib-build FIXME: I need to try quite a bit.
 */
gulp.task('lib-build', () => {
  gulp.src(paths.lib.testsrc)
    // .pipe(sourcemaps.init())
    // note that UMD and IIFE format requires `name` but it will be inferred from the source file name `mylibrary.js`
    .pipe(rollup('es'))
    .pipe(rename({extname: '.tree.js'}))
    // save sourcemap as separate file (in the same folder)
    // .pipe(sourcemaps.write(''))
    .pipe(gulp.dest(paths.lib.testdist))
})


/**
 * Watch
 */
gulp.task(`watch`, () => {
  gulp.watch(paths.js.src, [`scripts`]);
  gulp.watch(paths.styles.src, [`styles`]);
  gulp.watch(paths.img.src, [`imgmin`]);
  gulp.watch(
    [
      `views/**/*.{ejs,pug,html}`,
      `routes/**/*.js`,
      `app.js`
      
    ],
    reload);

  // gulp.watch(`${paths.img.sprite_src}, [`sprite-and-sass`]);
  // gulp.watch(`${assets.src}/js/**/*.js`, [`babel-and-babel-common`]);
});


/**
 * =================================================================+
 * @ gulp tasks process
 * =================================================================+
 */
const process_default = [
  `imgmin`,
  `sprite-and-sass`,
  `pollyfill`,
  `scripts`,
  `styles`,
  `browser-sync`,
  `watch`
];

/**
 * npm i , gulp build pm2 restart
 */

const build_dist_dev = [
  `imgmin`,
  `sprite-and-sass`,
  `pollyfill`,
  `scripts`,
  `styles`,
];
const build_dist_prod = [
  `imgmin`,
  `sprite-and-sass`,
  `pollyfill`,
  `scripts`,
  `styles`,
];


infoConsole();
if( mode('dev')){
  gulp.task(`default`,process_default, () => {
    console.log('Gulp is running: Development!');
    infoConsole();
  });
}else if (mode('prod')){
  gulp.task(`default`,build_dist_prod, () => {
    console.log('Gulp is running: Production !');
    infoConsole();
  });
}

// FIXME: 수정핊요
gulp.task('build-dev',build_dist_dev,()=>{
  // ... dist 폴더만 만들어주는 테스크.
  console.log('Build Development!');
  infoConsole();
})

// FIXME: 수정핊요
gulp.task('build-prod',build_dist_prod,()=>{
  // ... dist 폴더만 만들어주는 테스크.
  console.log('Build Production!');
  infoConsole();
})

/**
 * // FIXME: 수정핊요
 * developemnt용 개발, development mode build watch
 */
gulp.task('dev',process_default,()=>{
  console.log('Gulp is running: Development!');

  infoConsole();
})

/**
 * // FIXME: 수정핊요
 * production용 개발, production build watch
 */
gulp.task('prod',process_default,()=>{
  console.log('Gulp is running: Production !');
  infoConsole();
})


/**
 * // FIXME: 수정핊요
 * node pid kill
 */
gulp.task('kill',['nodemon'],()=>{
  console.log('Gulp NODE PROCESS KILL!!!!!');
  infoConsole();
})
