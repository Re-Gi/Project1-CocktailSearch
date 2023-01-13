//Variable declarations: 
// var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event){
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);
    var formatInputVal = document.querySelector('#drop-down').value;
    console.log(formatInputVal);

    if(!searchInputVal){
        console.log('no search term');
        return;
    }

    getResults(searchInputVal, formatInputVal);
}

function getResults(searchInputVal, formatInputVal){
    console.log(searchInputVal, formatInputVal);
    // var locQueryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//   if (format) {
//     locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
//   }

    var locQueryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInputVal;

  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) {
        console.log('not ok');
        throw response.json();
      }

      console.log(response.json());
    })
}
    
    // var queryString = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + searchInputVal + '&format=' + formatInputVal;
    // location.assign(queryString);

//Event Listener
document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);