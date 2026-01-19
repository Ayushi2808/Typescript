/* 1.declaring city and assigning my favourite city name to it */
var city;
city = "varanasi";
console.log("city name is:" + city);
/* 2.dectaring temperature and assigning value to it */
var temperature;
temperature = 32;
console.log("temperature is:" + temperature);
/* 3.creating a variable isRaining and let typescript infer its type from value assigned */
var IsRainng = true;
console.log(IsRainng);
/* 4.creating a functiion named weatherReport  */
function WeatheReport(city, temperature, isRainng) {
    console.log("in" + city + ", it is" + temperature + "C. Is it raining?" + isRainng);
}
WeatheReport("varanasi", 28, IsRainng);
