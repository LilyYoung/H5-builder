var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
var relativePath = './';
var mainPath = './';

var paths = {
	scriptsrc: mainPath+'src/js/**',
	scsssrc:mainPath+'src/css/**/*.scss',
	csssrc:mainPath+'src/css/**/*.css',
	imgsrc:mainPath+'src/img/**/*',
    move:mainPath+'src/css',
    spitesrc:mainPath+'src/css/i/**',
	outputjs: mainPath+'build/js',
	outputcss: mainPath+'build/css',
	outimgsrc: mainPath+'build/img',
    rootpath:mainPath
};

var onOff = true;

// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 1. 找到文件
    gulp.src(paths.scriptsrc)
        .pipe(gulp.dest(paths.outputjs));
})

// 编译sass
// 在命令行输入 gulp sass 启动此任务{ style: 'expanded',sourcemap: true }
gulp.task('sass', function() {
    return gulp.src(paths.scsssrc)
    	.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4','Firefox < 20'],
            cascade: false
        }))
        //.pipe(sourcemaps.write(mainPath+'src/css'))
		.pipe(gulp.dest(paths.outputcss))
        .pipe(browserSync.reload({stream:true}));
});

// 在命令行使用 gulp css 启动此任务
gulp.task('css', function () {
    gulp.src(paths.csssrc)
       .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.outputcss));
});

// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    gulp.src(paths.imgsrc)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(paths.outimgsrc));
});
gulp.task('spite', function () {
    gulp.src(paths.spitesrc)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest(paths.outputcss+'/i'));
});
gulp.task('move', function () {
    gulp.src(paths.move+'/fonts/**')
        .pipe(gulp.dest(paths.outputcss+'/fonts'));
});

gulp.task('clean', function(cb){
    del([paths.rootpath+'/js/**',paths.rootpath+'/css/**',paths.rootpath+'/img/**'], cb);
  
});



// 在命令行使用 gulp auto 启动此任务
/*gulp.task('auto', function () {
    gulp.watch(paths.scsssrc, ['sass']);
    gulp.watch(paths.scriptsrc, ['script']);
    gulp.watch(paths.csssrc, ['css']);
    gulp.watch(paths.imgsrc, ['images']);
})

gulp.task('build', ['clean'], function(){
   gulp.start('script','sass','css','images');
});

gulp.task('default', ['script','sass','css','images','auto'])*/



gulp.task('serve', ['script','sass','move','spite','css','images'], function() {
    if(onOff) {
        browserSync.init({
            proxy: "127.0.0.1"
        });
    }else {
       browserSync.init({
            server: "./static"
        });
    }
    
    gulp.watch(paths.scsssrc, ['sass']);
    gulp.watch(paths.scriptsrc, ['script']);
    gulp.watch(paths.csssrc, ['css']);
    gulp.watch(paths.imgsrc, ['images']);
    //gulp.watch('./views/**.tpl', ['templates']);
   if(onOff) {
        //gulp.watch("./views/**").on('change', reload);
        gulp.watch(["./src/**","./views/**"]).on('change', reload);
   }else {
        gulp.watch('./static/*.html').on('change', reload)
   }
});

gulp.task('build', ['clean'], function(){
   gulp.start('script','sass','move','spite','css','images');
});

gulp.task('default', ['serve']);