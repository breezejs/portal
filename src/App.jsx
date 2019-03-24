import React, {Fragment} from 'react';
import GlobalStyles from './components/GlobalStyles';
import Toolbar from './components/Toolbar';
import Logo from './components/Logo';
import Wrapper from './components/Wrapper';

function App () {
  const title = 'BreezeJS';

  return (
    <Fragment>
      <GlobalStyles />

      <Toolbar>
        <Logo>{title}</Logo>
      </Toolbar>

      <Wrapper>Hello world</Wrapper>
    </Fragment>
  );
}

export default App;
