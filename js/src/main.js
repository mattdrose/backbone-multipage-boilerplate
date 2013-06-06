/*
 * ------------------------------------
 * MAIN.JS
 * ------------------------------------
 */

/*
 * Configure all of your modules
 */
requirejs.config({
    paths: {
        'jquery': 'vendors/jquery/jquery',
        'underscore': 'vendors/underscore-amd/underscore',
        'backbone': 'vendors/backbone-amd/backbone'
    }
});

/*
 * Include all of your global modules, so the build (r.js) knows to concat them to this file
 *
 * These modules will be loaded on every page
 */
require(['jquery', 'underscore', 'backbone']);


/*
 * Global Javascript
 */
require(['jquery'], function($){

	//Get the page to load
	var page = $('#js-main').data('page');

	//Load the page
	require([page]);

});