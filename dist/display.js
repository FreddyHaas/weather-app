/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ (() => {

eval("const initiateWebsite = (() => {\n    const button = document.getElementById('input-button');\n    const input = document.getElementById('location');\n    \n    button.addEventListener('click', async () => {\n        const data = await loadWeatherData(input.value);\n        displayContent(data);\n    })\n})();\n\nasync function loadWeatherData(location) {\n    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd83fbfa76f47c86adab313f170dcdcc`, {mode: 'cors'});\n    const data = await response.json();\n    const relevantData = {\n        \"location\": location,\n        \"temp\": data.main.temp,\n        \"feels_like\": data.main.feels_like,\n        \"humidity\": data.main.humidity,\n        \"wind\": data.wind.speed\n     }\n    console.log(relevantData.temp);\n    return relevantData;\n}\n\nfunction displayContent(data) {\n    const display = document.querySelector('.display');\n    const city = document.getElementById('city');\n    const temp = document.getElementById('temp');\n    const feelsLike = document.getElementById('feels-like');\n    const humidity = document.getElementById('humidity');\n    const wind = document.getElementById('wind');\n\n    city.textContent = `${data.location}`;\n    temp.textContent = `${convertToCelsius(data.temp)} °C`;\n    feelsLike.textContent = `Feels like: ${convertToCelsius(data.feels_like)} °C`;\n    humidity.textContent = `Humidity: ${Math.round(data.humidity)} %`;\n    wind.textContent = `Wind: ${Math.round(data.wind*10)/10} km/h`;\n\n    display.setAttribute('id','active');\n}\n\nfunction convertToCelsius(kelvin) {\n    const celsius = (kelvin - 273.15);\n    const roundedCelsius = Math.round(celsius*10)/10\n    return roundedCelsius;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/display.js"]();
/******/ 	
/******/ })()
;