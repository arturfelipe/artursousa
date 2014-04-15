'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                },
                files: {
                    'assets/css/main.css':'app/css/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
};
