sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function (Controller, Filter) {
	"use strict";

	return Controller.extend("ovly.hanadeveloper.tree.controller.View1", {
		onInit: function () {
			return;
			// var oDataModel = this.getView().getModel();
			// oDataModel.metadataLoaded().then(function () {

			// 	var sPath = oDataModel.createKey("ZHD_C_TREE", {
			// 		p_root: "0a76e4ce-c32a-1ed9-97d9-3b371a185f40",
			// 		p_date: new Date()
			// 	});
			// 	var sFullPath = "/" + sPath + "/Set";
			// 	console.log(sFullPath);
			// 	this.byId("tree").setTableBindingPath(sFullPath);
			// 	this.byId("tree").rebindTable();

			// }.bind(this));
		},

		onChangeDate: function (oEvent) {
			this._dDateFilterValue = oEvent.getSource().getDateValue();
			this.byId("tree").rebindTable();
		},

		onBeforeRebindTable: function (oEvent) {
			var mBindingParams = oEvent.getParameter("bindingParams");
			var aFilters = [];
			if (this._dDateFilterValue) {
				aFilters = new Filter("DateFilter", sap.ui.model.FilterOperator.EQ, this._dDateFilterValue);
			}

			mBindingParams.filters.push(aFilters);
			// mBindingParams.parameters.entitySet = "ZHD_C_TREESet";
		}
	});
});