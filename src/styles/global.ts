import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'League Spartan';
  }
  body{
    background-color: #141625;
  }
`