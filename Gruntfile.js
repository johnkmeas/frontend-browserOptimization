module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
  uglify: {
    js: {
      src: ['views/js/main.js'],
      dest: 'dist/main.min.js',
    },
  },
  cssmin: {
    css: {
      src: ['views/css/bootstrap-grid.css'],
      dest: 'dist/bootstrap-grid.min.css',
    },
  },
  watch: {
    js: {
      // js/**/*.js means any file ending in js and inside js folder
      files: ['js/**/*.js'],
      tasks: ['uglify:js'],
    },
    css: {
      files: ['css/**/*.css'],
      tasks: ['cssmin:css'],
    },
  },
});


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // run grunt default
  grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
};


// Concat
// npm install grunt-contrib-concat --save-dev
// grunt.loadNpmTasks('grunt-contrib-concat');

// Uglify
// npm install grunt-contrib-uglify --save-dev
// grunt.loadNpmTasks('grunt-contrib-uglify');

// cssmin
// npm install grunt-contrib-cssmin --save-dev
// grunt.loadNpmTasks('grunt-contrib-cssmin');

// watch
// npm install grunt-contrib-watch --save-dev
// grunt.loadNpmTasks('grunt-contrib-watch');
