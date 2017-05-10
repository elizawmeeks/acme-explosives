module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../js/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"Data":true}, //name value pairs, allows to define global vars used in many files.
        ignores: ["../js/materialize.js", "../js/jquery.js"]
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/main.css': '../scss/main.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'], 
        tasks: ['jshint']
      },
      sass: {
        files: ['../scss/main.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};