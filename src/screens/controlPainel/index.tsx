import React, {useEffect, useState, useCallback} from 'react';
import {Modal} from 'react-native';

import {ButtonCounters} from '../../components/buttonCounters';
import {Counter} from '../../components/counter';
import {Header} from '../../components/header';
import {OptionsControl} from '../../components/optionsControl';
import {ModalAdd} from '../../components/modalAdd';
import {useStorageData} from '../../hooks/useStorageData';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  ContainerButton,
  SelectedContainer,
  Content,
} from './styles';

interface CounterSelected {
  id: string;
  title: string;
  count: number;
  itemSelected: boolean;
}

export function ControlPainel() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState<CounterSelected>();
  const {SearchItemSelected, OperationItemSelected, DeleteItemSelected} =
    useStorageData();

  function handleModal() {
    setModalVisible(!modalVisible);
  }

  async function handleOperation(operation: string) {
    await OperationItemSelected(operation);
    loadData();
  }

  async function DeleteItem() {
    await DeleteItemSelected();
    navigation.navigate('DashBoard');
  }

  async function loadData() {
    const response = await SearchItemSelected();
    const counter = response ? JSON.parse(response) : {};
    setItemSelected(counter);
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
      <Header title="Control Painel" />
      <Title>Counters</Title>
      <ContainerButton>
        <ButtonCounters title="Add Counter" onPress={handleModal} />
        <ButtonCounters title="Remove Counter" onPress={DeleteItem} />
      </ContainerButton>
      <Title>Selected Counter</Title>
      <SelectedContainer>
        {!itemSelected ? (
          <Counter title="Not Counter" count={0} itemSelected={false} />
        ) : (
          <Counter
            title={itemSelected.title}
            count={itemSelected.count}
            itemSelected={itemSelected.itemSelected}
          />
        )}
        <Content>
          <OptionsControl
            icon="arrow-up-circle"
            title="increment"
            onPress={() => {
              handleOperation('increment');
            }}
          />
          <OptionsControl
            icon="arrow-down-circle"
            title="decrement"
            onPress={() => {
              handleOperation('decrement');
            }}
          />
          <OptionsControl
            icon="rotate-cw"
            title="reset"
            onPress={() => {
              handleOperation('reset');
            }}
          />
        </Content>
      </SelectedContainer>
      <Modal visible={modalVisible}>
        <ModalAdd
          onCloseModal={() => {
            handleModal();
          }}
        />
      </Modal>
    </Container>
  );
}
