function getApi() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=12514b6cc41c0bd6caa2545307713489";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getApi();
