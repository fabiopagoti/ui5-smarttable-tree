function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZHD_C_TREE_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}