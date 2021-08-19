import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import theme from '../../global/theme';
import {Container, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: Props) {
  return (
    <Container activeOpacity={0.7} {...rest} style={theme.colors.shadow}>
      <Title>{title}</Title>
    </Container>
  );
}
