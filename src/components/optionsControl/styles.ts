import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(100)}px;
  height: ${RFValue(60)}px;
  margin-top: ${RFValue(20)}px;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.tabButtonActive};
  border-radius: ${RFValue(10)}px;
  padding: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: ${theme.colors.TabButtonBackGround};
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(5)}px;
`;
