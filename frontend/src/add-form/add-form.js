import { LitElement, css, html, unsafeCSS } from 'lit-element';
// import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";
// import { NeonAnimationRunnerBehavior } from "@polymer/neon-animation/neon-animation-runner-behavior.js";
/**
 * @customElement
 * @polymer
 */
// class AddFormComponent extends mixinBehaviors([NeonAnimationRunnerBehavior], LitElement) {
class AddFormComponent extends LitElement {
  static get properties() {
    return {
      prop1: { type: String },
    };
  }

  constructor() {
    super();
    this.prop1 = 'amanda'
  }

  fireCloseEvent() {
    this.dispatchEvent(new CustomEvent('form-closed', { detail: { open: false } }));
  }

  static get styles() {
    return css`
      .card {
        display: block;
        background-color: white;
        width: 21vw;
        height: 42vh;
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
        padding-left: 11%;
        padding-right: 11%;
        padding-top: 5%;
      }

      .title {
        width: 63%;
      }

      .amount {
        width: 33%;
      }

      input[type=text], input[type=number], input[type=date], select {
        padding: 10px 8px;
        /*margin: 8px 0;*/
        /*display: inline-block;*/
        border: 1px solid #ccc;
        border-radius: 4px;
        /*box-sizing: border-box;*/
        outline: none;
        outline: false;
        color: var(--form-mid-blue);
      }

      input:focus {
          outline: none !important;
          border:1px solid var(--form-mid-blue);
      }

      select:focus {
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
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="upper-row">
          <div class="add-title">ADD NEW PAYMENT</div>
          <iron-icon class="close-icon" icon="close" @click="${this.fireCloseEvent}"></iron-icon>
        </div>

        <div class="form-container">
          <form action="/action_page.php">
            <div class="first-row">
              <div class="form-field-wrapper title">
                <label for="fname">Title</label>
                <input type="text">
              </div>
              <div class="form-field-wrapper amount">
                <label for="lname">Amount</label>
                <input type="number">
              </div>
            </div>

            <div class="form-field-wrapper">
              <label for="category">Category</label>
              <div class="select-wrapper">
                <button type="button"  class="custom-indicator">
                  <iron-icon icon="expand-more" class="custom-indicator-icon"></iron-icon>
                </button>
                <select id="category" name="category">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            </div>

            <div class="form-field-wrapper">
              <label>Category</label>
              <button type="button"  class="custom-indicator">
                <iron-icon icon="perm-contact-calendar" class="custom-indicator-icon"></iron-icon>
              </button>
              <input type="date" id="execDate" name="execDate">
            </div>
          
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>
    `;
  }

}

window.customElements.define('add-form', AddFormComponent);
