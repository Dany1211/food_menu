let food = document.querySelector(".food");

let indian = document.querySelector(`#indian`);
let american = document.querySelector(`#american`);
let canadian = document.querySelector(`#canadian`);
let thai = document.querySelector(`#thai`);
let british = document.querySelector(`#british`);
let russian = document.querySelector(`#russian`);
let mexican = document.querySelector(`#mexican`);

const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();
  showData(data.meals);
};

const searchRecipe = async () => {
  let input = document.querySelector(`#inputSearch`);
  input.addEventListener(`keydown`, async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();
      if (data.meals) {
        showData(data.meals);
      } else {
        food.innerHTML = `<p style="color: white; text-align: center;">No recipes found for "${inputValue}"</p>`;
      }
    }
  });
};

const showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meal) => `
      <div style="text-align:center">
        <div>
          <img src=${meal.strMealThumb} style="width:220px; border-radius:10px; border:1px solid yellow">
        </div>
        <h5>${meal.strMeal}</h5>
      </div>`
    )
    .join("");
};


fetchData("indian");


american.addEventListener(`click`, () => fetchData(`american`));
canadian.addEventListener(`click`, () => fetchData(`canadian`));
thai.addEventListener(`click`, () => fetchData(`thai`));
british.addEventListener(`click`, () => fetchData(`british`));
russian.addEventListener(`click`, () => fetchData(`russian`));
mexican.addEventListener(`click`, () => fetchData(`mexican`));


searchRecipe();
