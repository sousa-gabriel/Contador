import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
export const ContainerList = styled.View`
  height: 70%;
  width: 90%;
`;
export const ListCounters = styled.FlatList`
  width: 100%;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const EmptyListMessage = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${theme.colors.headerTitle};
  font-weight: bold;
`;
