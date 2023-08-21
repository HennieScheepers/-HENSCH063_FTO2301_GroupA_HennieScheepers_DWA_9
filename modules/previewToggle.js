/**
 * The purpose of this even handler is to toggle the Preview overlay
 * (with attribute 'data-list-active) when the 'close' button on the preview
 * is clicked
 */
export const handlePreviewToggle = (event) => {
  // Variable to store the HTML element with the attribute 'data-list-active'
  const overlay = event.target.closest("overlay");
  overlay.toggleAttribute("open");
  console.log("!!!!");
};
