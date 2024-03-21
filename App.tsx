import React from 'react';

import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { COLORS } from './src/theme/theme';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name='Tab'
              component={TabNavigator}
              options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
              name='Details'
              component={DetailsScreen}
              options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
              name='Payment'
              component={PaymentScreen}
              options={{ animation: 'slide_from_bottom' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  };
export default App
