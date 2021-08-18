import React from 'react';
import {Counter} from '../../components/counter';
import {Header} from '../../components/header';
import {Container, ContainerList, ListConters} from './styles';

export function DashBoard() {
  const Contros = [
    {
      id: '1',
      title: 'Contador 1',
      count: 8,
      itemSelected: true,
    },
    {
      id: '2',
      title: 'Contador 2',
      count: 145,
      itemSelected: false,
    },
  ];
  return (
    <Container>
      <Header title="DashBoard" />
      <ContainerList>
        <ListConters
          data={Contros}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Counter
              itemSelected={item.itemSelected}
              title={item.title}
              count={item.count}
            />
          )}
        />
      </ContainerList>
    </Container>
  );
}
