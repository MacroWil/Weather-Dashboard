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

function addCityBtn() {
  // gets the city the user types in
  var cityInput = document.getElementById('cityInput');
  // removes spaces before/after
  var cityName = cityInput.value.trim();
  // if city name isnt empty, run function, prevents someone from just putting spaces and outputting a button
  if (cityName !== '') {
      // creates button below search bar
      var button = document.createElement('button');
      button.className = 'btn btn-secondary mr-2';
      button.textContent = cityName;
      // event listener for click on search
      button.addEventListener('click', function() {
          console.log(cityName);
      });
      // creates var for container in html to insert city name
      var cityButtonsContainer = document.getElementById('cityButtonsContainer');
      // puts name in container
      cityButtonsContainer.append(button);
      //clears city input var
      cityInput.value = '';
  }
}
