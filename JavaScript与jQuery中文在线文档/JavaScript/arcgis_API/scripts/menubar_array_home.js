/*	Current Tab Names:
	homeTab - productsTab - servicesTab - industriesTab -	trainingTab - supportTab -  newsTab - eventsTab - companyTab 
*/

/*
	addTabURL syntax:
	addTabURL(  "/directory_path" , "tabName"  );
*/
addTabURL( "home", 				           "homeTab"	);
addTabURL( "library", 		   				"LibraryTab"	);
addTabURL( "content_maps", 		   			"onlineTab"	);
addTabURL( "services", 		   				"servicesTab"	);
addTabURL( "blog", 		   					"blogTab"	);
addTabURL( "support", 		   				"supportTab"	);
addTabURL( "geodatabase", 		   		"datamanageTab"	);
addTabURL( "gisenterprise", 		   		"datamanageTab"	);
addTabURL( "webgeodata", 		   		"datamanageTab"	);
addTabURL( "datamanagement", 		   		"datamanageTab"	);
addTabURL( "arcgismobile", 		   			"arcgismobTab"	);
addTabURL( "applications", 		   			"appTab"	);

// ======================================================================
//  MENUS

// addMainItem(description, URL, _target, tabName);
addMainItem("Home", "home.htm", "_top", "homeTab");
//addMainItem("Content", "http://arcgisonline.esri.com/index.cfm?fa=catalog.services", "_blank", "onlineTab");
addMainItem("Concepts", "help/jshelp_start.htm", "", "conceptTab");
addMainItem("Samples", "help/jssamples_start.htm", "", "samplesTab");
addMainItem("API Reference", "help/jsapi_start.htm", "", "apiTab");
	
	
generateMenus();

