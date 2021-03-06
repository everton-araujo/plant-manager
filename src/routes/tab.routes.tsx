import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { PlantSelect } from '../pages/plant/select/PlantSelect';

import { theme } from '../infrastructure/theme';
import { MyPlants } from '../pages/plant/plants/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: Platform.OS === 'ios' ? 80 : 50
        }
      }}
    >
      <AppTab.Screen
        name='Nova Planta'
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Icon
              name='plus-circle'
              size={size}
              color={color}
            />
          ))
        }}
      />

      <AppTab.Screen
        name='Minhas Plantas'
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Icon
              name='list'
              size={size}
              color={color}
            />
          ))
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;
