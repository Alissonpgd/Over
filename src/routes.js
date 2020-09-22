import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Localizacao from './pages/Localizacao';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Localizacao" component={Localizacao}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
