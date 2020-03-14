import { LitElement, css, html } from 'lit-element';
/**
 * @customElement
 * @polymer
 */
class RootElem extends LitElement {
  static get properties() {
    return {
      transactions: { type: Array },
    };
  }

  constructor() {
    super();

    this._transactions = [];

    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', 'http://localhost:3000/transactions', true);
    req.onload = () => {
      this.transactions = req.response.transactions;
      console.log('transactions: ', this.transactions);
    };
    req.send(null);
  }

  set transactions(val) {
    console.log('gonan set val: ', val);
    let oldVal = this._transactions;
    this._transactions = [...val];
    this.requestUpdate('transactions', oldVal);
  }

  get transactions() {
    console.log('im getting: ', this._transactions);
    return this._transactions;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .header {
        background-color: #f5fafa;
        height: 6vh;
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: grey;
      }
      .footer {
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
      .section {
        width: 100vw;
        height: 85vh;
        background-color: #d2ddeb;
      }
    `;
  }

  render() {
    return html`
      <div class="header">
        <div>hello user</div>
      </div>
      <div class="section">
        ${this.transactions.map(i => html`<div>${i}</div>`)}
      </div>
      <div class="footer">
        <div>
          <div>2020</div>
          <div>payment menagement</div>
        </div>
      </div>
    `;
  }

}

window.customElements.define('root-elem', RootElem);
