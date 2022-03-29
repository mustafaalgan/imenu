import React, { useEffect } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./navigation/CustomDrawer";
import { DataProvider } from './contexts/DataContext';

const Stack = createNativeStackNavigator();

const App = () => {

  return (


    <NavigationContainer>
      <DataProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"CustomDrawer"}
        >
          <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        </Stack.Navigator>
      </DataProvider>

    </NavigationContainer>
  );
};

export default App;
