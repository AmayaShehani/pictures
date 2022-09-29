class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer id="sticky-footer" class="flex-shrink-0 py-4 ">
            <div class="container text-center">
                <small>Copyright &copy; 2022 Institute of Art Design. All rights reserved. </small>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);