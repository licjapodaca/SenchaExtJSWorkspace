/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MySecondApp.Application',

    name: 'MySecondApp',

    requires: [
        // This will automatically load all classes in the MySecondApp namespace
        // so that application classes do not need to require each other.
        'MySecondApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MySecondApp.view.main.Main'
});
