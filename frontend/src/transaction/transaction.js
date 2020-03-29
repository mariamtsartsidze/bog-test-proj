import { LitElement, css, html, unsafeCSS } from 'lit-element';
/**
 * @customElement
 * @polymer
 */
class TransactionElem extends LitElement {
  static get properties() {
    return {
      transaction: { type: Object },
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .host {
        width: 100%;
        display: block;
      }
      .open {
        height: 34%;
        background-color: #f3f4f8;
      }
      .closed {
        height: 18%;
        background-color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="${this.open ? 'open' : 'closed'} host">${this.transaction.title} -- ${this.transaction.category} -- ${this.open}</div>
    `;
  }

}

window.customElements.define('transaction-elem', TransactionElem);
