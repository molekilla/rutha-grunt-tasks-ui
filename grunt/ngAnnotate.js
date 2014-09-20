module.exports = {
	options: {
		add: true,
		remove: true,
		singleQuotes: true,
		ngAnnotateOptions: {}
	},
	'all': {
		files: {
			'<%= cwd %>/dist/app.js': ['<%= cwd %>/dist/app.js']
		}
	}
};