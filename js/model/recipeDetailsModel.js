
export class RecipeDetailsModel {
    constructor(id) {
        this.id = id
    }

    recipeDetailsModel(callback) {
        let http = new XMLHttpRequest();
        http.open("get", `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        http.send();

        http.addEventListener("readystatechange", function () {

            if (http.readyState == 4 && http.status == 200) {
                let recipe = JSON.parse(http.response).recipe;
                callback(recipe);

            }

        })
    }

}