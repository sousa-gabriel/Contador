import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../global/theme';
import {Container, Title} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonCounters({title, ...rest}: Props) {
  return (
    <Container {...rest} activeOpacity={0.7} style={theme.colors.shadow}>
      <Icon
        name={title === 'Add Counter' ? 'file-plus' : 'trash'}
        size={30}
        color={theme.colors.TabButtonBackGround}
      />
      <Title>{title}</Title>
    </Container>
  );
}
