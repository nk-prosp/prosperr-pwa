import React from 'react';
import { HeaderWrapper, Logo, MenuIcon } from './header.styled';

export default function Header() {
  return (
      <HeaderWrapper>
          <Logo src='./assets/images/logo.png' />
          <MenuIcon/>
      </HeaderWrapper>
  );
}
