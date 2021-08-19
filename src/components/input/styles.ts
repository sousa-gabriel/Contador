import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  width: 90%;
  height: ${RFValue(60)}px;
  background-color: ${theme.colors.InputBackGround};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const InputText = styled.TextInput`
  width: 80%;
  height: 100%;
  margin-left: ${RFValue(20)}px;
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.title};
`;
