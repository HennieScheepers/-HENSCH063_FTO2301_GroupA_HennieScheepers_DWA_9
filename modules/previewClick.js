import { CustomComponent } from "./components/CustomComponent.js";

/**
 * @typedef {preview} preview
 * @prop {string} title
 * @prop {string} author
 * @prop {string} description
 * @prop {string} imageLink
 * @prop {Date} published
 */
/**
 * Creates a preview of a book. This works in conjunction with the createOverlay function
 * to display preview of the book
 * @param {Event} event
 * @returns {preview}
 */
const createPreview = (event) => {
  const target = event.target.closest(".preview");
  const targetData = target.dataset;
  const date = new Date(targetData.previewPublished);

  return {
    title: targetData.previewTitle,
    author: targetData.previewAuthor,
    description: targetData.previewDescription,
    imageLink: targetData.previewImg,
    published: date.getFullYear(),
  };
};
/**
 * Gets the data of the items provided.
 * @param {Array} array - Takes an array
 */
export const handlePreviewClick = (event) => {
  event.preventDefault();
  const preview = createPreview(event);
  const component = new CustomComponent(
    preview.title,
    preview.author,
    preview.published,
    preview.imageLink,
    preview.description
  );
  const container = document.getElementById("container");
  container.appendChild(component);
  component.render();
  component.toggleOverlay();
};
