import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import theme from '../../global/theme';
import {Container, Title, Count} from './styles';

export interface CouterProps extends TouchableOpacityProps {
  itemSelected: boolean;
  title: string;
  count: number;
}

export function Counter({itemSelected, title, count, ...rest}: CouterProps) {
  return (
    <Container
      itemSelected={itemSelected}
      style={theme.colors.shadow}
      {...rest}>
      <Title itemSelected={itemSelected}>{title}</Title>
      <Count itemSelected={itemSelected}>{count}</Count>
    </Container>
  );
}
