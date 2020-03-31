import { LitElement, css, html } from 'lit-element';
import '../transaction/transaction';
import { genericButtonStyles } from '../styles/btn-generic';
import { layoutStyles } from '../styles/layout';


class RootElem extends LitElement {
  static get properties() {
    return {
      transactions: { type: Array },
      filterStr: { type: String },
      totalAmount: { type: Number },
      openTransactionIndex: { type: Number },
    };
  }

  constructor() {
    super();

    this._filterStr = '';
    this._transactions = [];
    this._totalAmount = 0;
    this._openTransactionIndex = -1;

    this.getFilteredTransactions();
  }

  set transactions(val) {
    console.log('gona set val: ', val);
    let oldVal = this._transactions;
    this._transactions = [...val];
    this.requestUpdate('transactions', oldVal);
  }

  get transactions() {
    console.log('im getting: ', this._transactions);
    return this._transactions;
  }

  set filterStr(val) {
    console.log('setting filterstr: ', val);
    this._filterStr = val;
  }

  get filterStr() {
    console.log('getting filterstr');
    return this._filterStr;
  }

  set totalAmount(val) {
    let oldVal = this._totalAmount;
    this._totalAmount = val;
    this.requestUpdate('totalAmount', oldVal);
  }

  get totalAmount() {
    return this._totalAmount.toFixed(2);
  }

  set openTransactionIndex(val) {
    let oldVal = this._openTransactionIndex;
    if (this._openTransactionIndex === val) {
      this._openTransactionIndex = -1;
    } else {
      this._openTransactionIndex = val;
    }
    this.requestUpdate('openTransactionIndex', oldVal);
  }

  get openTransactionIndex() {
    return this._openTransactionIndex;
  }

  handleInput(e) {
    this.filterStr = e.target.value;
  }

  getFilteredTransactions() {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', `http://localhost:3000/transactions?filter=${this.filterStr}`, true);
    req.onload = () => {
      this.transactions = req.response.transactions;
      console.log('transactions: ', this.transactions);
      this.updatetotalAmount();
    };
    req.send(null);
  }

  updatetotalAmount() {
    let total = 0;
    this.transactions.forEach(val => {
      total += val.amount;
      console.log(total);
    });
    this.totalAmount = total;
  }

  transactionClicked(index) {
    console.log(index);
    this.openTransactionIndex = index;
  }

  static get styles() {
    return [
      genericButtonStyles,
      layoutStyles,
      css`
        .list-actions {
          height: 11%;
          background-color: var(--milky-white);
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .records-num {
          height: 9%;
        }

        .cards-holder {
          height: 70%;
          background-color: var(--milky-white);
          overflow-y: auto;
        }
        
        .list-footer {
          height: 10%;
          background-color: #a1c4ff;
          color: var(--milky-white);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          padding-right: 8px;
        }

        .add-button {
          margin-left: 2px;
          margin-right: 2px;
          background-color: var(--milky-white);
          color: #a1c4ff;
          padding: 8px 10px;
          font-size: 7px;
          border-radius: 3px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        /* Darker background on mouse-over */
        .add-button:hover {
          /*background-color: #fafafa; /** f5f5f5, f7f7f7, fafafa */
          background-color: #f5f5f5;
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

        .horizontal-divider {
          width: 100%;
          border-top: 1px solid #d2ddeb;
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
          color: var(--milky-white);
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
          background-color: var(--milky-white);
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
        
        .author-picture {
          width: 63px;
          height: 62px;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="header">
        <!--<div>
          <img class="author-picture" .src="../images/nana2.png" />-->
          <div>
            hello user
          </div>
        <!--</div>-->
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
                <input class="input-field" type="text" placeholder="filter by any property..." .value="${this.filterStr}" @input=${this.handleInput}>
              </div>
            </div>
            <div class="vertical-divider"></div>
            <div class="filter-space">
              <button class="filter-button btn-generic" @click="${this.getFilteredTransactions}">
                Filter
              </button>
            </div>
          </div>
          <div class="records-num"></div>
          <div class="cards-holder">
            ${this.transactions.map((transaction, index) => html`
              <transaction-elem .transaction=${transaction} .open=${this.openTransactionIndex === index ? true : false} @click="${() => this.transactionClicked(index)}">
              </transaction-elem>
              <div class="horizontal-divider"></div>
            `)}
          </div>
          <div class="list-footer">
            <div style="font-size: 11px;">Total:</div>
            <div style="font-size: 20px;">${this.totalAmount}</div>
          </div>
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
