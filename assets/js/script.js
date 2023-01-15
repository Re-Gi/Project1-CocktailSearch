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

    var URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchInputVal;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            cocktailsData = data.drinks === null ? [] : data.drinks;
            printResults(cocktailsData);
            console.log(cocktailsData);

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



// const searchFormInput = document.querySelector("#search-form");
// searchFormInput.addEventListener("submit", () =>{
//     cocktailsData = [];
//     getResults(URL + searchFormInput.value);
//     checkError();
// });

function checkError(){
    setTimeout(() =>{
        if(cocktailsData.length === 0){
        resultContentEl.innerHTML = `<div class=Error<h2>Error Not Found!</h2></div>`;
        resultsContainer.innerHTML = "";
    } else {
        printResults(cocktailsData);
    }

    }, 1000);
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




