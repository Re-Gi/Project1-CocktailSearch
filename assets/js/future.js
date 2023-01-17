var drinkId = localStorage.getItem("id");
// var data = localStorage.getItem("drinksearch");

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

    document.querySelector('#DrinkName').textContent = drinkArr.strDrink;

    var drinkImg = drinkArr.strDrinkThumb;
    // var drinkIng = drinkArr.strMeasure + i + " " drinkArr.strIngredient + i;
    var drinkIns = drinkArr.strInstructions;

    document.querySelector('#thumbnail').setAttribute('src', drinkImg);
    document.querySelector('#instructions').textContent = drinkIns;

    var measureArr = [
        drinkArr.strMeasure1, 
        drinkArr.strMeasure2, 
        drinkArr.strMeasure3, 
        drinkArr.strMeasure4, 
        drinkArr.strMeasure5, 
        drinkArr.strMeasure6, 
        drinkArr.strMeasure7, 
        drinkArr.strMeasure8, 
        drinkArr.strMeasure9, 
        drinkArr.strMeasure10, 
        drinkArr.strMeasure11, 
        drinkArr.strMeasure12, 
        drinkArr.strMeasure13, 
        drinkArr.strMeasure14, 
        drinkArr.strMeasure15,
    ]

    var ingredientsArr = [
        drinkArr.strIngredient1, 
        drinkArr.strIngredient2, 
        drinkArr.strIngredient3, 
        drinkArr.strIngredient4, 
        drinkArr.strIngredient5, 
        drinkArr.strIngredient6, 
        drinkArr.strIngredient7, 
        drinkArr.strIngredient8, 
        drinkArr.strIngredient9, 
        drinkArr.strIngredient10, 
        drinkArr.strIngredient11, 
        drinkArr.strIngredient12, 
        drinkArr.strIngredient13, 
        drinkArr.strIngredient14, 
        drinkArr.strIngredient15,
    ]

    var recipeData = { 
        title: drinkArr.strDrink,
        ingr: [],
    };

    for (var i=0; i <= 15; i++) {
        // var measureVal = 'strMeasure' + i;
        if (ingredientsArr[i] !== null && measureArr[i] !== null){

            recipeData.ingr.push(measureArr[i] + ' ' + ingredientsArr[i])

            var ingredientEl = document.createElement('li');
            ingredientEl.textContent = measureArr[i] + ' ' + ingredientsArr[i];
            document.querySelector('#ingredients').appendChild(ingredientEl);
            
        } else if (ingredientsArr[i] !== null && measureArr[i] === null){

            var ingredientEl = document.createElement('li');
            ingredientEl.textContent = ingredientsArr[i];
            document.querySelector('#ingredients').appendChild(ingredientEl);

        } else {
            break;
        }
    }
    console.log(recipeData)
    if (localStorage.getItem(recipeData.title) !== null) {
        var nutritionDataLocal = localStorage.getItem(recipeData.title);
        console.log(JSON.parse(nutritionDataLocal));
        displayNutrition(JSON.parse(nutritionDataLocal));
    } else {
    getNutrition(recipeData);
    }
}

function getNutrition(recipeData){

    fetch('https://api.edamam.com/api/nutrition-details?app_id=e92b2fbc&app_key=ab699bffa43640de9198130a40b0528d', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipeData),
    })
    .then((response) => response.json())
    .then((nutritionData) => {
        console.log('Success:', nutritionData);
        localStorage.setItem(recipeData.title, JSON.stringify(nutritionData))
        displayNutrition(nutritionData);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function displayNutrition(data) {

    document.querySelector('#calories-text').textContent = data.calories;

    var sugarData = data.totalNutrients.SUGAR;
    document.querySelector('#sugars-text').textContent = sugarData.quantity.toFixed(1) + sugarData.unit;

}

// getData = ()=>{
//     data.JSON.parse(data);
    
// }

getDrink();