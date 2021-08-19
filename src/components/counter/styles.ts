import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../../global/theme';

interface Props {
  itemSelected: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: ${RFValue(115)}px;
  padding-right: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;
  padding-top: ${RFValue(10)}px;
  padding-left: ${RFValue(10)}px;
  border-width: ${Props => (Props.itemSelected ? 1 : 0)}px;
  margin-bottom: ${RFValue(30)}px;
  border-radius: ${RFValue(5)}px;
  background-color: ${Props =>
    Props.itemSelected
      ? theme.colors.counterBackGroundSelected
      : theme.colors.counterBackGroundNotSelected};
  justify-content: space-between;
`;

export const Title = styled.Text<Props>`
  width: 100%;
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  color: ${Props =>
    Props.itemSelected
      ? theme.colors.counterTitleSelected
      : theme.colors.counterTitleNotSelected};
`;

export const Count = styled.Text<Props>`
  width: 100%;
  text-align: right;
  font-size: ${RFValue(50)}px;
  font-weight: bold;
  color: ${Props =>
    Props.itemSelected
      ? theme.colors.counterCountSelected
      : theme.colors.counterCountNotSelected};
`;
