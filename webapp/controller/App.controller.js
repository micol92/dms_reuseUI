sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
      sap.ui.getCore().getConfiguration().setLanguage("ko-KR");

      return BaseController.extend("dmsreuseui5.controller.App", {
        onInit: function() {
        }
      });
    }
  );
  