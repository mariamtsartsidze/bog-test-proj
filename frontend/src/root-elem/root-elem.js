import { LitElement, css, html } from 'lit-element';
import '../transaction/transaction';
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
      .header {
        background-color: white;
        height: 4vh;
        font-size: 13px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: grey;
      }
      .footer {
        background-color: white;
        height: 7.4vh;
        text-align: center;
        font-size: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: grey;
      }
      .section {
        position: relative;
        width: 100vw;
        height: 88.6vh;
        background-color: #d2ddeb;
      }
      .main-content {
        position: absolute;
        top: 3%;
        left: 50%;
        transform: translate(-50%);
        width: 44vw;
        height: 56.1vh;
      }
      .list-actions {
        height: 11%;
        background-color: white;
      }
      .records-num {
        height: 9%;
      }
      .cards-holder {
        height: 70%;
        background-color: white;
      }
      .list-footer {
        height: 10%;
        background-color: #a1c4ff;
      }
    `;
  }

  render() {
    return html`
      <div class="header">
        <div>hello user</div>
      </div>
      <div class="section">
        <div class="main-content">
          <div class="list-actions"></div>
          <div class="records-num"></div>
          <div class="cards-holder">
            ${this.transactions.map(i => html`<transaction-elem .transaction=${i}> </transaction-elem>`)}
          </div>
          <div class="list-footer"></div>
        </div>
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
