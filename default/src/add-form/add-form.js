import { LitElement, css, html, unsafeCSS } from "../../node_modules/lit-element/lit-element.js";
import { genericButtonStyles } from "../styles/btn-generic.js";
import { layoutStyles } from "../styles/layout.js";

class AddFormComponent extends LitElement {
  static get properties() {
    return {
      title: {
        type: String
      },
      amount: {
        type: Number
      },
      category: {
        type: String
      },
      execDate: {
        type: String
      },
      comment: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.resetForm();
  }

  fireCloseEvent() {
    this.dispatchEvent(new CustomEvent('form-closed', {
      detail: {
        open: false
      }
    }));
  }

  resetForm() {
    this.title = '';
    this.amount = 0;
    this.category = 'payment service';
    this.execDate = dateFormat(new Date(), 'yyyy-mm-dd');
    this.comment = '';
  }

  fireSaveEvent() {
    this.dispatchEvent(new CustomEvent('item-saved', {
      detail: {
        item: {
          title: this.title,
          amount: this.amount,
          category: this.category,
          execDate: this.execDate,
          comment: this.comment
        }
      }
    }));
    this.resetForm();
    this.fireCloseEvent();
  }

  handleTitle(e) {
    this.title = e.target.value;
  }

  handleAmount(e) {
    this.amount = e.target.value;
  }

  handleCategory(e) {
    this.category = e.target.value;
  }

  handleExecDate(e) {
    this.execDate = e.target.value;
  }

  handleComment(e) {
    this.comment = e.target.value;
  }

  static get styles() {
    return [layoutStyles, genericButtonStyles, css`
      .card {
        display: block;
        background-color: white;
      }

      .add-title {
        font-size: 11px;
      }

      .upper-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #818181;
        padding-left: 7px;
        padding-right: 4px;
        padding-top: 4px;
      }

      .close-icon {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      .form-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 11%;
        padding-right: 11%;
        padding-top: 2vh;
        height: 84%;
      }

      .title {
        width: 63%;
      }

      .amount {
        width: 33%;
      }

      input[type=text], input[type=number], input[type=date], select, textarea {
        padding: 1.1vh 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        outline: false;
        color: var(--form-mid-blue);
      }

      textarea {
        height: 4.5vh;
      }

      input:focus {
          outline: none !important;
          border:1px solid var(--form-mid-blue);
      }

      select:focus {
          outline: none !important;
          border:1px solid var(--form-mid-blue);
      }

      textarea:focus {
          outline: none !important;
          border:1px solid var(--form-mid-blue);
      }

      .first-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .form-field-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      label {
        font-size: 11px;
        padding-bottom: 3px;
        color: var(--form-mid-blue);
      }

      .select-wrapper {
        height: 38px;
      }

      select {
        width: 100%;
        height: 100%;
        background-color: white;
        -webkit-appearance: none;
      }

      input[type="date"]::-webkit-calendar-picker-indicator {
        color: transparent;
        background: none;
        z-index: 1;
      }

      .custom-indicator {
        position: absolute;
        top: 25px;
        right: 4px;
        pointer-events: none;
        border: none;
        background: transparent;
        padding: 0px;
        color: var(--transaction-grey);
      }

      .custom-indicator-icon {
        width: 20px;
        height: 20px;
      }

      .submit-button-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .submit-button {
        background-color: var(--form-mid-blue);
        color: var(--milky-white);
        width: 33%;
        height: 25px;
        margin-top: 5%;
      }
    `];
  }

  render() {
    return html`
      <div class="card card-width card-height">
        <div class="upper-row">
          <div class="add-title">ADD NEW PAYMENT</div>
          <iron-icon class="close-icon" icon="close" @click="${this.fireCloseEvent}"></iron-icon>
        </div>

        <div class="form-container">
          <div class="first-row">
            <div class="form-field-wrapper title">
              <label for="fname">Title</label>
              <input type="text" .value="${this.title}" @input=${this.handleTitle}>
            </div>

            <div class="form-field-wrapper amount">
              <label for="lname">Amount</label>
              <input type="number" .value="${this.amount}" @input=${this.handleAmount}>
            </div>
          </div>

          <div class="form-field-wrapper">
            <label for="category">Category</label>
            <div class="select-wrapper">
              <button type="button"  class="custom-indicator">
                <iron-icon icon="expand-more" class="custom-indicator-icon"></iron-icon>
              </button>
              <select id="category" name="category" .value="${this.category}" @input=${this.handleCategory}>
                <option value="payment service">payment service</option>
                <option value="gasoline">gasoline</option>
                <option value="food">food</option>
                <option value="charity">charity</option>
                <option value="transport">transport</option>
              </select>
            </div>
          </div>

          <div class="form-field-wrapper">
            <label>Date</label>
            <button type="button"  class="custom-indicator">
              <iron-icon icon="perm-contact-calendar" class="custom-indicator-icon"></iron-icon>
            </button>
            <input type="date" id="execDate" name="execDate" .value="${this.execDate}" @input=${this.handleExecDate}>
          </div>

          <div class="form-field-wrapper">
            <label>Comment</label>
            <textarea .value="${this.comment}" @input=${this.handleComment}></textarea>
          </div>
        
          <div class="submit-button-container">
            <button class="btn-generic submit-button" @click="${this.fireSaveEvent}">
              CREATE
            </button>
          </div>
        </div>
      </div>
    `;
  }

}

window.customElements.define('add-form', AddFormComponent);