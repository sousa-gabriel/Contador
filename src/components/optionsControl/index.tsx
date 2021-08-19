import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../global/theme';
import {Container, Title} from './styles';

interface Props extends TouchableOpacityProps {
  icon: string;
  title: string;
}

export function OptionsControl({icon, title, ...rest}: Props) {
  return (
    <Container activeOpacity={0.7} {...rest} style={theme.colors.shadow}>
      <Icon name={icon} size={28} />
      <Title>{title}</Title>
    </Container>
  );
}
