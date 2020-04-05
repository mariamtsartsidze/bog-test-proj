import { css } from "../../node_modules/lit-element/lit-element.js";
export const layoutStyles = css`
  /** widths */
  /** mobile */
  @media only screen and (max-width: 599px) {
    .responsive-width {width: 100%}
    .user-optional-padding {padding-right: 4px;}
    .card-width {width: 100vw;}
    .vert-div-vis {display: block}
  }

  /** tiny-mobile */
  @media only screen and (max-width: 360px) {
    .responsive-width {width: 100%}
    .user-optional-padding {padding-right: 4px;}
    .card-width {width: 100vw;}
    .vert-div-vis {display: none}
  }

  /** tablet */
  @media only screen and (min-width: 600px) {
    .responsive-width {width: 80vw}
    .user-optional-padding {padding-right: 0px;}
    .card-width {width: 50vw;}
    .vert-div-vis {display: block}
  }

  /** smaller desktop */
  @media only screen and (min-width: 768px) {
    .responsive-width {width: 60vw}
    .user-optional-padding {padding-right: 0px;}
    .card-width {width: 40vw;}
    .vert-div-vis {display: block}
  }

  /** desktop */
  @media only screen and (min-width: 1000px) {
    .responsive-width {width: 60vw}
    .user-optional-padding {padding-right: 0px;}
    .card-width {width: 29vw;}
    .vert-div-vis {display: block}
  }

  /** bigger desktop */
  @media only screen and (min-width: 1300px) {
    .responsive-width {width: 44vw}
    .user-optional-padding {padding-right: 0px;}
    .card-width {width: 21vw;}
    .vert-div-vis {display: block}
  }

  /** heights */
  /** smaller mobile */
  @media only screen and (max-height: 619px) {
    .responsive-height {height: 80vh;}
    .card-height {height: 50vh;}
  }

  /** mobile */
  @media only screen and (min-height: 620px) {
    .responsive-height {height: 70vh;}
    .card-height {height: 50vh;}
  }

  /** desktop */
  @media only screen and (min-height: 800px) {
    .responsive-height {height: 56.1vh;}
    .card-height {height: 42vh;}
  }

  /** tablet */
  @media only screen and (min-height: 1000px) {
    .responsive-height {height: 50vh;}
    .card-height {height: 42vh;}
  }

  /** longer tablet */
  @media only screen and (min-height: 1150px) {
    .responsive-height {height: 40vh;}
    .card-height {height: 40vh;}
  }


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
    background-color: var(--section-blue);
  }
  .main-content {
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translate(-50%);
  }
`;