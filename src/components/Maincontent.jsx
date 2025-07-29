import { useState } from "react";

export default function Main() {
  const [foodName, setFoodName] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  const fetchRecipe = async (e) => {
  e.preventDefault();
  if (!foodName.trim()) {
    alert("Please enter a food name.");
    return;
  }

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    const data = await res.json();

    if (data.meals) {
      setRecipe(data.meals[0]);
      setError("");
    } else {
      setRecipe(null);
      setError(`No recipe found for "${foodName}". Please try another food.`);
    }
  } catch (err) {
    console.log("Error Message", err);
    setRecipe(null);
    setError("Error fetching recipe.");
  }
};

  return (
    <main>
      <div className="main-content">
        <form className="add-ingredient-form" onSubmit={fetchRecipe}>
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
            value={foodName}
            onChange={(e) => {
              const value = e.target.value;
              setFoodName(value);

              if (value.trim() === "") {
                setRecipe(null); 
                setError(""); 
              }
            }}
          />
          <button type="submit">Get Recipe</button>
        </form>

        {/* Show error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Show recipe result */}
        {recipe && (
          <div className="recipe-display">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>Ingredients:</h3>
            <ul>
              {Array.from({ length: 20 }, (_, i) => i + 1)
                .map((n) => ({
                  ing: recipe[`strIngredient${n}`],
                  measure: recipe[`strMeasure${n}`],
                }))
                .filter((i) => i.ing && i.ing.trim() !== "")
                .map((i, idx) => (
                  <li key={idx}>
                    {i.measure} {i.ing}
                  </li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.strInstructions}</p>
          </div>
        )}
      </div>
    </main>
  );
}
