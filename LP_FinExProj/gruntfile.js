


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/*.js'],
        dest: 'javascript.main.js',
      },
    },

      sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '',
          src: ['style.sass'],
          dest: '',
          ext: 'style.css'
        }]
      }
    },
    watch: {
    sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['styles/*.sass'],
      tasks: ['sass'],
    }

  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['concat', 'sass']);

};
