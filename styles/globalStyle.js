import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  ul, li{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a , a:hover {
    text-decoration: none !important;
    cursor: pointer;
    color: black;
  }
  .padding{
    padding: 100px 0;
  }
`;
export default GlobalStyle;
