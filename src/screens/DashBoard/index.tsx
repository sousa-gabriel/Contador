import React, {useState, useEffect, useCallback} from 'react';
import {Counter} from '../../components/counter';
import {Header} from '../../components/header';
import {useStorageData} from '../../hooks/useStorageData';
import {useFocusEffect} from '@react-navigation/native';
import {
  Container,
  ContainerList,
  ListCounters,
  EmptyListContainer,
  EmptyListMessage,
} from './styles';

interface CountersDataProps {
  id: string;
  title: string;
  count: number;
  itemSelected: boolean;
}

type CountersListDataProps = CountersDataProps[];

export function DashBoard() {
  const {SearchRegister, ItemSelected} = useStorageData();
  const [data, setData] = useState<CountersListDataProps>([]);

  async function handleSelected(item: CountersDataProps) {
    await ItemSelected(item);
    loadData();
  }

  async function loadData() {
    const response = await SearchRegister();
    const counters = response ? JSON.parse(response) : [];
    setData(counters);
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  return (
    <Container>
      <Header title="DashBoard" />
      <ContainerList>
        <ListCounters
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <EmptyListContainer>
              <EmptyListMessage>Your list has not items</EmptyListMessage>
            </EmptyListContainer>
          }
          data={data}
          renderItem={({item}) => (
            <Counter
              onPress={() => {
                handleSelected(item);
              }}
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
