
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
              options: {
                port: 9001
              }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: ['*.html']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', ['connect', 'watch']);
};
