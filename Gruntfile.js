'use strict';

module.exports = function(grunt) {

	var GruntConfig = {
		clean: ['build/*'],
		uglify: {
			options: {
				mangle: false,
				compress: true,
				warnings: false,
				preserveComments: 'all',
			},
			release: {
				files: {
					'build/js/app.js': ['src/js/app.js'],
				}
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*', '!.sass-cache/*', '!sass', '!sass/**', '!js/**', '!js_src/**'],
					dest: 'build/',
					nonull: true
				}, {
					expand: true,
					cwd: 'src/js/',
					src: ['*.js'],
					dest: 'build/js/',
					filter: 'isFile',
					nonull: true
				}]
			},

		},
		autoprefixer: {
			options: {
				browsers: ['last 3 versions', 'ie 9'],
				safe: true
			},
			multiple_files: {
					expand: true,
					flatten: true,
					src: 'src/css/*.css',
					dest: 'src/css/'
			}
		},

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed',
				sourceComments: false
			},
			dist: {
				files: {
					'src/css/styles.css': 'src/sass/styles.scss',
					'build/css/styles.css': 'src/sass/styles.scss'
				}
			}
		},
		concat: {
			options: {
				seperator: ";"
			},
			dev: {
				src: ['src/js_src/_*.js', 'src/js_src/app.js'],
				dest: 'src/js/app.js',
				nonull: true,
			},
			release: {
				src: ['src/js_src/_*.js', 'src/js_src/app.js'],
				dest: 'build/js/app.js',
				nonull: true,
			},
		},
		watch: {
			options: {
				cwd: 'src/'
			},
			tasks: {
				files: ['tasks/tasks.list'],
				tasks: ['handletasks'],
				options: {
					cwd: "server/",
					spawn: true,
					interrupt: true
				}
			},
			js: {
				files: ['js_src/*.js'],
				tasks: ['concat:dev'],
				options: {
					spawn: true,
					interrupt: true
				}
			},
			sass: {
				files: ['sass/**.scss', 'sass/**/*.scss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					spawn: true,
					interrupt: true
				}
			},
		},
		googlefonts: {
			build: {
				options: {
					fontPath: 'src/assets/fonts/',
					cssFile: 'src/css/googlefonts.css',
					formats: {
						eot: true,
						woff: true,
						svg: true
					},
					fonts: [
						
						{
							family: 'Chivo',
							styles: [
								400
							]
						},
						{
							family: 'Overpass',
							styles: [
								300, 400, 700
							]
						}
					]
				}
			}
		}

	};



	grunt.initConfig(GruntConfig);

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-google-fonts');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');

	//tasks

	grunt.registerTask('build:dev', [ 'googlefonts', 'clean', 'autoprefixer', 'copy', 'concat:dev']);
	grunt.registerTask('build:release', ['clean', 'copy', 'concat:dev', 'uglify:release']);
	grunt.registerTask('build', ['build:dev']);
	grunt.registerTask('default', ['watch']);
};
