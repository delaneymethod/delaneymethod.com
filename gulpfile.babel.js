'use strict';

import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import yargs from 'yargs';
import browser from 'browser-sync';
import panini from 'panini';
import yaml from 'js-yaml';
import fs from 'fs';
import del from 'del';

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
	gulp.watch(PATHS.src + '/assets/scss/**/*.scss').on('all', gulp.series(styles, reload));
	gulp.watch(PATHS.src + '/pages/**/*.html').on('all', gulp.series(pages, reload));
	gulp.watch(PATHS.src + '/{layouts,partials}/**/*.html').on('all', gulp.series(refresh, pages, reload));
	gulp.watch(PATHS.src + '/assets/js/**/*.js').on('all', gulp.series(scripts, reload));
	gulp.watch(PATHS.src + '/assets/img/**/*').on('all', gulp.series(images, reload));

	done();
}

// Delete the "html/assets" and "static" folders every time a build starts
function reset() {
	return del([
		PATHS.dist + '/**/*.html',
		PATHS.dist + '/assets'
	]);
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

// Copy images to the "html" folder - compressed in production
function images() {
	return gulp
		.src(PATHS.src + '/assets/img/**/*')
		.pipe($.if(PRODUCTION, $.imagemin({
			progressive: true
		})))
		.pipe(gulp.dest(PATHS.dist + '/assets/img'));
}

// Copy fonts to the "html" folder
function fonts() {
	return gulp
		.src(PATHS.fonts)
		.pipe(gulp.dest(PATHS.dist + '/assets/fonts'));
}

// Run eslint on all the source files
function linting() {
	return gulp
		.src([PATHS.src + '/assets/js/app.js'])
		.pipe($.eslint({
			fix: true
		}))
		.pipe($.eslint.format())
		.pipe($.eslint.failAfterError());
}

// Combine JavaScript into one file - minified in production
function scripts() {
	const jsES6 = $.filter(PATHS.javascriptES6, { restore: true });

	return gulp
		.src(PATHS.javascriptES6.concat(PATHS.javascriptES5))
		.pipe(jsES6)
		.pipe($.babel({presets: ['es2015']}))
		.pipe(jsES6.restore)
		.pipe($.if(!PRODUCTION, $.sourcemaps.init()))
		.pipe($.concat('app.js'))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe(gulp.dest(PATHS.dist + '/assets/js'));
}

// Compile Sass, LESS and CSS into CSS - compressed in production
function styles() {
	return gulp
		.src(PATHS.src + '/assets/scss/app.scss')
		.pipe($.if(!PRODUCTION, $.sourcemaps.init()))
		.pipe($.sass({
			includePaths: PATHS.sass
		}).on('error', $.util.log))
		.pipe($.autoprefixer({
			browsers: COMPATIBILITY
		}))
		.pipe($.if(!PRODUCTION, $.sourcemaps.write()))
		.pipe(gulp.dest(PATHS.dist + '/assets/css'))
		.pipe(browser.reload({ stream: true }));
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
exports.reload = reload;
exports.refresh = refresh;

// Build the "static" and "html/assets" folders by running all of the below tasks
gulp.task('build', gulp.series(reset, gulp.parallel(pages, images, fonts, linting, scripts, styles)));

// Build the site, run the server, and watch for file changes
gulp.task('default', gulp.series('build', server, watch));
