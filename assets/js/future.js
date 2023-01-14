// url must have drink id
    // var drinkId = document.location.search.split('=').pop();
var drinkId = "11007";

function getDrink() {
    var drinkQueryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;

    fetch(drinkQueryURL)
        .then(function (response) {
            if (!response.ok) {
                console.log('not ok');
                return;
            } else {
                return response.json();
            }
        })
        .then(function (drinkRes) {
            var drinkArr = drinkRes.drinks[0]
            printResults(drinkArr);
        })
}

function printResults(drinkArr) {
    console.log(drinkArr);

    var drinkImg = drinkArr.strDrinkThumb;
    // var drinkIng = drinkArr.strMeasure + i + " " drinkArr.strIngredient + i;
    var drinkIns = drinkArr.strInstructions;

    document.querySelector('#thumbnail').setAttribute('src', drinkImg);
    document.querySelector('#instructions').textContent = drinkIns;
}

getDrink();