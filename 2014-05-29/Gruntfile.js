module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    clean: {
        options: {
            force: true
        },
        chat: [
            "public/js/chat"
        ]
    },
    copy: {
        chat:{
            files: [
                {
                    src: "src/chat/index.html", 
                    dest: "public/index.html"
                },
                {
                    expand: true,
                    cwd: "src/chat/", 
                    src: ["**/*.js"], 
                    dest: "public/js/chat/"
                }
            ]
        }
    },
    jst: {
        chat: {
            options:{
                prettify: true,
                processName: function(longPath){
                    return longPath.substr(19);
                }
            },
            files:{
                "public/js/chat/templates.js": [
                    "src/chat/templates/**/*.html"
                ]
            }
        }
    },
    watch: {
        scripts: {
            files: [
                "src/chat/**/*"
            ],
            tasks: [
                "default"
            ],
            options: {
                spawn: false,
                debounceDelay: 50
            }
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jst");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask(
    "default", 
    [
        "clean:chat",
        "jst:chat",
        "copy:chat"
    ]);

};