import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {ControlPainel} from '../screens/controlPainel';
import {DashBoard} from '../screens/dashBoard';
import theme from '../global/theme';
import Icon from 'react-native-vector-icons/Feather';
import {getBottomSpace} from 'react-native-iphone-x-helper';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabBarRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.tabButtonActive,
        tabBarInactiveTintColor: theme.colors.tabButtonInative,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
          height: Platform.OS === 'ios' ? 88 : 58,
          backgroundColor: theme.colors.TabButtonBackGround,
        },
      }}>
      <Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Control Painel"
        component={ControlPainel}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
