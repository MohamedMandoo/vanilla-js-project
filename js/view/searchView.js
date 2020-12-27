


import { searchResultContainer, searchInp } from "../element.js";


export function searchTerm() {

    return searchInp.value;

};


export function displaySearchResult(recipes) {


    let temp = ``


    for (let i = 0; i < recipes.length; i++) {

        temp += `
                
                <div class="media py-3">
                                <img src="${recipes[i].image_url}" class="align-self-center rounded-circle item-img mr-3" alt="...">
                                <div class="media-body">
                                <a href="#${recipes[i].recipe_id}">
                                    <h5 class="mt-0">${recipes[i].title}</h5>
                                    <p>by <span>${recipes[i].publisher}</span></p>
                                    </a>
                                </div>
                            </div>
    
                `

    }

    searchResultContainer.innerHTML = temp;

};

