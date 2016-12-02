# DelaneyMethod Project Template

[![dependencies Status](https://david-dm.org/zurb/foundation-zurb-template/status.svg)](https://david-dm.org/zurb/foundation-zurb-template)

**Please open all issues with this template on the main [DelaneyMethod](https://github.com/delaneymethod/delaneymethod/issues) repo.**

This is the official DelaneyMethod Project Template. 

We use this template at DelaneyMethod to deliver static code for our main website. 

It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript Concatenation with ES6 (Babel) Standards
- Linting
- BrowserSync
- Materialize
- jQuery
- CraftCMS Content Management System
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/delaneymethod/delaneymethod.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your static site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
