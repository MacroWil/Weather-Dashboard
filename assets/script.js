var responseObj;
var todayResponseObj;

displaySaved();
$(".weatherForecast").hide();

$(document).ready(function () {
  $(".btn").on("click", function () {
    var city = $(this).siblings(".form-control").val();
    city.split(" ").join("");

    if (city == "") {
      alert('Please enter a city with the format "City, state"');
      return;
    }

    var saved = JSON.parse(localStorage.getItem("city")) || [];
    saved.push({ city: city });
    localStorage.setItem("city", JSON.stringify(saved));

    var requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=12514b6cc41c0bd6caa2545307713489&units=imperial";

    fetch(requestUrl)
      .then(function (response) {
        if (!response.ok) {
          alert('Please enter a city with the format "City, state"');
          throw response.json();
        }
        return response.json();
      })
      .then(function (data) {
        responseObj = data;
        getToday();
      });
    function getToday() {
      var todayUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=12514b6cc41c0bd6caa2545307713489&units=imperial";
      fetch(todayUrl)
        .then(function (response) {
          if (!response.ok) {
            alert('Please enter a city with the format "City, state"');
            throw response.json();
          }
          return response.json();
        })
        .then(function (data) {
          todayResponseObj = data;
          displaySaved();
          displayDays();
        });
    }
  });
});

function displaySaved() {
  $("#button").empty();
  var saved = JSON.parse(localStorage.getItem("city")) || [];
  saved.forEach((entry) => {
    $("#button").append("<li>" + entry.city + "</li>");
    $($("#button").children()).addClass("button");
  });
  $(".button").on("click", clickHandler);
}

function clickHandler() {
  var city = $(this).text();
  city.split(" ").join("");

  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=12514b6cc41c0bd6caa2545307713489&units=imperial";

  fetch(requestUrl)
    .then(function (response) {
      if (!response.ok) {
        alert('Please enter a city with the format "City, state"');
        throw response.json();
      }
      return response.json();
    })
    .then(function (data) {
      responseObj = data;
      getToday();
    });
  function getToday() {
    var todayUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=9706e7b05bd2f565a4b235b43ca7c59c&units=imperial";
    fetch(todayUrl)
      .then(function (response) {
        if (!response.ok) {
          alert('Please enter a city with the format "City, state"');
          throw response.json();
        }
        return response.json();
      })
      .then(function (data) {
        todayResponseObj = data;
        displayDays();
      });
  }
}

function displayDays() {
  $(".weatherForecast").show();
  var todayIconUrl =
    "http://openweathermap.org/img/w/" +
    todayResponseObj.weather[0].icon +
    ".png";
  var iconUrl =
    "http://openweathermap.org/img/w/" +
    responseObj.list[0].weather[0].icon +
    ".png";
  var iconUrl1 =
    "http://openweathermap.org/img/w/" +
    responseObj.list[8].weather[0].icon +
    ".png";
  var iconUrl2 =
    "http://openweathermap.org/img/w/" +
    responseObj.list[16].weather[0].icon +
    ".png";
  var iconUrl3 =
    "http://openweathermap.org/img/w/" +
    responseObj.list[24].weather[0].icon +
    ".png";
  var iconUrl4 =
    "http://openweathermap.org/img/w/" +
    responseObj.list[32].weather[0].icon +
    ".png";
  $(".today").empty();
  $(".day1").empty();
  $(".day2").empty();
  $(".day3").empty();
  $(".day4").empty();
  $(".day5").empty();
  $(".today").append(
    todayResponseObj.name +
      "<br />" +
      todayResponseObj.weather[0].description +
      "<br />" +
      '<img src="' +
      todayIconUrl +
      '" />' +
      "<br />" +
      "Temperature: " +
      todayResponseObj.main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      todayResponseObj.main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      todayResponseObj.wind.speed +
      " Mph" +
      "<br />"
  );
  $(".day1").append(
    "Date: " +
      responseObj.list[0].dt_txt +
      "<br />" +
      responseObj.list[0].weather[0].description +
      "<br />" +
      '<img src="' +
      iconUrl +
      '" />' +
      "<br />" +
      "Temperature: " +
      responseObj.list[0].main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      responseObj.list[0].main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      responseObj.list[0].wind.speed +
      " Mph" +
      "<br />"
  );
  $(".day2").append(
    "Date: " +
      responseObj.list[8].dt_txt +
      "<br />" +
      responseObj.list[8].weather[0].description +
      "<br />" +
      '<img src="' +
      iconUrl1 +
      '" />' +
      "<br />" +
      "Temperature: " +
      responseObj.list[8].main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      responseObj.list[8].main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      responseObj.list[8].wind.speed +
      " Mph" +
      "<br />"
  );
  $(".day3").append(
    "Date: " +
      responseObj.list[16].dt_txt +
      "<br />" +
      responseObj.list[16].weather[0].description +
      "<br />" +
      '<img src="' +
      iconUrl2 +
      '" />' +
      "<br />" +
      "Temperature: " +
      responseObj.list[16].main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      responseObj.list[16].main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      responseObj.list[16].wind.speed +
      " Mph" +
      "<br />"
  );
  $(".day4").append(
    "Date: " +
      responseObj.list[24].dt_txt +
      "<br />" +
      responseObj.list[24].weather[0].description +
      "<br />" +
      '<img src="' +
      iconUrl3 +
      '" />' +
      "<br />" +
      "Temperature: " +
      responseObj.list[24].main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      responseObj.list[24].main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      responseObj.list[24].wind.speed +
      " Mph" +
      "<br />"
  );
  $(".day5").append(
    "Date: " +
      responseObj.list[32].dt_txt +
      "<br />" +
      responseObj.list[32].weather[0].description +
      "<br />" +
      '<img src="' +
      iconUrl4 +
      '" />' +
      "<br />" +
      "Temperature: " +
      responseObj.list[32].main.temp +
      "°F" +
      "<br />" +
      "Humidity: " +
      responseObj.list[32].main.humidity +
      "%" +
      "<br />" +
      "Wind Speed: " +
      responseObj.list[32].wind.speed +
      " Mph" +
      "<br />"
  );
}
