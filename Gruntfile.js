grunt.initConfig({
  eslint: {
    src: ['**.js'],
  },
});

grunt.loadNpmTasks('grunt-contrib-eslint');

grunt.registerTask('default', ['eslint']);
