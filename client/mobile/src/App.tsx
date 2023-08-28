import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/Products';
import Orders from './screens/Orders';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='Orders' component={Orders} />
    </Stack.Navigator>
  );
};

export default App;
