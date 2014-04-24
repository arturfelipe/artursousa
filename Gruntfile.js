
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
            livereload: {
                options: {
                    livereload: true
                },
                files: ['*.html', 'css/*.css', 'js/*.js']
            },
            css: {
                files: ['sass/*.scss'],
                tasks: ['compass']
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('serve', ['connect', 'watch']);
};
