import {createGlobalStyle} from 'styled-components';
import GlobalStylesTheme from './GlobalStyles.theme';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
  }

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    background-color: ${GlobalStylesTheme.bodyBg};
    color: ${GlobalStylesTheme.bodyColour};
    font-family: ${GlobalStylesTheme.fontFamilyBase};
    font-size: ${GlobalStylesTheme.fontSizeBase};
    font-weight: ${GlobalStylesTheme.fontWeightBase};
    line-height: ${GlobalStylesTheme.lineHeightBase};
    margin: 0;
    text-align: left;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${GlobalStylesTheme.headingsMarginBottom};
    margin-top: 0;
  }

  p {
    margin-bottom: ${GlobalStylesTheme.paragraphsMarginBottom};
    margin-top: 0;
  }

  abbr[title],
  abbr[data-original-title] {
    border-bottom: 0;
    cursor: help;
    text-decoration: underline;
    text-decoration: underline dotted;
    text-decoration-skip-ink: none;
    -webkit-text-decoration: underline dotted;
    -webkit-text-decoration-skip-ink: none;
  }

  address {
    font-style: normal;
    line-height: inherit;
    margin-bottom: 1rem;
  }

  ol,
  ul,
  dl {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: ${GlobalStylesTheme.dtFontWeight};
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: ${GlobalStylesTheme.fontWeightBolder};
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    background-color: transparent;
    color: ${GlobalStylesTheme.linkColour};
    text-decoration: ${GlobalStylesTheme.linkDecoration};
  }

  a:hover {
    color: ${GlobalStylesTheme.linkHoverColour};
    text-decoration: ${GlobalStylesTheme.linkHoverDecoration};
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ${GlobalStylesTheme.fontFamilyMonospace};
    font-size: 1em;
  }

  pre {
    margin-bottom: 1rem;
    margin-top: 0;
    overflow: auto;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    border-style: none;
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    caption-side: bottom;
    color: ${GlobalStylesTheme.tableCaptionColour};
    padding-bottom: ${GlobalStylesTheme.tableCellPadding};
    padding-top: ${GlobalStylesTheme.tableCellPadding};
    text-align: left;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: ${GlobalStylesTheme.labelMarginBottom};
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0;
  }

  legend {
  color: inherit;
    display: block;
    font-size: 1.5rem;
    line-height: inherit;
    margin-bottom: .5rem;
    max-width: 100%;
    padding: 0;
    white-space: normal;
    width: 100%;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    cursor: pointer;
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }
`;

export default GlobalStyles;
