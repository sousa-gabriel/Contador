import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-top: ${RFValue(100)}px;
  align-items: center;
`;

export const ContainerCounter = styled.View`
  width: 90%;
  padding: ${RFValue(10)}px;
`;
