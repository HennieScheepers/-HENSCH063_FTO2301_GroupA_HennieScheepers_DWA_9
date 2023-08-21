export class CustomComponent extends HTMLElement {
  constructor(title, author, published, imageLink, description) {
    // Calls the onstructor of HTMLElement
    super();

    // Initialisation of the class via the construcutor
    this.title = title;
    this.author = author;
    this.published = published;
    this.imageLink = imageLink;
    this.description = description;

    // creating an empty template
    const template = document.createElement("template");

    // filling the template up
    template.innerHTML = `
    <head>
      <link rel="stylesheet" href="./styles.css" />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
        rel="stylesheet"
      />

      <script src="./modules/scripts.js" type="module"></script>
    </head>
    
    <dialog class="overlay" data-list-active >
      <div class="overlay__preview"><img class="overlay__blur" data-list-blur src=""/><img class="overlay__image" data-list-image src="${this.imageLink}"/></div>
      <div class="overlay__content">
      <h3 class="overlay__title" data-list-title>${this.title} (${this.published})</h3>
      <div class="overlay__data" data-list-subtitle>${this.author}</div>
      <p class="overlay__data overlay__data_secondary" data-list-description>${this.description}</p>
      </div>
    
      <div class="overlay__row">
      <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
      </div>
    </dialog>`;
    this.template = template;
  }

  // called whenever the component is rendered
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.render();
    this.shadowRoot
      .querySelector("[data-list-close]")
      .addEventListener("click", this.toggleOverlay);
  }

  // a render method to "load" the component when needed
  render() {
    this.shadowRoot.appendChild(this.template.content);
  }

  // Simple toggle method
  toggleOverlay = () => {
    const overlay = this.shadowRoot.querySelector("[data-list-active]");
    overlay.toggleAttribute("open");
  };
}

customElements.define("custom-component", CustomComponent);
