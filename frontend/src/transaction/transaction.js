import { LitElement, css, html, unsafeCSS } from 'lit-element';
import { layoutStyles } from '../styles/layout';

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

  getDate(dateTimeStr) {
    const date = new Date(dateTimeStr)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat('en-GB', options);
    return 'on ' + dateTimeFormat.format(date);
  }

  static get styles() {
    return [
      layoutStyles,
      css`
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
          background-color: var(--milky-white);
        }

        .main-content-row {
          padding-left: 16px;
          padding-right: 8px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .title-row {
          padding-top: 10px;
        }

        .amount-row {
          padding-top: 3px;
        }

        .category {
          border: 1px solid var(--form-mid-blue);
          color: var(--form-mid-blue);
          padding: 3px 8px 3px 8px;
          text-align: center;
          border-radius: 15px;
          font-size: 9px;
        }

        .title {
          color: var(--mild-black);
          font-size: 15px;
        }

        .exec-date {
          color: var(--transaction-grey);
          font-size: 11px;
        }

        .amount {
          color: red;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
        }

        .currency {
          font-size: 9px;
          line-height: 7px;
        }

        .comment {
          padding-left: 20px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-top: 16px;
          font-size: 12px;
          line-height: 15px;
        }

        .visible {
          display: block;
        }

        .hidden {
          display: none;
        }

        .comment-tag {
          color: var(--mild-black);
        }

        .comment-text {
          color: var(--transaction-grey);
        }
      `
    ];
  }

  render() {
    return html`
      <div class="${this.open ? 'open' : 'closed'} host">
        <div class="main-content-row title-row">
          <div class="title">${this.transaction.title === '' ? '[no title]' : this.transaction.title}</div>
          <div class="exec-date">${this.getDate(this.transaction.execDate)}</div>
        </div>
        <div class="main-content-row amount-row">
          <div class="category">${this.transaction.category}</div>
          <div class="amount">
            <div>
              ${-this.transaction.amount}
            </div>
            <div class="currency">GEL</div>
          </div>
        </div>
        <div class="${this.open ? 'visible' : 'hidden'} comment">
          <div class="comment-tag">comment:</div>
          <div class="comment-text">${this.transaction.comment}</div>
        </div>
      </div>
    `;
  }

}

window.customElements.define('transaction-elem', TransactionElem);
