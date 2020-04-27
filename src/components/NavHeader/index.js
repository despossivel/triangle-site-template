import React from 'react';

import { Header, Logo } from './styles';
import { Actions } from '../../utils/theme'

export default function NavHeader() {
  return (<Header>
    <Logo>
      <img src="/logo.png" alt="img" />
    </Logo>
    <Actions>
      {/* <a href={true}>Como funciona</a> */}
      <a href={"https://api.whatsapp.com/send?phone=55999999999999&text=teste"}  rel="noopener noreferrer"  target="_blank">Fale conosco</a>
      <button>Login lojista</button>
    </Actions>
  </Header>);
}
