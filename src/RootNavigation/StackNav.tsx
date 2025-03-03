import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator screenOptions={{}}>
            {/* <Stack.Screen name="Home" component={Screens} /> */}
        </Stack.Navigator>
    );
};

export default StackNav;
