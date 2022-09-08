import * as styled from 'styled-components'

const AppStyles = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    overscroll-behavior-y: none;
    margin: 0;
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    /* hex color */
    --clr-black: #0e131b;
    --clr-white-primary: #ffffff;
    --clr-white-secondary: #f3f6f9;
    --clr-white-tertiary: #f7fafc;
    --clr-yellow: #fff100;
    --clr-red: #f64e60;
    --clr-orange: #ffa800;
    --clr-green: #1bc5bd;
    --clr-light-blue: #3699ff;
    --clr-blue-primary: #023243;
    --clr-blue-secondary: #01212c;
    --clr-blue-tertiary: #374c5f;
    --clr-grey-primary: #b5b5c3;
    --clr-grey-secondary: #e5eaee;
    --clr-blue-link: #1890ff;

    /* rgb color */
    --clr-black-rgb: 0, 0, 0;
    --clr-white-primary-rgb: 255, 255, 255;
    --clr-white-secondary-rgb: 243, 246, 249;
    --clr-white-tertiary-rgb: 247, 250, 252;
    --clr-yellow-rgb: 255, 241, 0;
    --clr-red-rgb: 246, 78, 96;
    --clr-orange-rgb: 255, 168, 0;
    --clr-green-rgb: 27, 197, 189;
    --clr-light-blue-rgb: 54, 153, 255;
    --clr-blue-primary-rgb: 2, 50, 67;
    --clr-blue-secondary-rgb: 1, 33, 44;
    --clr-blue-tertiary-rgb: 55, 76, 95;
    --clr-grey-primary-rgb: 181, 181, 195;
    --clr-grey-secondary-rgb: 229, 234, 238;

    /* font size */
    --font-main-title-modal: 19px;
    --font-main-title: 21px;
    --font-secondary: 13px;
    --font-caption: 13px;
    --font-button-text: 12px;
    --font-links: 13px;
  }

  .App {
    text-align: center;
  }
`

export default AppStyles
