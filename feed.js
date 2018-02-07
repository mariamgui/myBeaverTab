function rss_map_from_json(text){
	var obj = JSON.parse(text, function (key, value) {
    if (key == "start" || key=="end") {
        return new Date(value);
    } else {
        return value;
    }});
    return obj;
}

function StringToXMLDom(string){
	var xmlDoc=null;
	if (window.DOMParser)
	{
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(string,"text/xml");
	}
	else // Internet Explorer
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";
		xmlDoc.loadXML(string);
	}
	return xmlDoc;
}

function double_digit_num(number) {
	if (number < 10)
		return "0" + number;
	else
		return number.toString();
}

function create_feed_row(feeds_list){
	var table = document.getElementById("feed_table");	
	if (feeds_list.length == 0) {
		row = table.insertRow(-1);
		row.innerHTML = "No events found!";
		row.className = "row";
	}	

	for (i = 0; i < feeds_list.length; i++) {		
		today = new Date()
		if (feeds_list[i]['end'] < today) {		
			continue;
		}		
		let row = table.insertRow(-1);
		let start_time = double_digit_num(feeds_list[i]['start'].getHours()) + ':' + double_digit_num(feeds_list[i]['start'].getMinutes());
		let end_time = double_digit_num(feeds_list[i]['end'].getHours()) + ':' + double_digit_num(feeds_list[i]['end'].getMinutes());
		let time = start_time === end_time ? 'All day' : start_time + ' - ' + end_time;
		const link = feeds_list[i]['link'];
		const title = feeds_list[i]['title'];
		// row.innerHTML = '<a href= \"${link}\"> ${title}</a>' + '<br/>' + start_time + ' - ' + end_time;
		row.innerHTML = '<a class = \"title\" target=\"_blank\" href=\"'+ link + '\">'+title+'</a>' + '<br/>' + time;
		row.className = "row";
	}
}

function parse_xml(xmlDOM){
	// let xmlDOM = StringToXMLDom(xmlText);
	var items = xmlDOM.getElementsByTagName("item");
	var today = new Date();
	var map = [];
	for (i = 0; i < items.length; i++) {
		let title_str = items[i].childNodes[1].innerHTML;
		let description_str = items[i].childNodes[5].innerHTML;
		let link_str = items[i].childNodes[3].innerHTML;
		let dtstart_str = items[i].childNodes[7].innerHTML;
		let dtend_str = items[i].childNodes[9].innerHTML;
		let allday_str = items[i].childNodes[11].innerHTML;
		let end_time = new Date(dtend_str);
		let start_time = new Date(dtstart_str);				
		if (end_time < today || start_time.getDate() > today.getDate() || start_time.getMonth() !== today.getMonth() || start_time.getFullYear() !== today.getFullYear())
			{continue;}								
		map.push({'title': title_str, 'description': description_str, 'link': link_str, 'start':start_time, 'end': end_time});
	}

	map.sort(function(a, b){
	    var startA = a['start'],
	        startB = b['start'],
	        endA = a['end'],
	        endB = b['end'];	    
	    if(startA < startB) return -1;
	    if(startA > startB) return 1;
	    if(endA < endB) return -1;
	    if(endA > endB) return 1;	    
	    return 0;	   	    
	});	

	return (map);
}

function parse_feed(url){
	if (rss_map == null) {
		qr = new XMLHttpRequest();
		qr.onreadystatechange=function(){
			if (this.readyState == 4 && this.status == 200) {
				var xmlDOM = this.responseXML;
				rss_map = parse_xml(xmlDOM);
				save_cache(rss_map);
				create_feed_row(rss_map);
			}
		}
		qr.open('get', url);
		qr.send();
	}
	else {		
		create_feed_row(rss_map);
	}
};


function generate_events(cached_date, map){
	if (cached_date == ""){
		console.log('null');
		rss_map = null;
		return;
	}
	var today = new Date();
	if (cached_date.getDate() != today.getDate() || cached_date.getMonth() != today.getMonth()) {
		console.log('Mismatch date: '+ today + ' <> ' + cached_date)
		rss_map = null;
	}
	else {		
		rss_map = map;		
	}
	parse_feed('http://calendar.oregonstate.edu/osu/rss20.xml');
}

function save_cache(rm){
	var text = JSON.stringify(rm);
	var today = new Date();	
	chrome.storage.local.set({'rss_json': text, 'saved_date': today.toString()}, function() {
          // Notify that we saved.
          console.log('Settings saved');
    	});
}

function load_cache(callback){
	var map = "";
	var date = "";
	chrome.storage.local.get(['rss_json', 'saved_date'], function(result){		
		map = rss_map_from_json(result['rss_json']);
		date = new Date(result['saved_date']);
		callback(date, map);
	});
}

load_cache(generate_events);
