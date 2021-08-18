import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../Global/theme';
import {Container, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonCouters({title, ...rest}: Props) {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Title>{title}</Title>
      <Icon
        name={title === 'Add Couter' ? 'file-plus' : 'trash'}
        size={25}
        color={theme.colors.TabButtonBackGround}
      />
    </Container>
  );
}
