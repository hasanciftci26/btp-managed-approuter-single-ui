/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ndbstraining/html5-ui3/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
