// //Variable declarations: 
var searchFormEl = document.querySelector('#search-form');
var resultContentEl = document.querySelector('#result-content');
var resultTextEl = document.querySelector('#result-text');
//const apiKEY:'7048428';

function handleSearchFormSubmit(event) {
    event.preventDefault();
    // if (!searchInputVal.value) {
    //     console.log('no search term!');

    //     return;
    // }
    var searchInputVal = document.querySelector('#search-input').value;
    // console.log(searchInputVal);

    // var alcoholInputVal = document.querySelector('#drop-down').value;
        // gives "alcoholic" or "non-alcoholic", make it a boolean? ex.
            // var alcoholVal = true;
            // if(alcoholInputVal !== "Alcohlic") { alcoholVal = false; }

    getResults(searchInputVal);
}

function getResults(searchInputVal) {
    console.log(searchInputVal);
  
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
            resultTextEl.textContent = searchInputVal;
            console.log(locRes.drinks);
            if (!locRes.drinks){
                        console.log('No results found!');
                        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
                    } else {
                        resultContentEl.textContent = ' ';
                        for (var i =0; i < locRes.drinks.length; i++){
                            printResults(locRes.drinks[i]);
                        }
                    }
        

            // var drinkname = document.createElement('p');
            // drinkname.textContent = locRes.drinks[0].strDrink;
            // document.getElementById('result-content').append(drinkname);

            // var drinkpicture = document.createElement('img');
            // drinkpicture.setAttribute("src", locRes.drinks[0].strDrinkThumb);
            // document.getElementById('result-content').appendChild(drinkpicture);
            
        })
}

function printResults(resultObj) {

    var resultCard = document.createElement('div');
    resultCard.classList.add('card', "bg-light", 'text-dark', "mb-3", 'p-3');
    document.getElementById('result-content').append(resultCard);


    var drinkname = document.createElement('p');
    drinkname.textContent = resultObj.strDrink;
    resultCard.append(drinkname);

    var drinkpicture = document.createElement('img');
    drinkpicture.setAttribute("src", resultObj.strDrinkThumb);
    resultCard.appendChild(drinkpicture);

    // what else do we wanna display on these cards?
        // alcoholic/non-alcoholic

    // add event listener to resultCard, click takes them to new event handling function with resultObj as parameter to be carried over    
}

// add new event handler function for result card
 // use location.assign with '/future.html?q=' +resultObj.strDrink ?
    //needs to get drink name of exact div clicked on, might need event.target somewhere

//Event Listener
document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);




















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