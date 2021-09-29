"use strict"

const url = "https://api.openweathermap.org/data/2.5/forecast?q=Wilmington,US-NC&units=imperial&appid=ce18553466563eb7d9e2173a63001213"

$.ajax({
    url: url,
    success: function(result) {
        console.log(result);
        console.log(result.city.name);
        $("#location").text(result.city.name);
        $("#sunrise").text(result.city.sunrise);
        $("#sunset").text(result.city.sunset);

        let T = Math.round((result.list[0].main.temp_max + result.list[0].main.temp_min) / 2);
        let temperature = T.toString();

        let W = Math.round(result.list[0].wind.speed);
        let windSpeed = W.toString();

        $("#oneTemp").text(temperature);
        $("#oneSky").text(result.list[0].weather[0].description);
        $("#oneWind").text(windSpeed);

        let T2 = Math.round(result.list[3].main.temp);
        let temperatureTwo = T2.toString();

        let W2 = Math.round(result.list[3].wind.speed);
        let windSpeedTwo = W2.toString();

        $("#twoTemp").text(temperatureTwo);
        $("#twoSky").text(result.list[3].weather[0].description);
        $("#twoWind").text(windSpeedTwo);

        let T3 = Math.round(result.list[11].main.temp);
        let temperatureThree = T3.toString();

        let W3 = Math.round(result.list[11].wind.speed);
        let windSpeedThree = W3.toString();

        $("#threeDate").text(result.list[11].dt_txt);
        $("#threeTemp").text(temperatureThree);
        $("#threeSky").text(result.list[11].weather[0].description);
        $("#threeWind").text(windSpeedThree);

        let T4 = Math.round(result.list[19].main.temp);
        let temperatureFour = T4.toString();

        let W4 = Math.round(result.list[19].wind.speed);
        let windSpeedFour = W4.toString();

        $("#fourDate").text(result.list[19].dt_txt);
        $("#fourTemp").text(temperatureFour);
        $("#fourSky").text(result.list[19].weather[0].description);
        $("#fourWind").text(windSpeedFour);

        let T5 = Math.round(result.list[27].main.temp);
        let temperatureFive = T5.toString();

        let W5 = Math.round(result.list[27].wind.speed);
        let windSpeedFive = W5.toString();

        $("#fiveDate").text(result.list[27].dt_txt);
        $("#fiveTemp").text(temperatureFive);
        $("#fiveSky").text(result.list[27].weather[0].description);
        $("#fiveWind").text(windSpeedFive);

        let T6 = Math.round(result.list[35].main.temp);
        let temperatureSix = T6.toString();

        let W6 = Math.round(result.list[35].wind.speed);
        let windSpeedSix = W6.toString();

        $("#sixDate").text(result.list[35].dt_txt);
        $("#sixTemp").text(temperatureSix);
        $("#sixSky").text(result.list[35].weather[0].description);
        $("#sixWind").text(windSpeedSix);

        let T7 = Math.round(result.list[39].main.temp);
        let temperatureSeven = T7.toString();

        let W7 = Math.round(result.list[39].wind.speed);
        let windSpeedSeven = W7.toString();

        $("#sevenDate").text(result.list[39].dt_txt);
        $("#sevenTemp").text(temperatureSeven);
        $("#sevenSky").text(result.list[39].weather[0].description);
        $("#sevenWind").text(windSpeedSeven);
    }
})