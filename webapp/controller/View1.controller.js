sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        sap.ui.getCore().getConfiguration().setLanguage("ko-KR");

        return Controller.extend("dmsreuseui5.controller.View1", {
            onInit: function () {

            }
        });
    });
