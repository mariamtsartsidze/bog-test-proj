import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class RootElem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        header {
          background-color: #f5fafa;
          height: 6vh;
          font-size: 13px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: grey;
        }
        footer {
          background-color: #f5fafa;
          height: 9vh;
          text-align: center;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          color: grey;
        }
        section {
          width: 100vw;
          height: 83vh;
          background-color: #bdd8f2;
        }
      </style>
      <header>
        <div>hello user</div>
      </header>
      <section>
        <div>Main Content</div>
      </section>
      <footer>
        <div>
          <div>2020</div>
          <div>payment menagement</div>
        </div>
      </footer>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'root-elem'
      }
    };
  }
}

window.customElements.define('root-elem', RootElem);
