function convert_text_to_map(text, conversion_func){
	if (text == "" || text ==   null) {return ""}
	var obj = JSON.parse(text, conversion_func);
    return obj;
}

function save_map_in_cache(rm, id_str){}
	var json_str = JSON.stringify(rm);
	var today = new Date();	
	chrome.storage.local.set({id_str: json_str, 'date': today.toString()}, function() {
          // Notify that we saved.
          console.log(id_str + ' was saved in cache at ' + today);
    	});
}

function fetch_xml(url, xml_map_list, create_map_func, apply_func){
	if (xml_map_list == null) {
		qr = new XMLHttpRequest();
		qr.onreadystatechange=function(){
			if (this.readyState == 4 && this.status == 200) {
				var xmlDOM = this.responseXML;
				xml_map_list = create_map_func(xmlDOM);
				save_map_in_cache(xml_map_list, url);
				apply_func(xml_map_list);
			}
		}
		qr.open('get', url);
		qr.send();
	}
	else {		
		apply_func(xml_map_list);
	}
};


function load_map_from_cache(main_func, cache_id_str, conversion_func){
	var map = "";
	var date = "";
	chrome.storage.local.get([id_str, 'date'], function(result){
		map = convert_text_to_map(result[cache_id_str], conversion_func);
		date = new Date(result['date']);
		main_func(date, map);
	});
}