/*
 * ------------------------------------
 * HOME.JS
 * ------------------------------------
 */

require(['jquery', 'modules/user'], function ($, User) {

    // Give the page a namespace for readability
    var HOME = {};


    /*
     * ------------------------
     * Display Users
     * ------------------------
     */
    HOME.users = new User.Collection([
        {
            name: "Matt"
        },
        {
            name: "Tim"
        },
        {
            name: "Ryan"
        },
        {
            name: "Elijah"
        }
    ]);

    $(document.body).append(
        new User.Views.Collection({ collection: HOME.users }).render().el
    );

});