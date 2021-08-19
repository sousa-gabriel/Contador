import React from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../global/theme';
import {Container, InputText} from './styles';

interface Props extends TextInputProps {
  icon: string;
  placeHolder: string;
}
export function Input({icon, placeHolder, ...rest}: Props) {
  return (
    <Container style={theme.colors.shadow}>
      <Icon name={icon} size={25} color={theme.colors.inputIcon} />
      <InputText
        {...rest}
        placeholder={placeHolder}
        placeholderTextColor={theme.colors.inputIcon}
        autoCorrect={false}
      />
    </Container>
  );
}
