var temperature = 39;
var windspeed = 13;
var windchill = 35.74 + (0.6215 * temperature) - (35.75 * (windspeed ** 0.16)) + (0.4275 * (temperature) * (windspeed ** 0.16));

var windchill = Math.round(windchill);
document.getElementById("windchill").innerHTML = windchill;

/*get the two input values of temperature and wind speed,
check to make sure they meet the specification limits(<= 50°F and > 3.0mph) allowed to officially calculate the wind chill, and

Wind Chill Specification Limits: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph)." - U.S.National Weather ServiceLinks to an external site.*/