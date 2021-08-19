import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  width: 90%;
  margin-left: ${RFValue(15)}px;
  margin-right: ${RFValue(15)}px;
  padding-left: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  text-align: center;
`;
