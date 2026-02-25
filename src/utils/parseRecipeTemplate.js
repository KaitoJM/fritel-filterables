import Handlebars from "handlebars";

/**
 * Compiles a UTD recipe HTML template with product data.
 * The template uses Handlebars syntax: {{variable}}, {{{html}}}, {{#if}}, {{#each}}.
 *
 * @param {string} templateHtml - Raw HTML string from the UTD API
 * @param {object} recipe - recipe object from getRecipes()
 * @returns {string} Rendered HTML
 */
export function parseRecipeTemplate(templateHtml, recipe) {
  const locationPageMeta = recipe.locationPageMeta ?? {};

  const data = {
    recipe_title: locationPageMeta.recipe_title,
    author: locationPageMeta.author,
    background_image: locationPageMeta.background_image,
    recipe_images: locationPageMeta.recipe_images,
    time: locationPageMeta.time,
    porties: locationPageMeta.porties,
    pieces: locationPageMeta.pieces,
    ingredienten: locationPageMeta.ingredienten,
    verder_nog_nodig: locationPageMeta.verder_nog_nodig,
    bereiding: locationPageMeta.bereiding,
    tips: locationPageMeta.tips,
    video: locationPageMeta.video,
  };

  const template = Handlebars.compile(templateHtml);
  return template(data);
}
