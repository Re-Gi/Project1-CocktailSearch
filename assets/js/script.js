//Variable declarations: 
var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event){
    event.preventDefault();
    console.log(event);

    var searchInputVal = document.querySelector('#search-input');
    var formatInputVal = document.querySelector('#drop-down');

    if(!searchInputVal){

        return;
    }
    // var queryString = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + searchInputVal + '&format=' + formatInputVal;
    // location.assign(queryString);
}

//Event Listener
searchFormEl.addEventListener('submit', handleSearchFormSubmit);