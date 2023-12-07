var responseObj;
displaySaved();

$(document).ready(function () {
  $(".btn").on("click", function () {
    var city = $(this).siblings(".form-control").val();
    city.split(" ").join("");
    var saved = JSON.parse(localStorage.getItem("city")) || [];
    saved.push({ city: city });
    localStorage.setItem("city", JSON.stringify(saved));
    console.log(city);

    var requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=12514b6cc41c0bd6caa2545307713489";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        responseObj = data;
        displaySaved();
        console.log(data);
      });
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
  console.log(this);
  var city = $(this).text();
  city.split(" ").join("");
  console.log(city);
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=12514b6cc41c0bd6caa2545307713489";
  console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      responseObj = data;
      console.log(data);
    });
}
