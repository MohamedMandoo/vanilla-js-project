
import { searchBtn } from './js/element.js'
import { displaySearchResult, searchTerm } from './js/view/searchView.js'
import { SearchModel } from './js/model/searchModel.js';
import { RecipeDetailsModel } from "./js/model/recipeDetailsModel.js";
import { displayRecipeDetails } from './js/view/recipeView.js';





let controlSearch = () => {


    let query = searchTerm()
    let search = new SearchModel(query);
    search.getSearchModel(displaySearchResult);


}

searchBtn.addEventListener("click", controlSearch);


let controlRecipe = () => {



    let recipeId = window.location.hash.replace("#", "")
    let recipeDetails = new RecipeDetailsModel(recipeId);
    recipeDetails.recipeDetailsModel(displayRecipeDetails);

}






window.addEventListener("hashchange", controlRecipe)



