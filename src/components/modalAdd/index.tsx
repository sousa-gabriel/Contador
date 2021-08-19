import React, {useState} from 'react';
import {Button} from '../button';
import {Counter} from '../counter';
import {Header} from '../header';
import {Input} from '../input';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import {useStorageData} from '../../hooks/useStorageData';
import {Container, ContainerCounter} from './styles';

interface Props {
  onCloseModal: () => void;
}

export function ModalAdd({onCloseModal}: Props) {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const {insertRegister} = useStorageData();

  async function handleRegister() {
    setTitle(title);
    const newCounterData = {
      id: String(uuid.v4()),
      title: title,
      count: 0,
      itemSelected: false,
    };
    try {
      return await insertRegister(newCounterData);
    } catch (error) {
      console.log(error);
      Alert.alert('Unable to save your counter');
    } finally {
      onCloseModal();
      navigation.navigate('DashBoard');
    }
  }

  return (
    <Container>
      <Header title="New Counter" icon onPress={onCloseModal} />
      <ContainerCounter>
        <Counter title={title} count={0} itemSelected={false} />
      </ContainerCounter>
      <Input
        icon="sidebar"
        placeHolder="Insert your title"
        onChangeText={setTitle}
      />
      <Button
        title="Save"
        onPress={() => {
          handleRegister();
        }}
      />
    </Container>
  );
}
