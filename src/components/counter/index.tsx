import React from 'react';
import {Container, Title, Count} from './styles';

interface Props {
  itemSelected: boolean;
  title: string;
  count: number;
}

export function Counter({itemSelected, title, count}: Props) {
  return (
    <Container itemSelected={itemSelected}>
      <Title itemSelected={itemSelected}>{title}</Title>
      <Count itemSelected={itemSelected}>{count}</Count>
    </Container>
  );
}
