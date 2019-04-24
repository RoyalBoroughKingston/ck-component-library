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
  .buildHtml({
    inject: false,
  })
  // .buildHtml({
  //   inject: false,
  //   htmlRoot: "./src/homepage.html",
  //   output: "./homepage.html",
  // })
   .buildHtml({
    inject: false,
    htmlRoot: "./src/service.html",
    output: "./service.html",
  })
  .browserSync({
    proxy: false,
    server: { baseDir: "dist" },
    files: ["dist/**/*"],
  });
