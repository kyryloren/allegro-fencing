import { createGlobalStyle } from 'styled-components';
import media from './media';

// https://github.com/necolas/normalize.css
const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
`;

const GlobalStyle = createGlobalStyle`
  ${normalize};

  :root {
    --font-family: 'neue-haas-grotesk-display', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-family-text: 'neue-haas-grotesk-text', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --background: #f7eded;
    --text: #101010;
    --secondary: #a2a2a2;
    --bright: #FCFCFC;
    --error: #FC5E5E;
  }
  #___gatsby {
    overflow: hidden !important;
  }
  html {
    box-sizing: border-box;
    width: 100%;
  }
  /* * {
    border: 1px solid #f00 !important;
  } */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
    text-rendering: optimizelegibility;
    overflow-x: hidden;
    background: var(--background);
    color: var(--text);
    font-family: var(--font-family);
    overscroll-behavior-y: none;
  }
  main {
    position: relative;
    padding-top: 10rem;

    ${media.tablet`padding-top: 14rem;`};
  }
  img {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  p {
    font-family: var(--font-family-text);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ol, ul {
    list-style: none;
  }
  button {
    display: inline-block;
    overflow: visible;
    margin: 0;
    padding: 0;
    border: 0;
    background: none transparent;
    color: inherit;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    font: inherit;
    line-height: normal;
    user-select: none;

    :focus {
      outline: none;
    }
    :not(:disabled) {
      cursor: pointer;
    }
  }
  input {
    all: unset;
  }
  /* .cursor {
    width: 60px;
    height: 60px;
    border: 2px solid var(--text);
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode, width, height;
    z-index: 9999;
    mix-blend-mode: difference;
  }
  .cursor--hidden {
    opacity: 0;
  }
  .cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
    background-color: var(--text);
    width: 80px;
    height: 80px;
  }
  .cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
    background-color: var(--text);
    width: 50px;
    height: 50px;
  } */
`;

export default GlobalStyle;
