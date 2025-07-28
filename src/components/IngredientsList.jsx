import React from 'react'

const IngredientsList = (props) => {
  return (
    <div>
      <section>
          <div>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{props.ingredientListItems}</ul>
                </div>
                {props.ingredients.length >=4 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>
    </div>
  )
}

export default IngredientsList
