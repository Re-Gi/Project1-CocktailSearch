// //Variable declarations: 
// //Variable declarations: 
var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event){
    event.preventDefault();
    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);

    // var formInputVal = document.querySelector('#drop-box');

    if(!searchInputVal){
        console.log('no search term!');
        return;
    }
    // var queryString = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + searchInputVal + '&format=' + formatInputVal;
    // location.assign(queryString);
}
    


//Event Listener
searchFormEl.addEventListener('submit', handleSearchFormSubmit);