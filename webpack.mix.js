let mix = require("laravel-mix");

require("mix-html-builder");
require("laravel-mix-purgecss");

mix
  .js("src/js/app.js", "dist")
  .sass("src/scss/style.scss", "dist/style.css")
  .options({
    autoprefixer: {
      options: {
        browsers: ["last 6 versions"],
      },
    },
  })
  .purgeCss({
    folders: ["src"],
  })
  .setPublicPath("dist")
  .copy("src/assets", "dist/assets")
  .copy("*.html", "dist/")
  .buildHtml({ inject: false })
  .browserSync({
    proxy: false,
    server: { baseDir: "dist" },
    files: ["dist/**/*"],
  });
