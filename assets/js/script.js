// //Variable declarations: 
var searchFormEl = document.querySelector('#search-form');
var resultContentEl = document.querySelector('#result-content');
var resultTextEl = document.querySelector('#result-text');
var resultsContainer = document.querySelector("#results");
//const apiKEY:'7048428';

function handleSearchFormSubmit(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector('#search-input').value;
   
    getResults(searchInputVal);
}

function getResults(searchInputVal) {
    console.log(searchInputVal);
    var URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='  + searchInputVal;
//     const fetchDrinkNames = fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='  + searchInputVal);
//     const fetchAlcoholType = fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchInputVal);

//     Promise.all([fetchDrinkNames, fetchAlcoholType])
//         .then(values => {
//         return Promise.all(values.map(r => r.json()));
//     })  .then(([drinkname, alcoholtype]) =>{
//         console.log(drinkname);
//         console.log(alcoholtype);
//         cocktailsData = data.drinks === null ? [] : data.drinks;
//             printResults(cocktailsData);
//             console.log(cocktailsData);
//             checkError(cocktailsData);
//     });
// }

    // let URLS = [
    //     'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInputVal ,
    //     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchInputVal
    // ]
    
//     let requests = URLS.map(URL => fetch(URL));
//         Promise.all(requests)
//         .then((responses) => responses.forEach(requests))
//         .then((data) => {
//             cocktailsData = data.drinks === null ? [] : data.drinks;
//             printResults(cocktailsData);
//             console.log(cocktailsData);
//             checkError(cocktailsData);
//         })

       
// }
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            cocktailsData = data.drinks === null ? [] : data.drinks;
            printResults(cocktailsData);
            console.log(cocktailsData);
            checkError(cocktailsData);
        });
}    
//need to get a way to print some search.
//And also made the images clickable. 
function printResults(cocktails) {
    resultContentEl.innerHTML = "";
    for (const element of cocktails) {
        var list = `<div id="${element.idDrink}" class="cocktail-card"><div id='drinkTitle'><p class="nameCocktail">${element.strDrink}<a><div class="imgWrapper"><img src="${element.strDrinkThumb}"></div></a>`;
        resultContentEl.innerHTML += list;
        console.log(cocktails);
    }    
}

//error handling event 
//fixed the error function to show: "NO Search Found!"
//Will try to come back to this later to put a better Error Message. But moving to other stuff
function checkError(){
    setTimeout(() =>{
        if(cocktailsData.length === 0){
            console.log("Hey please enter a searchable name");
            resultContentEl.textContent = "No Search Found!"
        // resultContentEl.innerHTML = `<div class="nothingFound"><h2>Nothing found</h2><p><strong>Sorry, we couldn't find any results matching "${searchInputVal.value}"</strong></p></div>`;
        // resultsContainer.innerHTML = "";
    } else {
        printResults(cocktailsData);
    }

    }, 500);
    resultContentEl.innerHTML = "";
    
}
//this will open the drink item to the next page. 
function clickResults() {
    document.querySelectorAll("#results").forEach((item) =>{
        item.addEventListener("click", () => openDrink(item));
    });
}
//takes us to the future html 
function openDrink(element) {
    localStorage.setItem("id", element.id);
    window.open("./future.html");
}

//Event Listener
document.querySelector('#search-form').addEventListener('submit', handleSearchFormSubmit);











































//         .then(function (response) {
//             if (!response.ok) {
//                 console.log('not ok');
//                 throw response.json();
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             if (!data) {
//                 console.log('No results found!');
//                 resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//             } else {
//                 resultContentEl.textContent = ' ';
//                 for (var i = 0; data.drinks.strDrink; i++) {
//                     printResults(lockRes[i].strDrink);
//                 }
//             }


//             var drinkname = document.createElement('p');
//             drinkname.textContent = data.drinks[i].strDrink;
//             document.getElementById('result-content').append(drinkname);

//             var drinkpicture = document.createElement('img');
//             drinkpicture.setAttribute("src", data.drinks[i].strDrinkThumb);
//             document.getElementById('result-content').appendChild(drinkpicture);

//         })
        
// }