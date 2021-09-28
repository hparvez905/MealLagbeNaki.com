const searchBtn=document.getElementById('search-button');
const SearchInput=document.getElementById('input-text');
SearchInput.addEventListener("keypress",function (event) {
  if (event.key=="Enter") {
    searchBtn.click();
    
  }
  
})


const searchFood =()=>{
    const findFood= document.getElementById('input-text')
    const searchText=findFood.value;
  //  console.log(searchText);
    findFood.value='';
    if (searchText == ''){

     // write someting

    }
    else{
      const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;  
      fetch(url)
      .then(res =>res.json())
      .then(data =>displayResult(data.meals));

    }


   



}

const displayResult = meals =>{
    //console.log(meals)
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML='';

      meals.forEach(meal  => {
        console.log(meal);
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
        <div onclick="fooddetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
         
        </div>
      </div>
     
      `
     
      searchResult.appendChild(div);
      
    });

  
    
    


}

const fooddetails =mealId=>{                                                          // other way of fetch
                                                                                      // const fooddetails = async mealId=>{  
  console.log(mealId)
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;         // same line
   fetch(url)                                                                          // const res = await fetch (url);
  .then(res =>res.json())                                                              // const data = await res.json(); 
  .then(data =>displayMealDetails(data.meals[0]))                                      //displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal=>
{
  console.log(meal)
  const mealDetails = document.getElementById('meal-details');
  mealDetails.innerHTML='';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${meal.strMeal}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">wanna watch</a>
  </div>
  
  `
  mealDetails.appendChild(div);



}