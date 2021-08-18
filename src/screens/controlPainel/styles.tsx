import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../Global/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.primary};
`;
export const Title = styled.Text`
  width: 100%;
  margin-top: 30%;
  margin-left: ${RFValue(20)}px;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${theme.colors.headerBackGround};
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SelectedContainer = styled.View``;
