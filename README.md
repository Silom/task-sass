# Task-Sass

Compiles and watches all Scss-files.


## Configurations

##### rootFile

The index file of you project.


##### output

Glop for the destination of the bundle.css file.

##### watch

Glop for watcher.


*Example:*

```
{
  rootFile: './styles/bundle.scss',
  output: dest + 'css/',
  watch: sources.scss /* ./styles/**/*.scss */
}
```


## Dependencies

- gulp-plumber
- gulp-watch
- gulp-sass
- gulp-autoprefixer

Either install dependencies within this task, or type ``npm install --save-dev [dependencies]``.
