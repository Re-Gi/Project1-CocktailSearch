// url must have drink name
// var query = document.location.search.split('=').pop();
var resultContentEl = document.querySelector('.container-future');
var loading = document.querySelector('.container-future');
var URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
var cocktailsData;

loading.className = ".container-future";
setTimeout(() => {
  var id = localStorage.getItem("id");
  getData(URL + id);
});

function getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cocktailsData = data.drinks === null ? [] : data.drinks;
        printResults(cocktailsData);
      });
  }

  
function printResults(cocktails) {
    var drinkArray = []
    var drinkid = cocktails[0];
    var items = "";
    for (var i=1; i <=15; i++){
        if (drinkid["strIngredient" + i]!=null) {
            drinkArray.push(drinkid["strIngredient" + i]);
        }
    }
    drinkArray.forEach(function (ingredient){
        items += `<ol id="ingredients">${ingredient}</li>`
    });


    const DOM = `<div class="container-future">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8" id="wide">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <img src="${drinkid.strDrinkThumb}" class="img-fluid rounded-start" alt="..."/>
                                    </article>
                                </div>

                                <div class="tile is-parent">
                                    <h1 class="card-title">${drinkid.strDrink}</h1>
                                    <article class="tile is-child">
                                        <p class="title">Ingredients<p>
                                            <ol id="ingredients">
                                                <li>${items}</li>  
                                            </ol>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child">
                                        <p class="title">Instructions</p>
                                        <div class="content" id="instructions">
                                        <p>Ingredients${drinkid.strInstructions}</p>
                                        <br>
                                            <a href="index.html#search-input" class="button" id="SFDButton">Search for Drinks</a>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
      resultContentEl.innerHTML = DOM;
}



