function build_weather_codes(){
	console.log("building weather codes.");
	weather_inv_map = {};

	weather_index = {};
	weather_index["mostly_cloudy"] = ["bkn.jpg", "nbkn.jpg", "Mostly Cloudy | Mostly Cloudy with Haze | Mostly Cloudy and Breezy"];
	weather_index["clear"] = ["skc.jpg", "nskc.jpg", "Fair | Clear | Fair with Haze | Clear with Haze | Fair and Breezy | Clear and Breezy"];
	weather_index["a_few_clouds"] = ["few.jpg", "nfew.jpg", "A Few Clouds | A Few Clouds with Haze | A Few Clouds and Breezy"];
	weather_index["partly_cloudy"] = ["sct.jpg", "nsct.jpg", "Partly Cloudy | Partly Cloudy with Haze | Partly Cloudy and Breezy"];
	weather_index["overcast"] = ["ovc.jpg", "novc.jpg", "Overcast | Overcast with Haze | Overcast and Breezy"];
	weather_index["fog"] = ["fg.jpg", "nfg.jpg","Fog/Mist | Fog | Freezing Fog | Shallow Fog | Partial Fog | Patches of Fog | Fog in Vicinity | Freezing Fog in Vicinity | Shallow Fog in Vicinity | Partial Fog in Vicinity | Patches of Fog in Vicinity | Showers in Vicinity Fog | Light Freezing Fog | Heavy Freezing Fog"];
	weather_index["smoke"] = ["smoke.jpg", "smoke.jpg", "Smoke"];
	weather_index["freezing_rain"] = ["fzra.jpg", "fzra.jpg", "Freezing Rain | Freezing Drizzle | Light Freezing Rain | Light Freezing Drizzle | Heavy Freezing Rain | Heavy Freezing Drizzle | Freezing Rain in Vicinity | Freezing Drizzle in Vicinity"];
	weather_index["ice_pellets"] = ["ip.jpg", "ip.jpg", "Ice Pellets | Light Ice Pellets | Heavy Ice Pellets | Ice Pellets in Vicinity | Showers Ice Pellets | Thunderstorm Ice Pellets | Ice Crystals | Hail | Small Hail/Snow Pellets | Light Small Hail/Snow Pellets | Heavy small Hail/Snow Pellets | Showers Hail | Hail Showers"];
	weather_index["freezing_rain_snow"] = ["mix.jpg", "nmix.jpg", "Freezing Rain Snow | Light Freezing Rain Snow | Heavy Freezing Rain Snow | Freezing Drizzle Snow | Light Freezing Drizzle Snow | Heavy Freezing Drizzle Snow | Snow Freezing Rain | Light Snow Freezing Rain | Heavy Snow Freezing Rain | Snow Freezing Drizzle | Light Snow Freezing Drizzle | Heavy Snow Freezing Drizzle"];
	weather_index["rain_ice_pellets"] = ["raip.jpg", "raip.jpg", "Rain Ice Pellets | Light Rain Ice Pellets | Heavy Rain Ice Pellets | Drizzle Ice Pellets | Light Drizzle Ice Pellets | Heavy Drizzle Ice Pellets | Ice Pellets Rain | Light Ice Pellets Rain | Heavy Ice Pellets Rain | Ice Pellets Drizzle | Light Ice Pellets Drizzle | Heavy Ice Pellets Drizzle"];
	weather_index["rain_snow"] = ["rasn.jpg", "nrasn.jpg", "Rain Snow | Light Rain Snow | Heavy Rain Snow | Snow Rain | Light Snow Rain | Heavy Snow Rain | Drizzle Snow | Light Drizzle Snow | Heavy Drizzle Snow | Snow Drizzle | Light Snow Drizzle | Heavy Drizzle Snow"];
	weather_index["rain_showers"] = ["shra.jpg", "shra.jpg", "Rain Showers | Light Rain Showers | Light Rain and Breezy | Heavy Rain Showers | Rain Showers in Vicinity | Light Showers Rain | Heavy Showers Rain | Showers Rain | Showers Rain in Vicinity | Rain Showers Fog/Mist | Light Rain Showers Fog/Mist | Heavy Rain Showers Fog/Mist | Rain Showers in Vicinity Fog/Mist | Light Showers Rain Fog/Mist | Heavy Showers Rain Fog/Mist | Showers Rain Fog/Mist | Showers Rain in Vicinity Fog/Mist"];
	weather_index["thunderstorm"] = ["tsra.jpg", "ntsra.jpg", "Thunderstorm | Thunderstorm Rain | Light Thunderstorm Rain | Heavy Thunderstorm Rain | Thunderstorm Rain Fog/Mist | Light Thunderstorm Rain Fog/Mist | Heavy Thunderstorm Rain Fog and Windy | Heavy Thunderstorm Rain Fog/Mist | Thunderstorm Showers in Vicinity | Light Thunderstorm Rain Haze | Heavy Thunderstorm Rain Haze | Thunderstorm Fog | Light Thunderstorm Rain Fog | Heavy Thunderstorm Rain Fog | Thunderstorm Light Rain | Thunderstorm Heavy Rain | Thunderstorm Rain Fog/Mist | Thunderstorm Light Rain Fog/Mist | Thunderstorm Heavy Rain Fog/Mist | Thunderstorm in Vicinity Fog/Mist | Thunderstorm Showers in Vicinity | Thunderstorm in Vicinity Haze | Thunderstorm Haze in Vicinity | Thunderstorm Light Rain Haze | Thunderstorm Heavy Rain Haze | Thunderstorm Fog | Thunderstorm Light Rain Fog | Thunderstorm Heavy Rain Fog | Thunderstorm Hail | Light Thunderstorm Rain Hail | Heavy Thunderstorm Rain Hail | Thunderstorm Rain Hail Fog/Mist | Light Thunderstorm Rain Hail Fog/Mist | Heavy Thunderstorm Rain Hail Fog/Hail | Thunderstorm Showers in Vicinity Hail | Light Thunderstorm Rain Hail Haze | Heavy Thunderstorm Rain Hail Haze | Thunderstorm Hail Fog | Light Thunderstorm Rain Hail Fog | Heavy Thunderstorm Rain Hail Fog | Thunderstorm Light Rain Hail | Thunderstorm Heavy Rain Hail | Thunderstorm Rain Hail Fog/Mist | Thunderstorm Light Rain Hail Fog/Mist | Thunderstorm Heavy Rain Hail Fog/Mist | Thunderstorm in Vicinity Hail | Thunderstorm in Vicinity Hail Haze | Thunderstorm Haze in Vicinity Hail | Thunderstorm Light Rain Hail Haze | Thunderstorm Heavy Rain Hail Haze | Thunderstorm Hail Fog | Thunderstorm Light Rain Hail Fog | Thunderstorm Heavy Rain Hail Fog | Thunderstorm Small Hail/Snow Pellets | Thunderstorm Rain Small Hail/Snow Pellets | Light Thunderstorm Rain Small Hail/Snow Pellets | Heavy Thunderstorm Rain Small Hail/Snow Pellets"];
	weather_index["snow"] = ["sn.jpg", "nsn.jpg", "Snow | Light Snow | Heavy Snow | Snow Showers | Light Snow Showers | Heavy Snow Showers | Showers Snow | Light Showers Snow | Heavy Showers Snow | Snow Fog/Mist | Light Snow Fog/Mist | Heavy Snow Fog/Mist | Snow Showers Fog/Mist | Light Snow Showers Fog/Mist | Heavy Snow Showers Fog/Mist | Showers Snow Fog/Mist | Light Showers Snow Fog/Mist | Heavy Showers Snow Fog/Mist | Snow Fog | Light Snow Fog | Heavy Snow Fog | Snow Showers Fog | Light Snow Showers Fog | Heavy Snow Showers Fog | Showers Snow Fog | Light Showers Snow Fog | Heavy Showers Snow Fog | Showers in Vicinity Snow | Snow Showers in Vicinity | Snow Showers in Vicinity Fog/Mist | Snow Showers in Vicinity Fog | Low Drifting Snow | Blowing Snow | Snow Low Drifting Snow | Snow Blowing Snow | Light Snow Low Drifting Snow | Light Snow Blowing Snow | Light Snow Blowing Snow Fog/Mist | Heavy Snow Low Drifting Snow | Heavy Snow Blowing Snow | Thunderstorm Snow | Light Thunderstorm Snow | Heavy Thunderstorm Snow | Snow Grains | Light Snow Grains | Heavy Snow Grains | Heavy Blowing Snow | Blowing Snow in Vicinity"];
	weather_index["windy"] = ["wind.jpg", "nwind.jpg", "Windy | Breezy | Fair and Windy | A Few Clouds and Windy | Partly Cloudy and Windy | Mostly Cloudy and Windy | Overcast and Windy"];
	weather_index["showers_in_vic"] = ["hi_shwrs.jpg", "hi_nshwrs.jpg", "Showers in Vicinity | Showers in Vicinity Fog/Mist | Showers in Vicinity Fog | Showers in Vicinity Haze"];
	weather_index["freezing_rain_rain"] = ["fzrara.jpg", "fzrara.jpg", "Freezing Rain Rain | Light Freezing Rain Rain | Heavy Freezing Rain Rain | Rain Freezing Rain | Light Rain Freezing Rain | Heavy Rain Freezing Rain | Freezing Drizzle Rain | Light Freezing Drizzle Rain | Heavy Freezing Drizzle Rain | Rain Freezing Drizzle | Light Rain Freezing Drizzle | Heavy Rain Freezing Drizzle"];
	weather_index["thunderstorm_in_vic"] = ["hi_tsra.jpg", "hi_ntsra.jpg", "Thunderstorm in Vicinity | Thunderstorm in Vicinity Fog | Thunderstorm in Vicinity Haze"];
	weather_index["light_rain"] = ["ra1.jpg", "nra.jpg", "Light Rain | Drizzle | Light Drizzle | Heavy Drizzle | Light Rain Fog/Mist | Drizzle Fog/Mist | Light Drizzle Fog/Mist | Heavy Drizzle Fog/Mist | Light Rain Fog | Drizzle Fog | Light Drizzle Fog | Heavy Drizzle Fog"];
	weather_index["rain"] = ["ra.jpg", "nra.jpg", "Rain | Heavy Rain | Rain Fog/Mist | Heavy Rain Fog/Mist | Rain Fog | Heavy Rain Fog"];
	weather_index["funnel_cloud"] = ["nsvrtsra.jpg", "nsvrtsra.jpg", "Funnel Cloud | Funnel Cloud in Vicinity | Tornado/Water Spout"];
	weather_index["dust"] = ["dust.jpg", "dust.jpg", "Dust | Low Drifting Dust | Blowing Dust | Sand | Blowing Sand | Low Drifting Sand | Dust/Sand Whirls | Dust/Sand Whirls in Vicinity | Dust Storm | Heavy Dust Storm | Dust Storm in Vicinity | Sand Storm | Heavy Sand Storm | Sand Storm in Vicinity"];
	weather_index["haze"] = ["mist.jpg", "mist.jpg", "Haze"];


	for (w in weather_index) {
		w_icon_day = weather_index[w][0];
		w_icon_night = weather_index[w][1];				
		w_codes = weather_index[w][2].split("|");		
		
		for (c of w_codes) {
			weather_inv_map[standardize_text(c)] = [w, w_icon_day, w_icon_night];
		}
	}	
}

function standardize_text(str){
	return str.toLowerCase().replace(/\s/g, "");
}

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

function get_weather_image(w){
	var w_type = standardize_text(w);
	var icon_name = weather_inv_map[w_type][1];
	return "<img src =\"./weather_icons/"+ icon_name + "\" class =\"resize\">";
}

function show_weather(weather_data){
	console.log("saved data: ", weather_data);	
	document.getElementById("temperature").innerHTML = weather_data['temp_f'];
	document.getElementById("weather").innerHTML = get_weather_image(weather_data['weather']);
	console.log("Weather data for: " + weather_data['update_time']);
}


build_weather_codes();
load_cache_begin("http://w1.weather.gov/xml/current_obs/KCVO.xml", validate_weather_cache, conversion_func, parse_weather_xmlDOM, show_weather);