'use strict';

import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import yargs from 'yargs';
import browser from 'browser-sync';
import panini from 'panini';
import yaml from 'js-yaml';
import fs from 'fs';
import rimraf from 'rimraf';

// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
	let ymlFile = fs.readFileSync('config.yml', 'utf8');

	return yaml.load(ymlFile);
}

// Start a server with BrowserSync to preview the site
function server(done) {
	browser.init({
		server: PATHS.dist,
		port: PORT,
		browser: 'google chrome',
		notify: false
	});

	done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch(done) {
	gulp.watch(PATHS.assets, copy);
	gulp.watch(PATHS.src + '/assets/scss/**/*.scss').on('all', gulp.series(styles, reload));
	gulp.watch(PATHS.src + '/pages/**/*.html').on('all', gulp.series(pages, reload));
	gulp.watch(PATHS.src + '/{layouts,partials}/**/*.html').on('all', gulp.series(refresh, pages, reload));
	gulp.watch(PATHS.src + '/assets/js/**/*.js').on('all', gulp.series(scripts, reload));
	gulp.watch(PATHS.src + '/assets/img/**/*').on('all', gulp.series(images, reload));

	done();
}

// Delete the "dist" folder every time a build starts
function reset(done) {
	rimraf(PATHS.dist, done);
}

// Copy page templates into finished HTML files
function pages() {
	return gulp
		.src(PATHS.src + '/pages/**/*.{html,hbs,handlebars}')
		.pipe(panini({
			root: PATHS.src + '/pages/',
			layouts: PATHS.src + '/layouts/',
			partials: PATHS.src + '/partials/',
			data: PATHS.src + '/data/',
			helpers: PATHS.src + '/helpers/'
		}))
		.pipe(gulp.dest(PATHS.dist));
}

// Copy images to the "dist" folder - compressed in production
function images() {
	return gulp
		.src(PATHS.src + '/assets/img/**/*')
		.pipe($.if(PRODUCTION, $.imagemin({
			progressive: true
		})))
		.pipe(gulp.dest(PATHS.dist + '/assets/img'));
}

// Copy fonts to the "dist" folder
function fonts() {
	return gulp
		.src(PATHS.fonts)
		.pipe(gulp.dest(PATHS.dist + '/assets/fonts'));
}

// Run eslint on all the source files
function linting() {
	return gulp
		.src([PATHS.src + '/**/*.js'])
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.eslint.failAfterError());
}

// Combine JavaScript into one file - minified in production
function scripts() {
	const jsES6 = $.filter(PATHS.javascriptES6, { restore: true });

	return gulp
		.src(PATHS.javascriptES6.concat(PATHS.javascriptES5))
		.pipe(jsES6)
		.pipe($.babel())
		.pipe(jsES6.restore)
		.pipe($.sourcemaps.init())
		.pipe($.concat('app.js'))
		.pipe($.if(PRODUCTION, $.uglify()))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe(gulp.dest(PATHS.dist + '/assets/js'));
}

// Compile Sass, LESS and CSS into CSS - compressed in production
function styles() {
	return gulp
		.src(PATHS.src + '/assets/scss/app.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			includePaths: PATHS.sass
		})
		.on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: COMPATIBILITY
		}))
		.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
		.pipe($.if(PRODUCTION, $.cssnano()))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe(gulp.dest(PATHS.dist + '/assets/css'))
		.pipe(browser.reload({ stream: true }));
}

// Copy files out of the "assets" folder - This task skips over the "img", "js", and "scss" folders
function copy() {
	return gulp
		.src(PATHS.assets)
		.pipe(gulp.dest(PATHS.dist + '/assets'));
}

// Deletes "assets/scss" folder
function cleanup(done) {
	rimraf(PATHS.dist + '/assets/scss', done);
}

// Reload the browser with BrowserSync
function reload(done) {
	browser.reload();

	done();
}

// Load updated HTML templates and partials into Panini
function refresh(done) {
	panini.refresh();

	done();
}

// CommonJS `exports` module notation to declare tasks
exports.server = server;
exports.watch = watch;
exports.reset = reset;
exports.pages = pages;
exports.images = images;
exports.fonts = fonts;
exports.linting = linting;
exports.scripts = scripts;
exports.styles = styles;
exports.copy = copy;
exports.cleanup = cleanup;
exports.reload = reload;
exports.refresh = refresh;

// Build the "dist" folder by running all of the below tasks
gulp.task('build', gulp.series(reset, gulp.parallel(pages, images, fonts, linting, scripts, styles, copy), cleanup));

// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.series('build', server, watch));
