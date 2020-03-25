import { LitElement, css, html } from 'lit-element';
import '../transaction/transaction';
import { genericButtonStyles } from '../styles/btn-generic';
import { layoutStyles } from '../styles/layout';

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
    return [
      genericButtonStyles,
      layoutStyles,
      css`
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

        .add-button {
          margin-left: 2px;
          margin-right: 2px;
          background-color: white; /* Blue background */
          color: #a1c4ff; /* White text */
          padding: 8px 10px;
          font-size: 7px;
          border-radius: 3px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        /* Darker background on mouse-over */
        .add-button:hover {
          background-color: #fafafa; /** f5f5f5, f7f7f7, fafafa */
        }

        .add-icon {
          width: 28px;
          height: 28px;
          margin-right: 3px;
        }

        .vertical-divider {
          height: 70%;
          border-left: 1px solid #ededed;
        }

        .search-space {
          display: flex;
          width: 140px;
          height: 100%;
        }

        .filter-space {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 108px;
          height: 100%;
        }

        .filter-button {
          background-color: #a7bedb;
          color: white;
          width: 80px;
          height: 20px;
          border-radius: 10px;
        }

        .input-container {
          display: -ms-flexbox; /* IE10 */
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: #cccccc;
        }

        .input-field {
          width: 100%;
          outline: none;
          border: none;
          font-size: 9px;
        }

        .input-icon {
          width: 32px;
          height: 32px;
          margin-left: 8px;
          margin-right: 2px;
        }

        ::placeholder {
          color: #cccccc;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="header">
        <div>hello user</div>
      </div>
      <div class="section">
        <div class="main-content">
          <div class="list-actions">
            <button class="add-button btn-generic">
              <iron-icon class="add-icon" icon="add-circle-outline"></iron-icon>
              <div>ADD PAYMENT</div>
            </button>
            <div class="vertical-divider"></div>
            <div style="flex-grow: 1"></div>
            <div class="vertical-divider"></div>
            <div class="search-space">
              <div class="input-container">
                <iron-icon class="input-icon" icon="search"></iron-icon>
                <input class="input-field" type="text" placeholder="filter by any property..." name="usrnm">
              </div>
            </div>
            <div class="vertical-divider"></div>
            <div class="filter-space">
              <button class="filter-button btn-generic">Filter</button>
            </div>
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
