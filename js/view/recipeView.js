import { recipeDetailsContainer } from '../element.js'


export function displayRecipeDetails(recipe) {


    let ingredients = recipe.ingredients;
    let markUp = `
    
    <h4 class="tomato my-3 text-center">${recipe.title}</h4>
                    <img src="${recipe.image_url}" class="w-100 py-3">
                    <div>

                        <ul class="fa-ul d-flex flex-wrap">`

    for (let i = 0; i < ingredients.length; i++) {
        markUp += `<li class="w-50 py-1 "><span class="fa-li"><i class="fas fa-utensils tomato "></i></span><p class="tomato">${ingredients[i]}</p>
                        `
    }

    `   </ul>`


    recipeDetailsContainer.innerHTML = markUp;






};