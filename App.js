import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, Home } from './src/Screen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Signup" component={Signup}
         options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Home" component={Home} 
         options={{
          headerLeft: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


