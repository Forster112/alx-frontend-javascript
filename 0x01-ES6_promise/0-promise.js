function getResponseFromAPI(country){
  fetch('https://restcountries.eu/rest/v2/name/' + country).then(function(
    response
  ){
    console.log(response)
  })
}