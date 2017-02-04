'use strict';

const path = require('path');
const fs = require('fs');
const showdown = require('showdown');


module.exports = function (grunt, options) {

	const htmlTemplatePath = path.resolve(__dirname, 'md-to-html', 'template.html');
	const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf-8');
	const extractOptionsRegex = /^\{\{(\{[\s\S]+?})}}/i;

	showdown.setFlavor('github');
	const mdToHtmlConverter = new showdown.Converter({
		simplifiedAutoLink: true,
		excludeTrailingPunctuationFromURLs: true
	});


	return {
		lib: {
			expand: true,
			cwd: path.resolve(__dirname, '..', 'source'),
			src: ['lib/**/*', '!**/*.md'],
			dest: path.resolve(__dirname, '..', 'dist')
		},
		examples: {
			expand: true,
			cwd: path.resolve(__dirname, '..', 'source'),
			src: ['examples/**/*', '!**/*.md'],
			dest: path.resolve(__dirname, '..', 'dist')
		},
		slides: {
			expand: true,
			cwd: path.resolve(__dirname, '..', 'source'),
			src: ['slides/**/*', '!**/*.md'],
			dest: path.resolve(__dirname, '..', 'dist')
		},
		root: {
			expand: true,
			cwd: path.resolve(__dirname, '..', 'source'),
			src: ['*', '!**/*.md'],
			dest: path.resolve(__dirname, '..', 'dist'),
			filter: 'isFile'
		},
		markdown: {
			expand: true,
			cwd: path.resolve(__dirname, '..', 'source', 'pages'),
			src: ['**/*.md'],
			dest: path.resolve(__dirname, '..', 'dist'),
			options: {
				process: function (content, srcpath) {
					const optionsMatch = content.match(extractOptionsRegex);
					let opts = {
						title: path.parse(srcpath).name
					};
					let mdSource = content.trim();
					if (optionsMatch) {
						const matched = optionsMatch[0];
						const json = optionsMatch[1];
						try {
							const parsed = JSON.parse(json);
							opts = Object.assign(opts, parsed);
						} catch (e) {
							grunt.log.warn(`Опции в начале шаблона ${srcpath} должны представлять собой валидный JSON`);
						}
						mdSource = mdSource.slice(matched.length).trim();
					}
					const html = mdToHtmlConverter.makeHtml(mdSource);
					return htmlTemplate
						.replace('{{{__TITLE__}}}', opts.title)
						.replace('{{{__CONTENT__}}}', html);
				}
			},
			rename: function (dest, src) {
				return path.resolve(dest, src.replace(/\.md$/i, '.html'));
			}
		}
	};
};
