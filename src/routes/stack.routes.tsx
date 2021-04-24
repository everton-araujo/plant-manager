import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/welcome/Welcome';
import { UserIdentification } from '../pages/userIdentification/UserIdentification';
import { Confirmation } from '../pages/confirmation/Confirmation';
import { PlantSelect } from '../pages/plant/select/PlantSelect';
import { PlantSave } from '../pages/plant/save/PlantSave';
import { MyPlants } from '../pages/plant/plants/MyPlants';

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
      <StackRoutes.Screen name='PlantSave' component={PlantSave} />
      <StackRoutes.Screen name='MyPlants' component={MyPlants} />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;
