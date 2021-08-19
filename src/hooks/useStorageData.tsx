import React, {ReactNode, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageDataProps {
  children: ReactNode;
}

interface NewCouter {
  id: string;
  title: string;
  count: number;
  itemSelected: boolean;
}

interface IStorageDataContext {
  insertRegister(formDara: NewCouter): Promise<void>;
  SearchRegister(): Promise<string>;
  SearchItemSelected(): Promise<string>;
  ItemSelected(Item: NewCouter): Promise<void>;
  OperationItemSelected(operation: string): Promise<void>;
  DeleteItemSelected(): Promise<void>;
}

const StorageDataContext = createContext({} as IStorageDataContext);

function StorageData({children}: StorageDataProps) {
  const userStorgeKey = '@contador:couters';

  async function insertRegister(newCouterData: NewCouter) {
    try {
      const response = await AsyncStorage.getItem(userStorgeKey);
      const responseCurrent = response ? JSON.parse(response) : [];

      const responseformatted = [...responseCurrent, newCouterData];

      await AsyncStorage.setItem(
        userStorgeKey,
        JSON.stringify(responseformatted),
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async function SearchRegister() {
    const response = await AsyncStorage.getItem(userStorgeKey);

    if (!response) {
      return '';
    }

    return response;
  }

  async function ItemSelected(Item: NewCouter) {
    const response = await AsyncStorage.getItem(userStorgeKey);
    const itemId = Item.id;

    const counters = response ? JSON.parse(response) : [];
    counters.map((item: NewCouter) =>
      item.id === itemId
        ? (item.itemSelected = true)
        : (item.itemSelected = false),
    );
    await AsyncStorage.setItem(userStorgeKey, JSON.stringify(counters));
    await AsyncStorage.setItem(
      '@contador:couterSelected',
      JSON.stringify(Item),
    );
  }

  async function SearchItemSelected() {
    const response = await AsyncStorage.getItem('@contador:couterSelected');

    if (!response) {
      return '';
    }

    return response;
  }

  async function DeleteItemSelected() {
    const responseItemSelected = await AsyncStorage.getItem(
      '@contador:couterSelected',
    );
    const itemSelected = responseItemSelected
      ? JSON.parse(responseItemSelected)
      : {};

    var itemSelectedId = itemSelected.id;

    const response = await AsyncStorage.getItem(userStorgeKey);
    var counters = response ? JSON.parse(response) : [];
    var coutersId = counters.map(item => item.id);

    var indiceItemSelected = coutersId.indexOf(itemSelectedId);

    while (indiceItemSelected >= 0) {
      counters.splice(indiceItemSelected, 1);
      indiceItemSelected = counters.indexOf(itemSelectedId);
    }
    await AsyncStorage.setItem(userStorgeKey, JSON.stringify(counters));
  }

  async function OperationItemSelected(operation: string) {
    const response = await AsyncStorage.getItem('@contador:couterSelected');
    const counterSelected = response && JSON.parse(response);

    switch (operation) {
      case 'increment':
        counterSelected.count = counterSelected.count + 1;
        await AsyncStorage.setItem(
          '@contador:couterSelected',
          JSON.stringify(counterSelected),
        );
        break;
      case 'decrement':
        counterSelected.count = counterSelected.count - 1;
        await AsyncStorage.setItem(
          '@contador:couterSelected',
          JSON.stringify(counterSelected),
        );

        break;
      case 'reset':
        counterSelected.count = 0;
        await AsyncStorage.setItem(
          '@contador:couterSelected',
          JSON.stringify(counterSelected),
        );

        break;
      default:
        break;
    }
    var itemSelectedId = counterSelected.id;

    const resp = await AsyncStorage.getItem(userStorgeKey);
    var counters = resp ? JSON.parse(resp) : [];
    var coutersId = counters.map(item => item.id);

    var indiceItemSelected = coutersId.indexOf(itemSelectedId);
    counters.splice(indiceItemSelected, 1);
    counters.push(counterSelected);

    await AsyncStorage.setItem(userStorgeKey, JSON.stringify(counters));
  }

  return (
    <StorageDataContext.Provider
      value={{
        insertRegister,
        SearchRegister,
        ItemSelected,
        SearchItemSelected,
        OperationItemSelected,
        DeleteItemSelected,
      }}>
      {children}
    </StorageDataContext.Provider>
  );
}

function useStorageData() {
  const context = useContext(StorageDataContext);
  return context;
}

export {StorageData, useStorageData};
