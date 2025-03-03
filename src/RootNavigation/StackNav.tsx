import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreens';

const Stack = createNativeStackNavigator();



const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{

        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default StackNav;
