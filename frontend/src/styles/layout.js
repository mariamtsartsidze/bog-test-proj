import { css } from "lit-element";

export const layoutStyles = css`
  /** widths */
  /** mobile */
  @media only screen and (max-width: 599px) {
    .responsive-width {width: 100%}
    .user-optional-padding {padding-right: 4px;}
  }

  /** tablet */
  @media only screen and (min-width: 600px) {
    .responsive-width {width: 80vw}
    .user-optional-padding {padding-right: 0px;}
  }

  /** smaller desktop */
  @media only screen and (min-width: 768px) {
    .responsive-width {width: 60vw}
    .user-optional-padding {padding-right: 0px;}
  }

  /** desktop */
  @media only screen and (min-width: 1000px) {
    .responsive-width {width: 44vw}
    .user-optional-padding {padding-right: 0px;}
  }

  /** heights */
  /** smaller mobile */
  @media only screen and (max-height: 619px) {
    .responsive-height {height: 80vh;}
  }

  /** mobile */
  @media only screen and (min-height: 620px) {
    .responsive-height {height: 70vh;}
  }

  /** desktop */
  @media only screen and (min-height: 800px) {
    .responsive-height {height: 56.1vh;}
  }

  /** tablet */
  @media only screen and (min-height: 1000px) {
    .responsive-height {height: 50vh;}
  }

  /** longer tablet */
  @media only screen and (min-height: 1150px) {
    .responsive-height {height: 40vh;}
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