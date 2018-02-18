function parse_weather_xmlDOM(xmlDOM){
	console.log(xmlDOM);
	var weather = xmlDOM.getElementsByTagName("weather")[0].innerHTML;
	var temp_f = xmlDOM.getElementsByTagName("temp_f")[0].innerHTML;
	var temp_c = xmlDOM.getElementsByTagName("temp_c")[0].innerHTML;
	var update_time = xmlDOM.getElementsByTagName("observation_time_rfc822")[0].innerHTML;	
	var weather_data = {"weather": weather, "temp_f": temp_f, "temp_c": temp_c, "update_time": update_time};
	console.log(weather_data);
	return (weather_data);
}

function validate_weather_cache(cached_date, map){
	if (map == null){return false;}

	var today = new Date();
	return false;
	// if (cached_date.getDate() != today.getDate() || cached_date.getMonth() != today.getMonth()) {
	// 	console.log('Mismatch date: '+ today + ' <> ' + cached_date)
	// 	return false;
	// }
	// else {return true;}	
}

function conversion_func(key, value){
    if (key == "update_time") {
        return new Date(value);
    } else {
        return value;
    }
}

function show_weather(weather_data){
	console.log("saved data: ", weather_data);	
	document.getElementById("temperature").innerHTML = weather_data['temp_f'];
	document.getElementById("weather").innerHTML = weather_data['weather'];
	document.getElementById("update_time").innerHTML = weather_data['update_time'];
}

load_cache_begin("http://w1.weather.gov/xml/current_obs/KCVO.xml", validate_weather_cache, conversion_func, parse_weather_xmlDOM, show_weather);