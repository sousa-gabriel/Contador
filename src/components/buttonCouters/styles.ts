import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../Global/theme';

export const Container = styled.TouchableOpacity`
  width: 40%;
  height: ${RFValue(70)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
  background-color: ${theme.colors.couterBackGoundSelected};
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${RFValue(10)}px;
  color: ${theme.colors.headerBackGround};
`;
