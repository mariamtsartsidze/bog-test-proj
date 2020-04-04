import { css } from "lit-element";

export const layoutStyles = css`
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
    width: 44vw;
    height: 56.1vh;
  }
`;