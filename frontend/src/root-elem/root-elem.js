import { LitElement, css, html } from 'lit-element';
import '../transaction/transaction';

// import '@polymer/iron-icon/iron-icon.js';
// import '@polymer/iron-icons/iron-icons.js';

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
        display: flex;
        flex-direction: row;
        align-items: center;
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
      .btn {
        margin-left: 2px;
        background-color: white; /* Blue background */
        border: none; /* Remove borders */
        color: #a7bedb; /* White text */
        padding: 8px 10px;
        font-size: 7px;
        font-weight: bold;
        cursor: pointer; /* Mouse pointer on hover */
        outline: none;

        display: flex;
        flex-direction: row;
        align-items: center;
      }

      /* Darker background on mouse-over */
      .btn:hover {
        background-color: #f0f0f0;
      }

      .btn:active {
        transform: translateY(3px);
      }

      .add-icon {
        width: 28px;
        height: 28px;
        margin-right: 3px;
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
          <div class="list-actions">
            <button class="btn">
              <iron-icon class="add-icon" icon="add-circle-outline"></iron-icon>
              <div>ADD PAYMENT</div>
            </button>
          </div>
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
