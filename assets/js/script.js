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
    var URL2 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchInputVal;
    let drinksname = fetch(URL);
    let whattypeAlcohol = fetch(URL2);

    // let drinksname = fetch(URL).then(resp =>resp.json());
    // let whattypeAlcohol = fetch(URL2).then(resp => resp.json());

    // const cocktailsData = async function () {
    //     let results = await Promise.all([drinksname, whattypeAlcohol]);
    //     console.log(results);

    // }();

    Promise.all([drinksname, whattypeAlcohol])
    .then( files => {
        files.forEach(file => {
            process( file.json() )
        })
    })
    // .catch(err=> {
    // });
    let process = (prom) => {
        prom.then(data =>{
            cocktailsData = data.drinks === null ? []: data.drinks;
            printResults(cocktailsData);
            checkError(cocktailsData);
        });
    }
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
        // resultContentEl.innerHTML = `<div class="wrapper"><div class="col-12 col-md-9 p-3 text-light" id="results" ><div class="results-wrapper" id="result-content"><p>NO Search Found!</p></div></div></div>`;
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
