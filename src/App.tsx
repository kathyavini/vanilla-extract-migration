import { useState } from 'react';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Vanilla Extract Playground</h1>
      <p>
        Here I'll be putting a few elements to play around with themeing using
        Vanilla extract
      </p>
      <p>
        I'll be mostly pulling from my previous projects Member's Only for
        minima styles and Shopping Cart for more involved styles
      </p>

      <button>Primary</button>
      <button>Secondary</button>
      <button>Tertiary</button>

      <form method="POST" action="" encType="multipart/form-data">
        <label htmlFor="name">Recipe Name: *</label>
        <input
          id="name"
          name="name"
          placeholder="Name"
          value="<%- locals.recipe ? recipe.name : '' %>"
        />

        <label htmlFor="description">Recipe Description: (optional) </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"></textarea>

        <label htmlFor="ingredients">
          Recipe Ingredients: *
          <p className="form-hint">
            Please begin each ingredient on its own line and start each line
            with a dash
          </p>
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          placeholder={`- 1 red onion
- 4 cloves of garlic`}
          rows={8}></textarea>

        <label htmlFor="steps">
          Recipe Steps: *
          <p className="form-hint">
            Please begin each step on its own line and start each line with a
            dash
          </p>
        </label>
        <textarea
          id="steps"
          name="steps"
          placeholder={`- chop the onions and garlic
- heat oil in the pan`}
          rows={8}></textarea>

        <label htmlFor="source-link">
          Link to original source for the recipe (if applicable):
        </label>
        <input
          id="source-link"
          name="sourceLink"
          placeholder="e.g. https://minimalistbaker.com/easy-tofu-pad-thai/"
          value="<%- locals.recipe ? recipe.sourceLink : '' %>"
        />

        <label htmlFor="source-text">Source link text (optional): </label>
        <input
          id="source-text"
          name="sourceText"
          placeholder="e.g. Easy Tofu Pad Thai - Minimalist Baker"
          value="<%- locals.recipe ? recipe.sourceText : '' %>"
        />

        <fieldset className="options">
          <legend>Choose categories:</legend>
          <div>
            <input
              type="checkbox"
              id="<%= category._id %>"
              name="categories"
              value="<%= category._id %>"
            />
            <label htmlFor="<%= category._id %>">Option</label>
          </div>
        </fieldset>

        <p className="image-preview-label">Image preview</p>
        <img className="image-preview" src="" />
        <input type="hidden" name="imagePath" value="<%= recipe.image %>" />

        <label htmlFor="recipe-image">Upload a different image: </label>

        <label htmlFor="recipe-image">
          Upload an image for your recipe: *{' '}
        </label>

        <input
          id="recipe-image"
          type="file"
          name="recipeImage"
          accept="image/*"
        />

        <label htmlFor="admin-password">Admin password: *</label>
        <input id="admin-password" type="password" name="adminPassword" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
