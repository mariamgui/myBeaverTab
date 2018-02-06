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

function create_feed_row(feeds_list){
	for (i = 0; i < feeds_list.length; i++) {
		var table = document.getElementById("feed_table");
		let row = table.insertRow(-1);		
		let start_time = feeds_list[i]['start'].getHours() + ':' + feeds_list[i]['start'].getMinutes();
		let end_time = feeds_list[i]['end'].getHours() + ':' + feeds_list[i]['end'].getMinutes();
		let time = start_time === end_time ? 'All day' : start_time + ' - ' + end_time;
		const link = feeds_list[i]['link'];
		const title = feeds_list[i]['title'];
		// row.innerHTML = '<a href= \"${link}\"> ${title}</a>' + '<br/>' + start_time + ' - ' + end_time;
		row.innerHTML = '<a class = \"title\" target=\"_blank\" href=\"'+ link + '\">'+title+'</a>' + '<br/>' + time;
		row.className = "row";
	}
}

function parse_feed(url){
	qr = new XMLHttpRequest();
	qr.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200) {
			dictlist = []			
			xmlDOM = this.responseXML;				
			items = xmlDOM.getElementsByTagName("item");						
			var today = new Date();
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
				dictlist.push({'title': title_str, 'description': description_str, 'link': link_str, 'start':start_time, 'end': end_time});
			}
			console.log(dictlist);
			create_feed_row(dictlist);
		}
	}
	qr.open('get', url);
	qr.send();
};

parse_feed('http://calendar.oregonstate.edu/osu/rss20.xml');