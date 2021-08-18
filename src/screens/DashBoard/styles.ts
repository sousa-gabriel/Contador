import styled from 'styled-components/native';
import theme from '../../Global/theme';

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
export const ListConters = styled.FlatList`
  width: 100%;
`;
