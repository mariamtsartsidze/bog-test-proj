import { LitElement, css, html } from 'lit-element';
/**
 * @customElement
 * @polymer
 */
class TransactionElem extends LitElement {
  static get properties() {
    return {
      transaction: { type: Object },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`
      <div>${this.transaction.title} -- ${this.transaction.category}</div>
    `;
  }

}

window.customElements.define('transaction-elem', TransactionElem);
