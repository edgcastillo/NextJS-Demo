import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --mediumGray: #f2f2f2;
    --lightBlue: #87cefa;
    --lightRed: #cc5350;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGray);
    --offWhite: #ededed;
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height:2;
  }

  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 100px auto 0;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Content>{children}</Content>
    </>
  );
}
