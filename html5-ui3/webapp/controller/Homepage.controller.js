sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ndbs.training.html5ui3.controller.Homepage", {
            onInit: function () {

            },
            onAfterRendering: function () {
                //Standard request
                //App id'yi SAPUI5 library'si otomatik olarak ekler.
                this.getView().getModel().read("/Customers", {
                    filters: null,
                    sorters: null,
                    async: true,
                    success: (oData) => {
                        let aResult = oData.results;
                    },
                    error: (error) => {
                        let sMessage = error.message;
                    }
                });

                //jQuery Ajax request
                /*
                    Managed approuter'da destination configleri yalnızca html5 modülünün xs-app.json dosyasında yapılabilir.
                    App id kısmı aşağıdaki gibi windowdan okunabilir.
                    Bu app id bir composite keydir ve aşağıdaki bölümlerden oluşur.
                    1) sap.cloud.service tarafından oluşturulan UUID
                    2) Managed approuter oluştururken belirlediğimiz sap.cloud.service ismi
                    3) App id (manifestteki id'nin noktasız hali)
                    4) Manifest app version
                    Birleşimi ise aşağıdaki gibidir (Rakamlar yukarıdaki maddeleri işaret eder)
                    1.2.3-4
                */
                $.ajax({
                    url: window.location.pathname.split("/index.html")[0] + "/v2/Northwind/Northwind.svc/Employees?$format=json",
                    method: "GET",
                    async: true,
                    success: (oData) => {
                        let aResult = oData.d.results;
                    },
                    error: (error) => {
                        let sMessage = error.message;
                    }
                });
            }
        });
    });
