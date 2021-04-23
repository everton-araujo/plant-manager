import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/welcome/Welcome';
import { UserIdentification } from '../pages/userIdentification/UserIdentification';
import { Confirmation } from '../pages/confirmation/Confirmation';
import { PlantSelect } from '../pages/plant/PlantSelect';

import { theme } from '../infrastructure/theme';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <StackRoutes.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.white
        }
      }}
    >
      <StackRoutes.Screen name='Welcome' component={Welcome} />
      <StackRoutes.Screen name='UserIdentification' component={UserIdentification} />
      <StackRoutes.Screen name='Confirmation' component={Confirmation} />
      <StackRoutes.Screen name='PlantSelect' component={PlantSelect} />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
