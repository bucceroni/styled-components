import React from 'react';

//COMPONENTS
import Button from './components/Button';
import ButtonAdaptingBasedOnProps from './components/ButtonAdaptingBasedOnProps';
import Container from './components/Container';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
      <div>
        <ButtonAdaptingBasedOnProps>
          Button Adapting Based On Props
        </ButtonAdaptingBasedOnProps>
        <ButtonAdaptingBasedOnProps primary>
          Button Adapting Based On Props - Primary
        </ButtonAdaptingBasedOnProps>
      </div>
    </>
  );
}

export default App;
