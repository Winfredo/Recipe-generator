import { useState } from "react";
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
          <button>Add ingredient</button>
        </form>
        {ingredients.length > 0 ? <section>
          <div>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                </div>
                {ingredients.length >=4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section> : null}
      </div>
    </main>
  );
}
