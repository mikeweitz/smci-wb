import React, { Component } from 'react';
import Header from '../components/header';

import * as S from './styled-elements';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <S.Main>
        <Header />
        {this.props.children}
      </S.Main>
    );
  }
}

export default Layout;
