import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../Global/theme';

interface Props {
  itemSelected: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${RFValue(115)}px;
  padding-right: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;
  padding-top: ${RFValue(10)}px;
  padding-left: ${RFValue(10)}px;
  border-width: ${Props => (Props.itemSelected ? 2 : 0)}px;
  margin-bottom: ${RFValue(20)}px;
  background-color: ${Props =>
    Props.itemSelected
      ? theme.colors.couterBackGoundSelected
      : theme.colors.couterBackGoundNotSelected};
  justify-content: space-between;
`;

export const Title = styled.Text<Props>`
  width: 100%;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${Props =>
    Props.itemSelected
      ? theme.colors.couterTitleSelected
      : theme.colors.couterTitleNotSelected};
`;

export const Count = styled.Text<Props>`
  width: 100%;
  text-align: right;
  font-size: ${RFValue(50)}px;
  font-weight: bold;
  color: ${Props =>
    Props.itemSelected
      ? theme.colors.couterCountSelected
      : theme.colors.couterCountNotSelected};
`;
