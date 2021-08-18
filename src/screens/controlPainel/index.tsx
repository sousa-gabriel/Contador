import React from 'react';
import {ButtonCouters} from '../../components/buttonCouters';
import {Header} from '../../components/header';
import {Container, Title, ContainerButton, SelectedContainer} from './styles';

export function ControlPainel() {
  return (
    <Container>
      <Header title="Control Painel" />
      <Title>Counters</Title>
      <ContainerButton>
        <ButtonCouters title="Add Couter" />
        <ButtonCouters title="Remove Couter" />
      </ContainerButton>
      <SelectedContainer>
        <Title>Selected Couter</Title>
      </SelectedContainer>
    </Container>
  );
}
