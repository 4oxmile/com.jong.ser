$(document).ready( function() {
	"use strict";
	$("").gantt({
		source: [{
			name: "Sprint 0",
			desc: "Analysis",
			values: [{
				from: "/Date(1320192000000)/",
				to: "/Date(1322401600000)/",
				label: "Requirement Gathering", 
				desc : 'kkkk',
				customClass: "ganttRed"
			}]
		},{
			name: " ",
			desc: "Scoping",
			values: [{
				from: "/Date(1322611200000)/",
				to: "/Date(1323302400000)/",
				label: "Scoping", 
				customClass: "ganttRed"
			}]
		},{
			name: "Sprint 1",
			desc: "Development",
			values: [{
				from: "/Date(1323802400000)/",
				to: "/Date(1325685200000)/",
				label: "Development", 
				customClass: "ganttGreen"
			}]
		},{
			name: " ",
			desc: "Showcasing",
			values: [{
				from: "/Date(1325685200000)/",
				to: "/Date(1325695200000)/",
				label: "Showcasing", 
				customClass: "ganttBlue"
			}]
		},{
			name: "Sprint 2",
			desc: "Development",
			values: [{
				from: "/Date(1326785200000)/",
				to: "/Date(1325785200000)/",
				label: "Development", 
				customClass: "ganttGreen"
			}]
		},{
			name: " ",
			desc: "Showcasing",
			values: [{
				from: "/Date(1328785200000)/",
				to: "/Date(1328905200000)/",
				label: "Showcasing", 
				customClass: "ganttBlue"
			}]
		},{
			name: "Release Stage",
			desc: "Training",
			values: [{
				from: "/Date(1330011200000)/",
				to: "/Date(1336611200000)/",
				label: "Training", 
				customClass: "ganttOrange"
			}]
		},{
			name: " ",
			desc: "Deployment",
			values: [{
				from: "/Date(1336611200000)/",
				to: "/Date(1338711200000)/",
				label: "Deployment", 
				customClass: "ganttOrange"
			}]
		},{
			name: " ",
			desc: "Deployment",
			values: [{
				from: "/Date(1336611200000)/",
				to: "/Date(1338711200000)/",
				label: "Deployment", 
				customClass: "ganttOrange"
			}]
		},{
			name: " ",
			desc: "Warranty Period",
			values: [{
				from: "/Date(1336611200000)/",
				to: "/Date(1349711200000)/",
				label: "Warranty Period", 
				customClass: "ganttOrange"
			}]
		}],
		//navigate: "buttons",
		scale: "weeks",
		maxScale: "months",
		minScale: "days",
		itemsPerPage: 10,
		onItemClick: function(data) {
			alert("Item clicked - show some details");
		},
		onAddClick: function(dt, rowId) {
			console.log( 'onAddClick', dt );
			alert("Empty space clicked - add an item! ::" + dt);
		},
		onRender: function() {
			if (window.console && typeof console.log === "function") {
				console.log("chart rendered");
			}
		}
	});

	
	$('').avgrund({
	    width: 220, // max is 640px
	    height: 220, // max is 350px
	    showClose: false, // switch to 'true' for enabling close button 
	    showCloseText: '', // type your text for close button
	    closeByEscape: true, // enables closing popup by 'Esc'..
	    closeByDocument: true, // ..and by clicking document itself
	    holderClass: '', // lets you name custom class for popin holder..
	    overlayClass: '', // ..and overlay block
	    enableStackAnimation: false, // enables different type of popin's animation
	    onBlurContainer: '', // enables blur filter for specified block
	    openOnEvent: true, // set to 'false' to init on load
	    setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
	    template: 'temp_login' // or function() { ... }
	});




});

