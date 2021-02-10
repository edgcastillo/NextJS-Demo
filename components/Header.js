import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0 2rem;
  transform: skew(-7deg);
  a {
    color: var(--offWhite);
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const HeaderStyles = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  display: grid;
  align-items: center;
  background: var(--lightRed);
  width: 100%;
  height: 100px;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Logo>
        <Link href="/">Beers</Link>
      </Logo>
    </HeaderStyles>
  );
}
