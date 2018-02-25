/**
 * @author Abtin Khodadadi <abt.kod@gmail.com>
 */

function convert_text_to_map(text, conversion_func){
	if (text == "" || text == null) {return null;}	
	var obj = JSON.parse(text, conversion_func);	
    return obj;
}

function save_map_in_cache(rm, id_str){
	var json_str = JSON.stringify(rm);
	var today = new Date();
	var d = "CACHED_DATE_"+id_str;
	chrome.storage.local.set({[id_str]: json_str, [d]: today.toString()}, function() {
          // Notify that we saved.
          console.log(id_str + ' was saved in cache at ' + today);
    	});
}

function fetch_xml_and_parse(url, parse_DOM_func, main_func){
	qr = new XMLHttpRequest();
	qr.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200) {
			var xmlDOM = this.responseXML;
			var xml_map_list = parse_DOM_func(xmlDOM);			
			save_map_in_cache(xml_map_list, make_id_str_from(url));
			main_func(xml_map_list);
		}
	}
	qr.open('get', url);
	qr.send();
};

function make_id_str_from(url){return url.slice(-8);}

function load_cache_begin(url, validate_cache_func, conversion_func, parse_DOM_func, main_func){
	var xml_map_list;
	var date;
	id_str = make_id_str_from(url);
	var d = "CACHED_DATE_"+id_str;
	chrome.storage.local.get([id_str, d], function(result){
		console.log(result)
		xml_map_list = convert_text_to_map(result[id_str], conversion_func);	
		date = new Date(result[d]);
		valid = validate_cache_func(date, xml_map_list);		
		if (!valid){
			fetch_xml_and_parse(url, parse_DOM_func, main_func);
		}
		else{			
			main_func(xml_map_list);
		}
	});
}