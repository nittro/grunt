# grunt-nittro

> Nittro builder Grunt task

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-nittro --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-nittro');
```

## The "nittro" task

### Overview
In your project's Gruntfile, add a section named `nittro` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    nittro: {
        options: {
            vendor: {
                js: [
                    // libraries from other vendors, such as jQuery...
                ],
                css: [
                    // ... or Bootstrap3 etc.
                ]
            },
            
            // Nittro components to include. Note that dependencies are
            // added automatically, so if you ask for e.g. the "page"
            // component, the "core" and "ajax" packages will be added
            // automatically.
            base: {
                core: true,
                datetime: true,
                neon: true,
                di: true,
                forms: true, // note that including the forms component
                    // will automatically include the netteForms.js asset
                ajax: true,
                page: true,
                storage: true,
                routing: true
            },
            extras: {
                flashes: true,
                dialogs: true,
                confirm: true,
                dropzone: true,
                paginator: true
            },
            
            // other libraries to include after Nittro, e.g. your site's
            // proprietary libraries and styles
            libraries: {
                js: [
                
                ],
                css: [
                
                ]
            },
            bootstrap: true, // true = generated bootstrap, otherwise provide a path
            stack: true // include the _stack library
        },
        js: {
            dest: "dist/nittro-full.js"
        },
        css: {
            dest: "dist/nittro-full.less"
        }
    },
});
```
