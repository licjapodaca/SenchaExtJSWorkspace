Ext.define('MyFirstApp.view.vista.Panchito', {
	extend: 'Ext.panel.Panel',

	xtype: 'panchito',

	requires: [
		'MyFirstApp.view.vista.PanchitoController',
		'MyFirstApp.view.vista.PanchitoModel'
	],

	controller: 'panchito',
	viewModel: 'panchito',

	title: 'Panchito Pistolas',

	platformConfig: {
		desktop: {
			html: '<h1>Panel Classic</h1>'
		},
		'!desktop': {
			html: '<h1>Panel Modern</h1>'
		}
	}

});