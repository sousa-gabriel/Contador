import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform} from 'react-native';
import theme from '../../Global/theme';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(70)}px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  background-color: ${theme.colors.headerBackGround};
  position: absolute;
  top: 0px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${theme.colors.headerTitle};
  margin-left: ${RFValue(20)}px;
  margin-bottom: ${RFValue(5)}px;
`;
