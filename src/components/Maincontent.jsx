import { useState } from "react";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  let handleIngredient = (formData) =>{
    const newIngredient = formData.get("ingredient");
    setIngredients(prev => [...prev, newIngredient])
  }

  const ingredientListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <main>
      <div className="main-content">
        <form action={handleIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Get Recipe</button>
        </form>
        {ingredients.length > 0 && <IngredientsList ingredientListItems={ingredientListItems} ingredients={ingredients}  />}
      </div>
    </main>
  );
}
