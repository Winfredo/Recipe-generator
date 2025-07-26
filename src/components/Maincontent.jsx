import { useState } from "react";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  let handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(prev => [...prev, newIngredient])
  }

  const ingredientListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <main>
      <div className="main-content">
        <form onSubmit={handleSubmit} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>{ingredientListItems}</ul>
      </div>
    </main>
  );
}
