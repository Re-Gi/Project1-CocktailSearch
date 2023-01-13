// //Variable declarations: 
var searchFormEl = document.querySelector('#search-form');


function handleSearchFormSubmit(event){
    event.preventDefault();
    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);

    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);
    var formatInputVal = document.querySelector('#drop-down').value;

    if(!searchInputVal){
        console.log('no search term!');

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

      return response.json();
    })
    .then(function (locRes) {

      console.log(locRes);
    })
}

//     searchCocktail(searchInputVal);
// }
//     //This function is getting the DrinkName:
//     function searchCocktail(event){
//     event.preventDefault;


//     var cocktailName = document.querySelector('#search-input').ariaValueMax;
//     console.log(cocktailName);
//     var formatAlcoholicVal = document.querySelector('#drop-down');


    
//     let cocktailName = document.querySelector('.search-box');
//     console.log(cocktailName);
//     let drinkAPI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

//     fetch(drinkAPI)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)

//             var name = data.drinks[0].strDrink;
//             var img = data.drinks[0].strDrinkThumb;
//             var containAlcohol = data.drinks[0].strAlcoholic;
//             //Need a location to be able to put this date for the name, pic, is drink alcoholic:
//             var officialName = document.querySelector('h2');
//             var cocktailPic = document.querySelector('img');
//             var booleanAlcohol = document.querySelector('h2');

//             officialName.innerText = `${name}`;
//             cocktailPic.src = `${img}`;
//             booleanAlcohol.innerText = `${containAlcohol}`;
            

//             // Need to find a location to show information at this point. 

//         })
    


//Event Listener
document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);