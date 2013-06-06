({
	appDir: '../src',
	baseUrl: './',
    mainConfigFile: '../src/main.js',
	dir: '../dist',
	paths: {
		requireLib: 'vendors/requirejs/require'
	},
    optimizeCss: 'none',
    skipDirOptimize: true,
    preserveLicenseComments: false,
	modules: [
		// WARNING: Do not remove this entry, it will be required
		// by all your modules.
        {
            name: 'main',
            include: ['requireLib', 'main']
        },


        //
        // Add your different builds here.
        // Make sure you always exclude 'main', unless you want to have
        // one single big file with every bundle and dependency. This is
        // not recommended.
        //
        {
            name: 'home',
            exclude: ['main']
        }
    ]
})