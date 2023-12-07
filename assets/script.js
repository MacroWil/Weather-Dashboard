var responseObj;

$(document).ready(function () {
  $(".btn").on("click", function () {
    var city = $(this).siblings(".form-control").val();
    localStorage.setItem("city", city);
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
        window.responseObj = data;
        display();
        console.log(data);
      });
  });
});
