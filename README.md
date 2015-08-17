# Task-Sass

Compiles and watches all Scss-files.

``npm install --save task-sass``


## Configurations

##### rootFile

The index file of you project.


##### output

Glop for the destination of the bundle.css file.

##### watch

Glop for watcher.

##### prefix

This is optional and will add browser flags for your css (-webkit- etc.).
Change this to any value that works with [autoprefixer](https://github.com/postcss/autoprefixer).


*Example:*

```
require("task-sass")(gulp, {
  rootFile: './style/bundle.sass',
  output: dest + 'css/',
  watch: './style/**/*.sass'
})
```

*Example for optional parameter:*

```
require("task-sass")(gulp, {
  ...
  // optional (last 2 is the default, I will make the autoprefixer completely optional for those who like mixins more)
  prefix: ['last 2 versions'],
  ...
})
```
