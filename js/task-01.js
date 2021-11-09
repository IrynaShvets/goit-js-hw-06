const numberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", numberOfCategories.length);

const categoryAndElements = [];

numberOfCategories.forEach((element) => {
    categoryAndElements.push
        (`
Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("ul li").length}
`)
    
});

console.log(...categoryAndElements);


