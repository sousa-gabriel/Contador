import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, GoBack} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon?: boolean;
}

export function Header({title, icon, ...rest}: Props) {
  return (
    <Container>
      {icon && (
        <GoBack {...rest}>
          <Icon name="arrow-left" size={30} color="#FFFFFF" />
        </GoBack>
      )}
      <Title>{title}</Title>
    </Container>
  );
}
